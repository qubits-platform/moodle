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
 * This file contains the definition for the library class for onlinetex submission plugin
 *
 * This class provides all the functionality for the new qbassign module.
 *
 * @package qbassignsubmission_onlinetex
 * @copyright 2012 NetSpot {@link http://www.netspot.com.au}
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();
// File area for online text submission qbassignment.
define('qbassignsubmission_onlinetex_FILEAREA', 'submissions_onlinetex');

/**
 * library class for onlinetex submission plugin extending submission plugin base class
 *
 * @package qbassignsubmission_onlinetex
 * @copyright 2012 NetSpot {@link http://www.netspot.com.au}
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class qbassign_submission_onlinetex extends qbassign_submission_plugin {

    /**
     * Get the name of the online text submission plugin
     * @return string
     */
    public function get_name() {
        return get_string('onlinetex', 'qbassignsubmission_onlinetex');
    }


    /**
     * Get onlinetex submission information from the database
     *
     * @param  int $submissionid
     * @return mixed
     */
    private function get_onlinetex_submission($submissionid) {
        global $DB;

        return $DB->get_record('qbassignsubmission_onlinetex', array('submission'=>$submissionid));
    }

    /**
     * Remove a submission.
     *
     * @param stdClass $submission The submission
     * @return boolean
     */
    public function remove(stdClass $submission) {
        global $DB;

        $submissionid = $submission ? $submission->id : 0;
        if ($submissionid) {
            $DB->delete_records('qbassignsubmission_onlinetex', array('submission' => $submissionid));
        }
        return true;
    }

    /**
     * Get the settings for onlinetex submission plugin
     *
     * @param MoodleQuickForm $mform The form to add elements to
     * @return void
     */
    public function get_settings(MoodleQuickForm $mform) {
        global $CFG, $COURSE;

        $defaultwordlimit = $this->get_config('wordlimit') == 0 ? '' : $this->get_config('wordlimit');
        $defaultwordlimitenabled = $this->get_config('wordlimitenabled');

        $options = array('size' => '6', 'maxlength' => '6');
        $name = get_string('wordlimit', 'qbassignsubmission_onlinetex');

        // Create a text box that can be enabled/disabled for onlinetex word limit.
        $wordlimitgrp = array();
        $wordlimitgrp[] = $mform->createElement('text', 'qbassignsubmission_onlinetex_wordlimit', '', $options);
        $wordlimitgrp[] = $mform->createElement('checkbox', 'qbassignsubmission_onlinetex_wordlimit_enabled',
                '', get_string('enable'));
        $mform->addGroup($wordlimitgrp, 'qbassignsubmission_onlinetex_wordlimit_group', $name, ' ', false);
        $mform->addHelpButton('qbassignsubmission_onlinetex_wordlimit_group',
                              'wordlimit',
                              'qbassignsubmission_onlinetex');
        $mform->disabledIf('qbassignsubmission_onlinetex_wordlimit',
                           'qbassignsubmission_onlinetex_wordlimit_enabled',
                           'notchecked');
        $mform->hideIf('qbassignsubmission_onlinetex_wordlimit',
                       'qbassignsubmission_onlinetex_enabled',
                       'notchecked');

        // Add numeric rule to text field.
        $wordlimitgrprules = array();
        $wordlimitgrprules['qbassignsubmission_onlinetex_wordlimit'][] = array(null, 'numeric', null, 'client');
        $mform->addGroupRule('qbassignsubmission_onlinetex_wordlimit_group', $wordlimitgrprules);

        // Rest of group setup.
        $mform->setDefault('qbassignsubmission_onlinetex_wordlimit', $defaultwordlimit);
        $mform->setDefault('qbassignsubmission_onlinetex_wordlimit_enabled', $defaultwordlimitenabled);
        $mform->setType('qbassignsubmission_onlinetex_wordlimit', PARAM_INT);
        $mform->hideIf('qbassignsubmission_onlinetex_wordlimit_group',
                       'qbassignsubmission_onlinetex_enabled',
                       'notchecked');
    }

    /**
     * Save the settings for onlinetex submission plugin
     *
     * @param stdClass $data
     * @return bool
     */
    public function save_settings(stdClass $data) {
        if (empty($data->qbassignsubmission_onlinetex_wordlimit) || empty($data->qbassignsubmission_onlinetex_wordlimit_enabled)) {
            $wordlimit = 0;
            $wordlimitenabled = 0;
        } else {
            $wordlimit = $data->qbassignsubmission_onlinetex_wordlimit;
            $wordlimitenabled = 1;
        }

        $this->set_config('wordlimit', $wordlimit);
        $this->set_config('wordlimitenabled', $wordlimitenabled);

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

        if (!isset($data->onlinetex)) {
            $data->onlinetex = '';
        }
        if (!isset($data->onlinetexformat)) {
            $data->onlinetexformat = editors_get_preferred_format();
        }

        if ($submission) {
            $onlinetexsubmission = $this->get_onlinetex_submission($submission->id);
            if ($onlinetexsubmission) {
                $data->onlinetex = $onlinetexsubmission->onlinetex;
                $data->onlinetexformat = $onlinetexsubmission->onlineformat;
            }

        }

        $data = file_prepare_standard_editor($data,
                                             'onlinetex',
                                             $editoroptions,
                                             $this->qbassignment->get_context(),
                                             'qbassignsubmission_onlinetex',
                                             qbassignsubmission_onlinetex_FILEAREA,
                                             $submissionid);
        $mform->addElement('editor', 'onlinetex_editor', $this->get_name(), null, $editoroptions);

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
                                                'onlinetex',
                                                $editoroptions,
                                                $this->qbassignment->get_context(),
                                                'qbassignsubmission_onlinetex',
                                                qbassignsubmission_onlinetex_FILEAREA,
                                                $submission->id);

        $onlinetexsubmission = $this->get_onlinetex_submission($submission->id);

        $fs = get_file_storage();

        $files = $fs->get_area_files($this->qbassignment->get_context()->id,
                                     'qbassignsubmission_onlinetex',
                                     qbassignsubmission_onlinetex_FILEAREA,
                                     $submission->id,
                                     'id',
                                     false);

        // Check word count before submitting anything.
        $exceeded = $this->check_word_count(trim($data->onlinetex));
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
                'content' => trim($data->onlinetex),
                'format' => $data->onlinetex_editor['format']
            )
        );
        if (!empty($submission->userid) && ($submission->userid != $USER->id)) {
            $params['relateduserid'] = $submission->userid;
        }
        if ($this->qbassignment->is_blind_marking()) {
            $params['anonymous'] = 1;
        }
        $event = \qbassignsubmission_onlinetex\event\assessable_uploaded::create($params);
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

        $count = count_words($data->onlinetex);

        // Unset the objectid and other field from params for use in submission events.
        unset($params['objectid']);
        unset($params['other']);
        $params['other'] = array(
            'submissionid' => $submission->id,
            'submissionattempt' => $submission->attemptnumber,
            'submissionstatus' => $submission->status,
            'onlinetexwordcount' => $count,
            'groupid' => $groupid,
            'groupname' => $groupname
        );

        if ($onlinetexsubmission) {

            $onlinetexsubmission->onlinetex = $data->onlinetex;
            $onlinetexsubmission->onlineformat = $data->onlinetex_editor['format'];
            $params['objectid'] = $onlinetexsubmission->id;
            $updatestatus = $DB->update_record('qbassignsubmission_onlinetex', $onlinetexsubmission);
            $event = \qbassignsubmission_onlinetex\event\submission_updated::create($params);
            $event->set_qbassign($this->qbassignment);
            $event->trigger();
            return $updatestatus;
        } else {

            $onlinetexsubmission = new stdClass();
            $onlinetexsubmission->onlinetex = $data->onlinetex;
            $onlinetexsubmission->onlineformat = $data->onlinetex_editor['format'];

            $onlinetexsubmission->submission = $submission->id;
            $onlinetexsubmission->qbassignment = $this->qbassignment->get_instance()->id;
            $onlinetexsubmission->id = $DB->insert_record('qbassignsubmission_onlinetex', $onlinetexsubmission);
            $params['objectid'] = $onlinetexsubmission->id;
            $event = \qbassignsubmission_onlinetex\event\submission_created::create($params);
            $event->set_qbassign($this->qbassignment);
            $event->trigger();
            return $onlinetexsubmission->id > 0;
        }
    }

    /**
     * Return a list of the text fields that can be imported/exported by this plugin
     *
     * @return array An array of field names and descriptions. (name=>description, ...)
     */
    public function get_editor_fields() {
        return array('onlinetex' => get_string('pluginname', 'qbassignsubmission_onlinetex'));
    }

    /**
     * Get the saved text content from the editor
     *
     * @param string $name
     * @param int $submissionid
     * @return string
     */
    public function get_editor_text($name, $submissionid) {
        if ($name == 'onlinetex') {
            $onlinetexsubmission = $this->get_onlinetex_submission($submissionid);
            if ($onlinetexsubmission) {
                return $onlinetexsubmission->onlinetex;
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
        if ($name == 'onlinetex') {
            $onlinetexsubmission = $this->get_onlinetex_submission($submissionid);
            if ($onlinetexsubmission) {
                return $onlinetexsubmission->onlineformat;
            }
        }

        return 0;
    }


     /**
      * Display onlinetex word count in the submission status table
      *
      * @param stdClass $submission
      * @param bool $showviewlink - If the summary has been truncated set this to true
      * @return string
      */
    public function view_summary(stdClass $submission, & $showviewlink) {
        global $CFG,$DB;

        $onlinetexsubmission = $this->get_onlinetex_submission($submission->id);

        // Additional Explanations
        $get_submited = $DB->get_record('qbassignsubmission_onlinetex', array('submission' => $submission->id));
        $expln = ($get_submited->explanation!='')?$get_submited->explanation:'-';

        // Always show the view link.
        $showviewlink = true;

        if ($onlinetexsubmission) {
            // This contains the shortened version of the text plus an optional 'Export to portfolio' button.
            $text = $this->qbassignment->render_editor_content(qbassignsubmission_onlinetex_FILEAREA,
                                                             $onlinetexsubmission->submission,
                                                             $this->get_type(),
                                                             'onlinetex',
                                                             'qbassignsubmission_onlinetex', true);

            // The actual submission text.
            $onlinetex = trim($onlinetexsubmission->onlinetex);
            // The shortened version of the submission text.
            $shorttext = shorten_text($onlinetex, 20);

            $plagiarismlinks = '';

            if (!empty($CFG->enableplagiarism)) {
                require_once($CFG->libdir . '/plagiarismlib.php');

                $plagiarismlinks .= plagiarism_get_links(array('userid' => $submission->userid,
                    'content' => $onlinetex,
                    'cmid' => $this->qbassignment->get_course_module()->id,
                    'course' => $this->qbassignment->get_course()->id,
                    'qbassignment' => $submission->qbassignment));
            }
            // We compare the actual text submission and the shortened version. If they are not equal, we show the word count.
            if ($onlinetex != $shorttext) {
                $wordcount = get_string('numwords', 'qbassignsubmission_onlinetex', count_words($onlinetex));

                return array($plagiarismlinks . $wordcount . $shorttext,1);
            } else {
                return array($plagiarismlinks . $shorttext . "<div>Additional Comments :<br/>".$expln."</div>",1);
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
        $onlinetexsubmission = $this->get_onlinetex_submission($submission->id);

        // Note that this check is the same logic as the result from the is_empty function but we do
        // not call it directly because we already have the submission record.
        if ($onlinetexsubmission) {
            // Do not pass the text through format_text. The result may not be displayed in Moodle and
            // may be passed to external services such as document conversion or portfolios.
            $formattedtext = $this->qbassignment->download_rewrite_pluginfile_urls($onlinetexsubmission->onlinetex, $user, $this);
            $head = '<head><meta charset="UTF-8"></head>';
            $submissioncontent = '<!DOCTYPE html><html>' . $head . '<body>'. $formattedtext . '</body></html>';

            $filename = get_string('onlinetexfilename', 'qbassignsubmission_onlinetex');
            $files[$filename] = array($submissioncontent);

            $fs = get_file_storage();

            $fsfiles = $fs->get_area_files($this->qbassignment->get_context()->id,
                                           'qbassignsubmission_onlinetex',
                                           qbassignsubmission_onlinetex_FILEAREA,
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

        $onlinetexsubmission = $this->get_onlinetex_submission($submission->id);

        if ($onlinetexsubmission) {

            // Render for portfolio API.
            $result .= $this->qbassignment->render_editor_content(qbassignsubmission_onlinetex_FILEAREA,
                                                                $onlinetexsubmission->submission,
                                                                $this->get_type(),
                                                                'onlinetex',
                                                                'qbassignsubmission_onlinetex');

            if (!empty($CFG->enableplagiarism)) {
                require_once($CFG->libdir . '/plagiarismlib.php');

                $plagiarismlinks .= plagiarism_get_links(array('userid' => $submission->userid,
                    'content' => trim($onlinetexsubmission->onlinetex),
                    'cmid' => $this->qbassignment->get_course_module()->id,
                    'course' => $this->qbassignment->get_course()->id,
                    'qbassignment' => $submission->qbassignment));
            }
        }

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

        $onlinetexsubmission = new stdClass();
        $onlinetexsubmission->onlinetex = $oldsubmission->data1;
        $onlinetexsubmission->onlineformat = $oldsubmission->data2;

        $onlinetexsubmission->submission = $submission->id;
        $onlinetexsubmission->qbassignment = $this->qbassignment->get_instance()->id;

        if ($onlinetexsubmission->onlinetex === null) {
            $onlinetexsubmission->onlinetex = '';
        }

        if ($onlinetexsubmission->onlineformat === null) {
            $onlinetexsubmission->onlineformat = editors_get_preferred_format();
        }

        if (!$DB->insert_record('qbassignsubmission_onlinetex', $onlinetexsubmission) > 0) {
            $log .= get_string('couldnotconvertsubmission', 'mod_qbassign', $submission->userid);
            return false;
        }

        // Now copy the area files.
        $this->qbassignment->copy_area_files_for_upgrade($oldcontext->id,
                                                        'mod_qbassignment',
                                                        'submission',
                                                        $oldsubmission->id,
                                                        $this->qbassignment->get_context()->id,
                                                        'qbassignsubmission_onlinetex',
                                                        qbassignsubmission_onlinetex_FILEAREA,
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
        $onlinetexsubmission = $this->get_onlinetex_submission($submission->id);
        $onlinetexloginfo = '';
        $onlinetexloginfo .= get_string('numwordsforlog',
                                         'qbassignsubmission_onlinetex',
                                         count_words($onlinetexsubmission->onlinetex));

        return $onlinetexloginfo;
    }

    /**
     * The qbassignment has been deleted - cleanup
     *
     * @return bool
     */
    public function delete_instance() {
        global $DB;
        $DB->delete_records('qbassignsubmission_onlinetex',
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
        $onlinetexsubmission = $this->get_onlinetex_submission($submission->id);
        $wordcount = 0;
        $hasinsertedresources = false;

        if (isset($onlinetexsubmission->onlinetex)) {
            $wordcount = count_words(trim($onlinetexsubmission->onlinetex));
            // Check if the online text submission contains video, audio or image elements
            // that can be ignored and stripped by count_words().
            $hasinsertedresources = preg_match('/<\s*((video|audio)[^>]*>(.*?)<\s*\/\s*(video|audio)>)|(img[^>]*>(.*?))/',
                    trim($onlinetexsubmission->onlinetex));
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
        if (!isset($data->onlinetex_editor)) {
            return true;
        }
        $wordcount = 0;
        $hasinsertedresources = false;

        if (isset($data->onlinetex_editor['text'])) {
            $wordcount = count_words(trim((string)$data->onlinetex_editor['text']));
            // Check if the online text submission contains video, audio or image elements
            // that can be ignored and stripped by count_words().
            $hasinsertedresources = preg_match('/<\s*((video|audio)[^>]*>(.*?)<\s*\/\s*(video|audio)>)|(img[^>]*>(.*?))/',
                    trim((string)$data->onlinetex_editor['text']));
        }

        return $wordcount == 0 && !$hasinsertedresources;
    }

    /**
     * Get file areas returns a list of areas this plugin stores files
     * @return array - An array of fileareas (keys) and descriptions (values)
     */
    public function get_file_areas() {
        return array(qbassignsubmission_onlinetex_FILEAREA=>$this->get_name());
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
        $files = $fs->get_area_files($contextid, 'qbassignsubmission_onlinetex',
                                     qbassignsubmission_onlinetex_FILEAREA, $sourcesubmission->id, 'id', false);
        foreach ($files as $file) {
            $fieldupdates = array('itemid' => $destsubmission->id);
            $fs->create_file_from_storedfile($fieldupdates, $file);
        }

        // Copy the qbassignsubmission_onlinetex record.
        $onlinetexsubmission = $this->get_onlinetex_submission($sourcesubmission->id);
        if ($onlinetexsubmission) {
            unset($onlinetexsubmission->id);
            $onlinetexsubmission->submission = $destsubmission->id;
            $DB->insert_record('qbassignsubmission_onlinetex', $onlinetexsubmission);
        }
        return true;
    }

    /**
     * Return a description of external params suitable for uploading an onlinetex submission from a webservice.
     *
     * @return external_description|null
     */
    public function get_external_parameters() {
        $editorparams = array('text' => new external_value(PARAM_RAW, 'The text for this submission.'),
                              'format' => new external_value(PARAM_INT, 'The format for this submission'),
                              'itemid' => new external_value(PARAM_INT, 'The draft area id for files attached to the submission'));
        $editorstructure = new external_single_structure($editorparams, 'Editor structure', VALUE_OPTIONAL);
        return array('onlinetex_editor' => $editorstructure);
    }

    /**
     * Compare word count of onlinetex submission to word limit, and return result.
     *
     * @param string $submissiontext onlinetex submission text from editor
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
            $errormsg = get_string('wordlimitexceeded', 'qbassignsubmission_onlinetex',
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


