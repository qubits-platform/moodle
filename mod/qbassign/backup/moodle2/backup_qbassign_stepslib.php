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
 * Define all the backup steps that will be used by the backup_qbassign_activity_task
 *
 * @package   mod_qbassign
 * @copyright 2012 NetSpot {@link http://www.netspot.com.au}
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

require_once($CFG->dirroot . '/mod/qbassign/locallib.php');

/**
 * Define the complete choice structure for backup, with file and id annotations
 *
 * @package   mod_qbassign
 * @copyright 2012 NetSpot {@link http://www.netspot.com.au}
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class backup_qbassign_activity_structure_step extends backup_activity_structure_step {

    /**
     * Annotate files from plugin configuration
     * @param backup_nested_element $qbassign the backup structure of the activity
     * @param string $subtype the plugin type to handle
     * @return void
     */
    protected function annotate_plugin_config_files(backup_nested_element $qbassign, $subtype) {
        $dummyqbassign = new qbassign(null, null, null);
        $plugins = $dummyqbassign->load_plugins($subtype);
        foreach ($plugins as $plugin) {
            $component = $plugin->get_subtype() . '_' . $plugin->get_type();
            $areas = $plugin->get_config_file_areas();
            foreach ($areas as $area) {
                $qbassign->annotate_files($component, $area, null);
            }
        }
    }

    /**
     * Define the structure for the qbassign activity
     * @return void
     */
    protected function define_structure() {

        // To know if we are including userinfo.
        $userinfo = $this->get_setting_value('userinfo');
        $groupinfo = $this->get_setting_value('groups');

        // Define each element separated.
        $qbassign = new backup_nested_element('qbassign', array('id'),
                                            array('name',
                                                  'intro',
                                                  'introformat',
                                                  'alwaysshowdescription',
                                                  'submissiondrafts',
                                                  'sendnotifications',
                                                  'sendlatenotifications',
                                                  'sendstudentnotifications',
                                                  'duedate',
                                                  'cutoffdate',
                                                  'gradingduedate',
                                                  'allowsubmissionsfromdate',
                                                  'grade',
                                                  'timemodified',
                                                  'completionsubmit',
                                                  'requiresubmissionstatement',
                                                  'teamsubmission',
                                                  'requireallteammemberssubmit',
                                                  'teamsubmissiongroupingid',
                                                  'blindmarking',
                                                  'hidegrader',
                                                  'revealidentities',
                                                  'attemptreopenmethod',
                                                  'maxattempts',
                                                  'markingworkflow',
                                                  'markingallocation',
                                                  'preventsubmissionnotingroup',
                                                  'activity',
                                                  'activityformat',
                                                  'timelimit',
                                                  'submissionattachments'));

        $userflags = new backup_nested_element('userflags');

        $userflag = new backup_nested_element('userflag', array('id'),
                                                array('userid',
                                                      'qbassignment',
                                                      'mailed',
                                                      'locked',
                                                      'extensionduedate',
                                                      'workflowstate',
                                                      'allocatedmarker'));

        $submissions = new backup_nested_element('submissions');

        $submission = new backup_nested_element('submission', array('id'),
                                                array('userid',
                                                      'timecreated',
                                                      'timemodified',
                                                      'timestarted',
                                                      'status',
                                                      'groupid',
                                                      'attemptnumber',
                                                      'latest'));

        $grades = new backup_nested_element('grades');

        $grade = new backup_nested_element('grade', array('id'),
                                           array('userid',
                                                 'timecreated',
                                                 'timemodified',
                                                 'grader',
                                                 'grade',
                                                 'attemptnumber'));

        $pluginconfigs = new backup_nested_element('plugin_configs');

        $pluginconfig = new backup_nested_element('plugin_config', array('id'),
                                                   array('plugin',
                                                         'subtype',
                                                         'name',
                                                         'value'));

        $overrides = new backup_nested_element('overrides');
        $override = new backup_nested_element('override', array('id'), array(
            'groupid', 'userid', 'sortorder', 'allowsubmissionsfromdate', 'duedate', 'cutoffdate', 'timelimit'));

        // Build the tree.
        $qbassign->add_child($userflags);
        $userflags->add_child($userflag);
        $qbassign->add_child($submissions);
        $submissions->add_child($submission);
        $qbassign->add_child($grades);
        $grades->add_child($grade);
        $qbassign->add_child($pluginconfigs);
        $pluginconfigs->add_child($pluginconfig);
        $qbassign->add_child($overrides);
        $overrides->add_child($override);

        // Define sources.
        $qbassign->set_source_table('qbassign', array('id' => backup::VAR_ACTIVITYID));
        $pluginconfig->set_source_table('qbassign_plugin_config',
                                        array('qbassignment' => backup::VAR_PARENTID));

        // qbassign overrides to backup are different depending of user info.
        $overrideparams = array('qbassignid' => backup::VAR_PARENTID);

        if ($userinfo) {
            $userflag->set_source_table('qbassign_user_flags',
                                     array('qbassignment' => backup::VAR_PARENTID));

            $submissionparams = array('qbassignment' => backup::VAR_PARENTID);
            if (!$groupinfo) {
                // Without group info, skip group submissions.
                $submissionparams['groupid'] = backup_helper::is_sqlparam(0);
            }
            $submission->set_source_table('qbassign_submission', $submissionparams);

            $grade->set_source_table('qbassign_grades',
                                     array('qbassignment' => backup::VAR_PARENTID));

            // Support 2 types of subplugins.
            $this->add_subplugin_structure('qbassignsubmission', $submission, true);
            $this->add_subplugin_structure('qbassignfeedback', $grade, true);
        } else {
            $overrideparams['userid'] = backup_helper::is_sqlparam(null); // Without userinfo, skip user overrides.
        }

        if (!$groupinfo) {
            // Without group info, skip group overrides.
            $overrideparams['groupid'] = backup_helper::is_sqlparam(0);
        }
        $override->set_source_table('qbassign_overrides', $overrideparams);

        // Define id annotations.
        $userflag->annotate_ids('user', 'userid');
        $userflag->annotate_ids('user', 'allocatedmarker');
        $submission->annotate_ids('user', 'userid');
        $submission->annotate_ids('group', 'groupid');
        $grade->annotate_ids('user', 'userid');
        $grade->annotate_ids('user', 'grader');
        $qbassign->annotate_ids('grouping', 'teamsubmissiongroupingid');
        $override->annotate_ids('user', 'userid');
        $override->annotate_ids('group', 'groupid');

        // Define file annotations.
        // These file areas don't have an itemid.
        $qbassign->annotate_files('mod_qbassign', 'intro', null);
        $qbassign->annotate_files('mod_qbassign', 'introattachment', null);
        $this->annotate_plugin_config_files($qbassign, 'qbassignsubmission');
        $this->annotate_plugin_config_files($qbassign, 'qbassignfeedback');

        // Return the root element (choice), wrapped into standard activity structure.

        return $this->prepare_activity_structure($qbassign);
    }
}
