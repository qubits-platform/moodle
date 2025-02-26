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
 * qbassignment extension dates form
 *
 * @package   mod_qbassign
 * @copyright 2012 NetSpot {@link http://www.netspot.com.au}
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class mod_qbassign_extension_form extends moodleform {
    /** @var array $instance - The data passed to this form */
    private $instance;

    /**
     * Define the form - called by parent constructor
     */
    public function definition() {
        global $DB;

        $mform = $this->_form;
        $params = $this->_customdata;

        // Instance variable is used by the form validation function.
        $instance = $params['instance'];
        $this->instance = $instance;

        // Get the qbassignment class.
        $qbassign = $params['qbassign'];
        $userlist = $params['userlist'];
        $usercount = 0;
        $usershtml = '';

        // TODO Does not support custom user profile fields (MDL-70456).
        $extrauserfields = \core_user\fields::get_identity_fields($qbassign->get_context(), false);
        foreach ($userlist as $userid) {
            if ($usercount >= 5) {
                $usershtml .= get_string('moreusers', 'qbassign', count($userlist) - 5);
                break;
            }
            $user = $DB->get_record('user', array('id' => $userid), '*', MUST_EXIST);

            $usershtml .= $qbassign->get_renderer()->render(new qbassign_user_summary($user,
                                                                    $qbassign->get_course()->id,
                                                                    has_capability('moodle/site:viewfullnames',
                                                                    $qbassign->get_course_context()),
                                                                    $qbassign->is_blind_marking(),
                                                                    $qbassign->get_uniqueid_for_user($user->id),
                                                                    $extrauserfields,
                                                                    !$qbassign->is_active_user($userid)));
                $usercount += 1;
        }

        $userscount = count($userlist);

        $listusersmessage = get_string('grantextensionforusers', 'qbassign', $userscount);
        $mform->addElement('header', 'general', $listusersmessage);
        $mform->addElement('static', 'userslist', get_string('selectedusers', 'qbassign'), $usershtml);

        if ($instance->allowsubmissionsfromdate) {
            $mform->addElement('static', 'allowsubmissionsfromdate', get_string('allowsubmissionsfromdate', 'qbassign'),
                               userdate($instance->allowsubmissionsfromdate));
        }

        $finaldate = 0;
        if ($instance->duedate) {
            $mform->addElement('static', 'duedate', get_string('duedate', 'qbassign'), userdate($instance->duedate));
            $finaldate = $instance->duedate;
        }
        if ($instance->cutoffdate) {
            $mform->addElement('static', 'cutoffdate', get_string('cutoffdate', 'qbassign'), userdate($instance->cutoffdate));
            $finaldate = $instance->cutoffdate;
        }
        $mform->addElement('date_time_selector', 'extensionduedate',
                           get_string('extensionduedate', 'qbassign'), array('optional'=>true));
        $mform->setDefault('extensionduedate', $finaldate);

        $mform->addElement('hidden', 'id');
        $mform->setType('id', PARAM_INT);
        $mform->addElement('hidden', 'userid');
        $mform->setType('userid', PARAM_INT);
        $mform->addElement('hidden', 'selectedusers');
        $mform->setType('selectedusers', PARAM_SEQUENCE);
        $mform->addElement('hidden', 'action', 'saveextension');
        $mform->setType('action', PARAM_ALPHA);

        $this->add_action_buttons(true, get_string('savechanges', 'qbassign'));
    }

    /**
     * Perform validation on the extension form
     * @param array $data
     * @param array $files
     */
    public function validation($data, $files) {
        $errors = parent::validation($data, $files);
        if ($this->instance->duedate && $data['extensionduedate']) {
            if ($this->instance->duedate > $data['extensionduedate']) {
                $errors['extensionduedate'] = get_string('extensionnotafterduedate', 'qbassign');
            }
        }
        if ($this->instance->allowsubmissionsfromdate && $data['extensionduedate']) {
            if ($this->instance->allowsubmissionsfromdate > $data['extensionduedate']) {
                $errors['extensionduedate'] = get_string('extensionnotafterfromdate', 'qbassign');
            }
        }

        return $errors;
    }
}
