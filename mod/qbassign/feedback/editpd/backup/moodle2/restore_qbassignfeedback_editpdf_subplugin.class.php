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
 * This file contains the restore code for the feedback_editpd plugin.
 *
 * @package   qbassignfeedback_editpd
 * @copyright 2013 Damyon Wiese
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
defined('MOODLE_INTERNAL') || die();

/**
 * Restore subplugin class.
 *
 * Provides the necessary information needed
 * to restore one qbassign_feedback subplugin.
 *
 * @package   qbassignfeedback_editpd
 * @copyright 2013 Damyon Wiese
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class restore_qbassignfeedback_editpd_subplugin extends restore_subplugin {

    /**
     * Returns the paths to be handled by the subplugin at qbassignment level
     * @return array
     */
    protected function define_grade_subplugin_structure() {

        $paths = array();

        // We used get_recommended_name() so this works.
        // The files node is a placeholder just containing gradeid so we can restore files once per grade.
        $elename = $this->get_namefor('files');
        $elepath = $this->get_pathfor('/feedback_editpd_files');
        $paths[] = new restore_path_element($elename, $elepath);

        // Now we have the list of comments and annotations per grade.
        $elename = $this->get_namefor('comment');
        $elepath = $this->get_pathfor('/feedback_editpd_comments/comment');
        $paths[] = new restore_path_element($elename, $elepath);
        $elename = $this->get_namefor('annotation');
        $elepath = $this->get_pathfor('/feedback_editpd_annotations/annotation');
        $paths[] = new restore_path_element($elename, $elepath);

        // Rotation details.
        $elename = $this->get_namefor('pagerotation');
        $elepath = $this->get_pathfor('/feedback_editpd_rotation/pagerotation');
        $paths[] = new restore_path_element($elename, $elepath);

        return $paths;
    }

    /**
     * Processes one feedback_editpd_files element
     * @param mixed $data
     */
    public function process_qbassignfeedback_editpd_files($data) {
        $data = (object)$data;

        // In this case the id is the old gradeid which will be mapped.
        $this->add_related_files('qbassignfeedback_editpd',
            \qbassignfeedback_editpd\document_services::FINAL_PDF_FILEAREA, 'grade', null, $data->gradeid);
        $this->add_related_files('qbassignfeedback_editpd',
            \qbassignfeedback_editpd\document_services::PAGE_IMAGE_READONLY_FILEAREA, 'grade', null, $data->gradeid);
        $this->add_related_files('qbassignfeedback_editpd', 'stamps', 'grade', null, $data->gradeid);
    }

    /**
     * Processes one feedback_editpd_annotations/annotation element
     * @param mixed $data
     */
    public function process_qbassignfeedback_editpd_annoation($data) {
        global $DB;

        $data = (object)$data;
        $oldgradeid = $data->gradeid;
        // The mapping is set in the restore for the core qbassign activity
        // when a grade node is processed.
        $data->gradeid = $this->get_mappingid('grade', $data->gradeid);

        $DB->insert_record('qbassignfeedback_editpd_anno', $data);

    }

    /**
     * Processes one feedback_editpd_comments/comment element
     * @param mixed $data
     */
    public function process_qbassignfeedback_editpd_comment($data) {
        global $DB;

        $data = (object)$data;
        $oldgradeid = $data->gradeid;
        // The mapping is set in the restore for the core qbassign activity
        // when a grade node is processed.
        $data->gradeid = $this->get_mappingid('grade', $data->gradeid);

        $DB->insert_record('qbassignfeedback_editpd_cmnt', $data);

    }

    /**
     * Processes one /feedback_editpd_rotation/pagerotation element
     * @param mixed $data
     */
    public function process_qbassignfeedback_editpd_pagerotation($data) {
        global $DB;
        $data = (object)$data;
        $oldgradeid = $data->gradeid;
        $data->gradeid = $this->get_mappingid('grade', $oldgradeid);
        $DB->insert_record('qbassignfeedback_editpd_rot', $data);
    }
}
