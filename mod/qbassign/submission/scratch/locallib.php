<?php  
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * This file contains the definition for the library class for scratch submission plugin
 *
 * This class provides all the functionality for the new qbassign module.
 *
 * @package qbassignsubmission_scratch
 * @copyright 2012 NetSpot {@link http://www.netspot.com.au}
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();
// File area for Scratch submission qbassignment.
define('qbassignsubmission_scratch_FILEAREA', 'submissions_scratch');

/**
 * library class for scratch submission plugin extending submission plugin base class
 *
 * @package qbassignsubmission_scratch
 * @copyright 2012 NetSpot {@link http://www.netspot.com.au}
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class qbassign_submission_scratch extends qbassign_submission_plugin {

    /**
     * Get the name of the Scratch submission plugin
     * @return string
     */
    public function get_name() {
        return get_string('scratch', 'qbassignsubmission_scratch');
    }


    /**
     * Get scratch submission information from the database
     *
     * @param  int $submissionid
     * @return mixed
     */
    private function get_scratch_submission($submissionid) {
        global $DB;

        return $DB->get_record('qbassignsubmission_scratch', array('submission'=>$submissionid));
    }

    /**
     * Remove a submission.
     *
     * @param stdClass $submission The submission
     * @return boolean
     */
    public function remove(stdClass $submission) {
        global $DB;
        //print_r($submission);die();
        $submissionid = $submission ? $submission->id : 0;
        if ($submissionid) {
            $DB->delete_records('qbassignsubmission_scratch', array('submission' => $submissionid));
        }
        return true;
    }

    /**
     * Get the settings for scratch submission plugin
     *
     * @param MoodleQuickForm $mform The form to add elements to
     * @return void
     */
    public function get_settings(MoodleQuickForm $mform) {
        global $CFG, $COURSE;

        
    }

    /**
     * Save the settings for scratch submission plugin
     *
     * @param stdClass $data
     * @return bool
     */
    public function save_settings(stdClass $data) {
        

        return true;
    }

    /**
     * Add form elements for settings
     *
     * @param mixed $submission can be null
     * @param MoodleQuickForm $mform
     * @param stdClass $data
     * @return true if elements were added to the form
     */
    public function get_form_elements($submission, MoodleQuickForm $mform, stdClass $data) {
        $elements = array();

        $editoroptions = $this->get_edit_options();
        $submissionid = $submission ? $submission->id : 0;

        if (!isset($data->scratch)) {
            $data->scratch = '';
        }
        if (!isset($data->scratchformat)) {
            $data->scratchformat = editors_get_preferred_format();
        }

        if ($submission) {
            $scratchsubmission = $this->get_scratch_submission($submission->id);
            if ($scratchsubmission) {
                $data->scratch = $scratchsubmission->scratch;
                $data->scratchformat = $scratchsubmission->onlineformat;
            }

        }

        $data = file_prepare_standard_editor($data,
                                             'scratch',
                                             $editoroptions,
                                             $this->qbassignment->get_context(),
                                             'qbassignsubmission_scratch',
                                             qbassignsubmission_scratch_FILEAREA,
                                             $submissionid);
        $mform->addElement('editor', 'scratch_editor', $this->get_name(), null, $editoroptions);

        return true;
    }

    /**
     * Editor format options
     *
     * @return array
     */
    private function get_edit_options() {
        $editoroptions = array(
            'noclean' => false,
            'maxfiles' => EDITOR_UNLIMITED_FILES,
            'maxbytes' => $this->qbassignment->get_course()->maxbytes,
            'context' => $this->qbassignment->get_context(),
            'return_types' => (FILE_INTERNAL | FILE_EXTERNAL | FILE_CONTROLLED_LINK),
            'removeorphaneddrafts' => true // Whether or not to remove any draft files which aren't referenced in the text.
        );
        return $editoroptions;
    }

    /**
     * Save data to the database and trigger plagiarism plugin,
     * if enabled, to scan the uploaded content via events trigger
     *
     * @param stdClass $submission
     * @param stdClass $data
     * @return bool
     */
    public function save(stdClass $submission, stdClass $data) {
        global $USER, $DB;

        $editoroptions = $this->get_edit_options();

        $data = file_postupdate_standard_editor($data,
                                                'scratch',
                                                $editoroptions,
                                                $this->qbassignment->get_context(),
                                                'qbassignsubmission_scratch',
                                                qbassignsubmission_scratch_FILEAREA,
                                                $submission->id);

        $scratchsubmission = $this->get_scratch_submission($submission->id);

        $fs = get_file_storage();

        $files = $fs->get_area_files($this->qbassignment->get_context()->id,
                                     'qbassignsubmission_scratch',
                                     qbassignsubmission_scratch_FILEAREA,
                                     $submission->id,
                                     'id',
                                     false);

        // Check word count before submitting anything.
        $exceeded = $this->check_word_count(trim($data->scratch));
        if ($exceeded) {
            $this->set_error($exceeded);
            return false;
        }

        $params = array(
            'context' => context_module::instance($this->qbassignment->get_course_module()->id),
            'courseid' => $this->qbassignment->get_course()->id,
            'objectid' => $submission->id,
            'other' => array(
                'pathnamehashes' => array_keys($files),
                'content' => trim($data->scratch),
                'format' => $data->scratch_editor['format']
            )
        );
        if (!empty($submission->userid) && ($submission->userid != $USER->id)) {
            $params['relateduserid'] = $submission->userid;
        }
        if ($this->qbassignment->is_blind_marking()) {
            $params['anonymous'] = 1;
        }
        $event = \qbassignsubmission_scratch\event\assessable_uploaded::create($params);
        $event->trigger();

        $groupname = null;
        $groupid = 0;
        // Get the group name as other fields are not transcribed in the logs and this information is important.
        if (empty($submission->userid) && !empty($submission->groupid)) {
            $groupname = $DB->get_field('groups', 'name', array('id' => $submission->groupid), MUST_EXIST);
            $groupid = $submission->groupid;
        } else {
            $params['relateduserid'] = $submission->userid;
        }

        $count = count_words($data->scratch);

        // Unset the objectid and other field from params for use in submission events.
        unset($params['objectid']);
        unset($params['other']);
        $params['other'] = array(
            'submissionid' => $submission->id,
            'submissionattempt' => $submission->attemptnumber,
            'submissionstatus' => $submission->status,
            'scratchwordcount' => $count,
            'groupid' => $groupid,
            'groupname' => $groupname
        );

        if ($scratchsubmission) {

            $scratchsubmission->scratch = $data->scratch;
            $scratchsubmission->onlineformat = $data->scratch_editor['format'];
            $params['objectid'] = $scratchsubmission->id;
            $updatestatus = $DB->update_record('qbassignsubmission_scratch', $scratchsubmission);
            $event = \qbassignsubmission_scratch\event\submission_updated::create($params);
            $event->set_qbassign($this->qbassignment);
            $event->trigger();
            return $updatestatus;
        } else {

            $scratchsubmission = new stdClass();
            $scratchsubmission->scratch = $data->scratch;
            $scratchsubmission->onlineformat = $data->scratch_editor['format'];

            $scratchsubmission->submission = $submission->id;
            $scratchsubmission->qbassignment = $this->qbassignment->get_instance()->id;
            $scratchsubmission->id = $DB->insert_record('qbassignsubmission_scratch', $scratchsubmission);
            $params['objectid'] = $scratchsubmission->id;
            $event = \qbassignsubmission_scratch\event\submission_created::create($params);
            $event->set_qbassign($this->qbassignment);
            $event->trigger();
            return $scratchsubmission->id > 0;
        }
    }

    /**
     * Return a list of the text fields that can be imported/exported by this plugin
     *
     * @return array An array of field names and descriptions. (name=>description, ...)
     */
    public function get_editor_fields() {
        return array('scratch' => get_string('pluginname', 'qbassignsubmission_scratch'));
    }

    /**
     * Get the saved text content from the editor
     *
     * @param string $name
     * @param int $submissionid
     * @return string
     */
    public function get_editor_text($name, $submissionid) {
        if ($name == 'scratch') {
            $scratchsubmission = $this->get_scratch_submission($submissionid);
            if ($scratchsubmission) {
                return $scratchsubmission->scratch;
            }
        }

        return '';
    }

    /**
     * Get the content format for the editor
     *
     * @param string $name
     * @param int $submissionid
     * @return int
     */
    public function get_editor_format($name, $submissionid) {
        if ($name == 'scratch') {
            $scratchsubmission = $this->get_scratch_submission($submissionid);
            if ($scratchsubmission) {
                return $scratchsubmission->onlineformat;
            }
        }

        return 0;
    }


     /**
      * Display scratch word count in the submission status table
      *
      * @param stdClass $submission
      * @param bool $showviewlink - If the summary has been truncated set this to true
      * @return string
      */
    public function view_summary(stdClass $submission, & $showviewlink) {
        global $CFG,$DB;

        $scratchsubmission = $this->get_scratch_submission($submission->id);

         // Additional Explanations
        $get_submited = $DB->get_record('qbassignsubmission_scratch', array('submission' => $submission->id));
        $expln = ($get_submited->explanation!='')?$get_submited->explanation:'-';

        // Always show the view link.
        $showviewlink = true;

        if ($scratchsubmission) {
            // This contains the shortened version of the text plus an optional 'Export to portfolio' button.
            $text = $this->qbassignment->render_editor_content(qbassignsubmission_scratch_FILEAREA,
                                                             $scratchsubmission->submission,
                                                             $this->get_type(),
                                                             'scratch',
                                                             'qbassignsubmission_scratch', true);

            // The actual submission text.
            $scratch = trim($scratchsubmission->scratch);
            // The shortened version of the submission text.
            $shorttext = shorten_text($scratch, 140);

            $plagiarismlinks = '';

            if (!empty($CFG->enableplagiarism)) {
                require_once($CFG->libdir . '/plagiarismlib.php');

                $plagiarismlinks .= plagiarism_get_links(array('userid' => $submission->userid,
                    'content' => $scratch,
                    'cmid' => $this->qbassignment->get_course_module()->id,
                    'course' => $this->qbassignment->get_course()->id,
                    'qbassignment' => $submission->qbassignment));
            }

            $checkstatus = $DB->get_record('qbassign_submission', array('id' => $submission->id));

            if(!empty($checkstatus) and $checkstatus->status != 'submitted')
            return array('',1);

            // We compare the actual text submission and the shortened version. If they are not equal, we show the word count.
            if ($scratch != $shorttext) {
                $wordcount = get_string('numwords', 'qbassignsubmission_scratch', count_words($scratch));

                return array($plagiarismlinks.' ',1);
            } else {
                return array($plagiarismlinks."<div>Additional Comments :<br/>".$expln."</div>",1);
            }
        }
        return '';
    }

    /**
     * Produce a list of files suitable for export that represent this submission.
     *
     * @param stdClass $submission - For this is the submission data
     * @param stdClass $user - This is the user record for this submission
     * @return array - return an array of files indexed by filename
     */
    public function get_files(stdClass $submission, stdClass $user) {
        global $DB;

        $files = array();
        $scratchsubmission = $this->get_scratch_submission($submission->id);

        // Note that this check is the same logic as the result from the is_empty function but we do
        // not call it directly because we already have the submission record.
        if ($scratchsubmission) {
            // Do not pass the text through format_text. The result may not be displayed in Moodle and
            // may be passed to external services such as document conversion or portfolios.
            $formattedtext = $this->qbassignment->download_rewrite_pluginfile_urls($scratchsubmission->scratch, $user, $this);
            $head = '<head><meta charset="UTF-8"></head>';
            $submissioncontent = '<!DOCTYPE html><html>' . $head . '<body>'. $formattedtext . '</body></html>';

            $filename = get_string('scratchfilename', 'qbassignsubmission_scratch');
            $files[$filename] = array($submissioncontent);

            $fs = get_file_storage();

            $fsfiles = $fs->get_area_files($this->qbassignment->get_context()->id,
                                           'qbassignsubmission_scratch',
                                           qbassignsubmission_scratch_FILEAREA,
                                           $submission->id,
                                           'timemodified',
                                           false);

            foreach ($fsfiles as $file) {
                $files[$file->get_filename()] = $file;
            }
        }

        return $files;
    }

    /**
     * Display the saved text content from the editor in the view table
     *
     * @param stdClass $submission
     * @return string
     */
    public function view(stdClass $submission) {
        global $CFG;
        $result = '';
        $plagiarismlinks = '';

        $scratchsubmission = $this->get_scratch_submission($submission->id);

        if ($scratchsubmission) {

            // Render for portfolio API.
            $result .= $this->qbassignment->render_editor_content(qbassignsubmission_scratch_FILEAREA,
                                                                $scratchsubmission->submission,
                                                                $this->get_type(),
                                                                'scratch',
                                                                'qbassignsubmission_scratch');

            if (!empty($CFG->enableplagiarism)) {
                require_once($CFG->libdir . '/plagiarismlib.php');

                $plagiarismlinks .= plagiarism_get_links(array('userid' => $submission->userid,
                    'content' => trim($scratchsubmission->scratch),
                    'cmid' => $this->qbassignment->get_course_module()->id,
                    'course' => $this->qbassignment->get_course()->id,
                    'qbassignment' => $submission->qbassignment));
            }
        }
        return '';
        return $plagiarismlinks . $result;
    }

    /**
     * Return true if this plugin can upgrade an old Moodle 2.2 qbassignment of this type and version.
     *
     * @param string $type old qbassignment subtype
     * @param int $version old qbassignment version
     * @return bool True if upgrade is possible
     */
    public function can_upgrade($type, $version) {
        if ($type == 'online' && $version >= 2011112900) {
            return true;
        }
        return false;
    }


    /**
     * Upgrade the settings from the old qbassignment to the new plugin based one
     *
     * @param context $oldcontext - the database for the old qbassignment context
     * @param stdClass $oldqbassignment - the database for the old qbassignment instance
     * @param string $log record log events here
     * @return bool Was it a success?
     */
    public function upgrade_settings(context $oldcontext, stdClass $oldqbassignment, & $log) {
        // No settings to upgrade.
        return true;
    }

    /**
     * Upgrade the submission from the old qbassignment to the new one
     *
     * @param context $oldcontext - the database for the old qbassignment context
     * @param stdClass $oldqbassignment The data record for the old qbassignment
     * @param stdClass $oldsubmission The data record for the old submission
     * @param stdClass $submission The data record for the new submission
     * @param string $log Record upgrade messages in the log
     * @return bool true or false - false will trigger a rollback
     */
    public function upgrade(context $oldcontext,
                            stdClass $oldqbassignment,
                            stdClass $oldsubmission,
                            stdClass $submission,
                            & $log) {
        global $DB;

        $scratchsubmission = new stdClass();
        $scratchsubmission->scratch = $oldsubmission->data1;
        $scratchsubmission->onlineformat = $oldsubmission->data2;

        $scratchsubmission->submission = $submission->id;
        $scratchsubmission->qbassignment = $this->qbassignment->get_instance()->id;

        if ($scratchsubmission->scratch === null) {
            $scratchsubmission->scratch = '';
        }

        if ($scratchsubmission->onlineformat === null) {
            $scratchsubmission->onlineformat = editors_get_preferred_format();
        }

        if (!$DB->insert_record('qbassignsubmission_scratch', $scratchsubmission) > 0) {
            $log .= get_string('couldnotconvertsubmission', 'mod_qbassign', $submission->userid);
            return false;
        }

        // Now copy the area files.
        $this->qbassignment->copy_area_files_for_upgrade($oldcontext->id,
                                                        'mod_qbassignment',
                                                        'submission',
                                                        $oldsubmission->id,
                                                        $this->qbassignment->get_context()->id,
                                                        'qbassignsubmission_scratch',
                                                        qbassignsubmission_scratch_FILEAREA,
                                                        $submission->id);
        return true;
    }

    /**
     * Formatting for log info
     *
     * @param stdClass $submission The new submission
     * @return string
     */
    public function format_for_log(stdClass $submission) {
        // Format the info for each submission plugin (will be logged).
        $scratchsubmission = $this->get_scratch_submission($submission->id);
        $scratchloginfo = '';
        $scratchloginfo .= get_string('numwordsforlog',
                                         'qbassignsubmission_scratch',
                                         count_words($scratchsubmission->scratch));

        return $scratchloginfo;
    }

    /**
     * The qbassignment has been deleted - cleanup
     *
     * @return bool
     */
    public function delete_instance() {
        global $DB;
        $DB->delete_records('qbassignsubmission_scratch',
                            array('qbassignment'=>$this->qbassignment->get_instance()->id));

        return true;
    }

    /**
     * No text is set for this plugin
     *
     * @param stdClass $submission
     * @return bool
     */
    public function is_empty(stdClass $submission) {
        $scratchsubmission = $this->get_scratch_submission($submission->id);
        $wordcount = 0;
        $hasinsertedresources = false;

        if (isset($scratchsubmission->scratch)) {
            $wordcount = count_words(trim($scratchsubmission->scratch));
            // Check if the Scratch submission contains video, audio or image elements
            // that can be ignored and stripped by count_words().
            $hasinsertedresources = preg_match('/<\s*((video|audio)[^>]*>(.*?)<\s*\/\s*(video|audio)>)|(img[^>]*>(.*?))/',
                    trim($scratchsubmission->scratch));
        }

        return $wordcount == 0 && !$hasinsertedresources;
    }

    /**
     * Determine if a submission is empty
     *
     * This is distinct from is_empty in that it is intended to be used to
     * determine if a submission made before saving is empty.
     *
     * @param stdClass $data The submission data
     * @return bool
     */
    public function submission_is_empty(stdClass $data) {
        if (!isset($data->scratch_editor)) {
            return true;
        }
        $wordcount = 0;
        $hasinsertedresources = false;

        if (isset($data->scratch_editor['text'])) {
            $wordcount = count_words(trim((string)$data->scratch_editor['text']));
            // Check if the Scratch submission contains video, audio or image elements
            // that can be ignored and stripped by count_words().
            $hasinsertedresources = preg_match('/<\s*((video|audio)[^>]*>(.*?)<\s*\/\s*(video|audio)>)|(img[^>]*>(.*?))/',
                    trim((string)$data->scratch_editor['text']));
        }

        return $wordcount == 0 && !$hasinsertedresources;
    }

    /**
     * Get file areas returns a list of areas this plugin stores files
     * @return array - An array of fileareas (keys) and descriptions (values)
     */
    public function get_file_areas() {
        return array(qbassignsubmission_scratch_FILEAREA=>$this->get_name());
    }

    /**
     * Copy the student's submission from a previous submission. Used when a student opts to base their resubmission
     * on the last submission.
     * @param stdClass $sourcesubmission
     * @param stdClass $destsubmission
     */
    public function copy_submission(stdClass $sourcesubmission, stdClass $destsubmission) {
        global $DB;

        // Copy the files across (attached via the text editor).
        $contextid = $this->qbassignment->get_context()->id;
        $fs = get_file_storage();
        $files = $fs->get_area_files($contextid, 'qbassignsubmission_scratch',
                                     qbassignsubmission_scratch_FILEAREA, $sourcesubmission->id, 'id', false);
        foreach ($files as $file) {
            $fieldupdates = array('itemid' => $destsubmission->id);
            $fs->create_file_from_storedfile($fieldupdates, $file);
        }

        // Copy the qbassignsubmission_scratch record.
        $scratchsubmission = $this->get_scratch_submission($sourcesubmission->id);
        if ($scratchsubmission) {
            unset($scratchsubmission->id);
            $scratchsubmission->submission = $destsubmission->id;
            $DB->insert_record('qbassignsubmission_scratch', $scratchsubmission);
        }
        return true;
    }

    /**
     * Return a description of external params suitable for uploading an scratch submission from a webservice.
     *
     * @return external_description|null
     */
    public function get_external_parameters() {
        $editorparams = array('text' => new external_value(PARAM_RAW, 'The text for this submission.'),
                              'format' => new external_value(PARAM_INT, 'The format for this submission'),
                              'itemid' => new external_value(PARAM_INT, 'The draft area id for files attached to the submission'));
        $editorstructure = new external_single_structure($editorparams, 'Editor structure', VALUE_OPTIONAL);
        return array('scratch_editor' => $editorstructure);
    }

    /**
     * Compare word count of scratch submission to word limit, and return result.
     *
     * @param string $submissiontext scratch submission text from editor
     * @return string Error message if limit is enabled and exceeded, otherwise null
     */
    public function check_word_count($submissiontext) {
        global $OUTPUT;

        $wordlimitenabled = $this->get_config('wordlimitenabled');
        $wordlimit = $this->get_config('wordlimit');

        if ($wordlimitenabled == 0) {
            return null;
        }

        // Count words and compare to limit.
        $wordcount = count_words($submissiontext);
        if ($wordcount <= $wordlimit) {
            return null;
        } else {
            $errormsg = get_string('wordlimitexceeded', 'qbassignsubmission_scratch',
                    array('limit' => $wordlimit, 'count' => $wordcount));
            return $OUTPUT->error_text($errormsg);
        }
    }

    /**
     * Return the plugin configs for external functions.
     *
     * @return array the list of settings
     * @since Moodle 3.2
     */
    public function get_config_for_external() {
        return (array) $this->get_config();
    }
}


