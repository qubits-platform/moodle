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
 * This file contains the forms to create and edit an instance of this module
 *
 * @package   mod_qbassign
 * @copyright 2012 NetSpot {@link http://www.netspot.com.au}
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die('Direct access to this script is forbidden.');

require_once($CFG->libdir.'/formslib.php');
require_once($CFG->dirroot . '/mod/qbassign/locallib.php');

/**
 * qbassignment grading options form
 *
 * @package   mod_qbassign
 * @copyright 2012 NetSpot {@link http://www.netspot.com.au}
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class mod_qbassign_grading_batch_operations_form extends moodleform {
    /**
     * Define this form - called by the parent constructor.
     */
    public function definition() {
        $mform = $this->_form;
        $instance = $this->_customdata;

        // Visible elements.
        $options = array();
        $options['lock'] = get_string('locksubmissions', 'qbassign');
        $options['unlock'] = get_string('unlocksubmissions', 'qbassign');
        $options['downloadselected'] = get_string('downloadselectedsubmissions', 'qbassign');
        if ($instance['submissiondrafts']) {
            $options['reverttodraft'] = get_string('reverttodraft', 'qbassign');
        }
        if (has_capability('mod/qbassign:editothersubmission', $instance['context'])) {
            $options['removesubmission'] = get_string('removesubmission', 'qbassign');
        }
        if ($instance['duedate'] && has_capability('mod/qbassign:grantextension', $instance['context'])) {
            $options['grantextension'] = get_string('grantextension', 'qbassign');
        }
        if ($instance['attemptreopenmethod'] == qbassign_ATTEMPT_REOPEN_METHOD_MANUAL) {
            $options['addattempt'] = get_string('addattempt', 'qbassign');
        }

        foreach ($instance['feedbackplugins'] as $plugin) {
            if ($plugin->is_visible() && $plugin->is_enabled()) {
                foreach ($plugin->get_grading_batch_operations() as $action => $description) {
                    $operationkey = 'plugingradingbatchoperation_' . $plugin->get_type() . '_' . $action;
                    $options[$operationkey] = $description;
                }
            }
        }
        if ($instance['markingworkflow']) {
            $options['setmarkingworkflowstate'] = get_string('setmarkingworkflowstate', 'qbassign');
        }
        if ($instance['markingallocation']) {
            $options['setmarkingallocation'] = get_string('setmarkingallocation', 'qbassign');
        }

        $mform->addElement('hidden', 'action', 'gradingbatchoperation');
        $mform->setType('action', PARAM_ALPHA);
        $mform->addElement('hidden', 'id', $instance['cm']);
        $mform->setType('id', PARAM_INT);
        $mform->addElement('hidden', 'selectedusers', '', array('class'=>'selectedusers'));
        $mform->setType('selectedusers', PARAM_SEQUENCE);
        $mform->addElement('hidden', 'returnaction', 'grading');
        $mform->setType('returnaction', PARAM_ALPHA);

        $objs = array();
        $objs[] =& $mform->createElement('select', 'operation', get_string('chooseoperation', 'qbassign'), $options);
        $objs[] =& $mform->createElement('submit', 'submit', get_string('go'));
        $batchdescription = get_string('batchoperationsdescription', 'qbassign');
        $mform->addElement('group', 'actionsgrp', $batchdescription, $objs, ' ', false);
    }
}

