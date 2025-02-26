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
 * This file contains the definition for the library class for file feedback plugin
 *
 *
 * @package   qbassignfeedback_file
 * @copyright 2012 NetSpot {@link http://www.netspot.com.au}
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

use mod_qbassign\output\qbassign_header;

/**
 * library class for importing feedback files from a zip
 *
 * @package   qbassignfeedback_file
 * @copyright 2012 NetSpot {@link http://www.netspot.com.au}
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class qbassignfeedback_file_zip_importer {

    /**
     * Is this filename valid (contains a unique participant ID) for import?
     *
     * @param qbassign $qbassignment - The qbassignment instance
     * @param stored_file $fileinfo - The fileinfo
     * @param array $participants - A list of valid participants for this module indexed by unique_id
     * @param stdClass $user - Set to the user that matches by participant id
     * @param qbassign_plugin $plugin - Set to the plugin that exported the file
     * @param string $filename - Set to truncated filename (prefix stripped)
     * @return true If the participant Id can be extracted and this is a valid user
     */
    public function is_valid_filename_for_import($qbassignment, $fileinfo, $participants, & $user, & $plugin, & $filename) {
        if ($fileinfo->is_directory()) {
            return false;
        }

        // Ignore hidden files.
        if (strpos($fileinfo->get_filename(), '.') === 0) {
            return false;
        }
        // Ignore hidden files.
        if (strpos($fileinfo->get_filename(), '~') === 0) {
            return false;
        }

        // Break the full path-name into path parts.
        $pathparts = explode('/', $fileinfo->get_filepath() . $fileinfo->get_filename());

        while (!empty($pathparts)) {
            // Get the next path part and break it up by underscores.
            $pathpart = array_shift($pathparts);
            $info = explode('_', $pathpart, 5);

            // Expected format for the directory names in $pathpart is fullname_userid_plugintype_pluginname (as created by zip
            // export in Moodle >= 4.1) resp. fullname_userid_plugintype_pluginname_ (as created by earlier versions). We ensure
            // compatibility with both ways here.
            if (count($info) < 4) {
                continue;
            }

            // Check the participant id.
            $participantid = $info[1];

            if (!is_numeric($participantid)) {
                continue;
            }

            // Convert to int.
            $participantid += 0;

            if (empty($participants[$participantid])) {
                continue;
            }

            // Set user, which is by reference, so is used by the calling script.
            $user = $participants[$participantid];

            // Set the plugin. This by reference, and is used by the calling script.
            $plugin = $qbassignment->get_plugin_by_type($info[2], $info[3]);

            if (!$plugin) {
                continue;
            }

            // To get clean path names, we need to have at least an empty entry for $info[4].
            if (count($info) == 4) {
                $info[4] = '';
            }
            // Take any remaining text in this part and put it back in the path parts array.
            array_unshift($pathparts, $info[4]);

            // Combine the remaining parts and set it as the filename.
            // Note that filename is a 'by reference' variable, so we need to set it before returning.
            $filename = implode('/', $pathparts);

            return true;
        }

        return false;
    }

    /**
     * Does this file exist in any of the current files supported by this plugin for this user?
     *
     * @param qbassign $qbassignment - The qbassignment instance
     * @param stdClass $user The user matching this uploaded file
     * @param qbassign_plugin $plugin The matching plugin from the filename
     * @param string $filename The parsed filename from the zip
     * @param stored_file $fileinfo The info about the extracted file from the zip
     * @return bool - True if the file has been modified or is new
     */
    public function is_file_modified($qbassignment, $user, $plugin, $filename, $fileinfo) {
        $sg = null;

        if ($plugin->get_subtype() == 'qbassignsubmission') {
            $sg = $qbassignment->get_user_submission($user->id, false);
        } else if ($plugin->get_subtype() == 'qbassignfeedback') {
            $sg = $qbassignment->get_user_grade($user->id, false);
        } else {
            return false;
        }

        if (!$sg) {
            return true;
        }
        foreach ($plugin->get_files($sg, $user) as $pluginfilename => $file) {
            if ($pluginfilename == $filename) {
                // Extract the file and compare hashes.
                $contenthash = '';
                if (is_array($file)) {
                    $content = reset($file);
                    $contenthash = file_storage::hash_from_string($content);
                } else {
                    $contenthash = $file->get_contenthash();
                }
                if ($contenthash != $fileinfo->get_contenthash()) {
                    return true;
                } else {
                    return false;
                }
            }
        }
        return true;
    }

    /**
     * Delete all temp files used when importing a zip
     *
     * @param int $contextid - The context id of this qbassignment instance
     * @return bool true if all files were deleted
     */
    public function delete_import_files($contextid) {
        global $USER;

        $fs = get_file_storage();

        return $fs->delete_area_files($contextid,
                                      'qbassignfeedback_file',
                                      qbassignFEEDBACK_FILE_IMPORT_FILEAREA,
                                      $USER->id);
    }

    /**
     * Extract the uploaded zip to a temporary import area for this user
     *
     * @param stored_file $zipfile The uploaded file
     * @param int $contextid The context for this qbassignment
     * @return bool - True if the files were unpacked
     */
    public function extract_files_from_zip($zipfile, $contextid) {
        global $USER;

        $feedbackfilesupdated = 0;
        $feedbackfilesadded = 0;
        $userswithnewfeedback = array();

        // Unzipping a large zip file is memory intensive.
        raise_memory_limit(MEMORY_EXTRA);

        $packer = get_file_packer('application/zip');
        core_php_time_limit::raise(qbassignFEEDBACK_FILE_MAXFILEUNZIPTIME);

        return $packer->extract_to_storage($zipfile,
                                    $contextid,
                                    'qbassignfeedback_file',
                                    qbassignFEEDBACK_FILE_IMPORT_FILEAREA,
                                    $USER->id,
                                    'import');

    }

    /**
     * Get the list of files extracted from the uploaded zip
     *
     * @param int $contextid
     * @return array of stored_files
     */
    public function get_import_files($contextid) {
        global $USER;

        $fs = get_file_storage();
        $files = $fs->get_directory_files($contextid,
                                          'qbassignfeedback_file',
                                          qbassignFEEDBACK_FILE_IMPORT_FILEAREA,
                                          $USER->id,
                                          '/import/', true); // Get files recursive (all levels).

        $keys = array_keys($files);

        return $files;
    }

    /**
     * Process an uploaded zip file
     *
     * @param qbassign $qbassignment - The qbassignment instance
     * @param qbassign_feedback_file $fileplugin - The file feedback plugin
     * @return string - The html response
     */
    public function import_zip_files($qbassignment, $fileplugin) {
        global $CFG, $PAGE, $DB;

        core_php_time_limit::raise(qbassignFEEDBACK_FILE_MAXFILEUNZIPTIME);
        $packer = get_file_packer('application/zip');

        $feedbackfilesupdated = 0;
        $feedbackfilesadded = 0;
        $userswithnewfeedback = array();
        $contextid = $qbassignment->get_context()->id;

        $fs = get_file_storage();
        $files = $this->get_import_files($contextid);

        $currentgroup = groups_get_activity_group($qbassignment->get_course_module(), true);
        $allusers = $qbassignment->list_participants($currentgroup, false);
        $participants = array();
        foreach ($allusers as $user) {
            $participants[$qbassignment->get_uniqueid_for_user($user->id)] = $user;
        }

        foreach ($files as $unzippedfile) {
            // Set the timeout for unzipping each file.
            $user = null;
            $plugin = null;
            $filename = '';

            if ($this->is_valid_filename_for_import($qbassignment, $unzippedfile, $participants, $user, $plugin, $filename)) {
                if ($this->is_file_modified($qbassignment, $user, $plugin, $filename, $unzippedfile)) {
                    $grade = $qbassignment->get_user_grade($user->id, true);

                    // In 3.1 the default download structure of the submission files changed so that each student had their own
                    // separate folder, the files were not renamed and the folder structure was kept. It is possible that
                    // a user downloaded the submission files in 3.0 (or earlier) and edited the zip to add feedback or
                    // changed the behavior back to the previous format, the following code means that we will still support the
                    // old file structure. For more information please see - MDL-52489 / MDL-56022.
                    $path = pathinfo($filename);
                    if ($path['dirname'] == '.') { // Student submissions are not in separate folders.
                        $basename = $filename;
                        $dirname = "/";
                        $dirnamewslash = "/";
                    } else {
                        $basename = $path['basename'];
                        $dirname = $path['dirname'];
                        $dirnamewslash = $dirname . "/";
                    }

                    if ($oldfile = $fs->get_file($contextid,
                                                 'qbassignfeedback_file',
                                                 qbassignFEEDBACK_FILE_FILEAREA,
                                                 $grade->id,
                                                 $dirname,
                                                 $basename)) {
                        // Update existing feedback file.
                        $oldfile->replace_file_with($unzippedfile);
                        $feedbackfilesupdated++;
                    } else {
                        // Create a new feedback file.
                        $newfilerecord = new stdClass();
                        $newfilerecord->contextid = $contextid;
                        $newfilerecord->component = 'qbassignfeedback_file';
                        $newfilerecord->filearea = qbassignFEEDBACK_FILE_FILEAREA;
                        $newfilerecord->filename = $basename;
                        $newfilerecord->filepath = $dirnamewslash;
                        $newfilerecord->itemid = $grade->id;
                        $fs->create_file_from_storedfile($newfilerecord, $unzippedfile);
                        $feedbackfilesadded++;
                    }
                    $userswithnewfeedback[$user->id] = 1;

                    // Update the number of feedback files for this user.
                    $fileplugin->update_file_count($grade);

                    // Update the last modified time on the grade which will trigger student notifications.
                    $qbassignment->notify_grade_modified($grade);
                }
            }
        }

        require_once($CFG->dirroot . '/mod/qbassign/feedback/file/renderable.php');
        $importsummary = new qbassignfeedback_file_import_summary($qbassignment->get_course_module()->id,
                                                            count($userswithnewfeedback),
                                                            $feedbackfilesadded,
                                                            $feedbackfilesupdated);

        $qbassignrenderer = $qbassignment->get_renderer();
        $renderer = $PAGE->get_renderer('qbassignfeedback_file');

        $o = '';

        $o .= $qbassignrenderer->render(new qbassign_header($qbassignment->get_instance(),
                                                        $qbassignment->get_context(),
                                                        false,
                                                        $qbassignment->get_course_module()->id,
                                                        get_string('uploadzipsummary', 'qbassignfeedback_file')));

        $o .= $renderer->render($importsummary);

        $o .= $qbassignrenderer->render_footer();
        return $o;
    }

}
