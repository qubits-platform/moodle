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

namespace mod_qbassign;

use mod_qbassign_testable_qbassign;

defined('MOODLE_INTERNAL') || die();

global $CFG;
require_once($CFG->dirroot . '/mod/qbassign/locallib.php');
require_once($CFG->dirroot . '/mod/qbassign/tests/fixtures/testable_qbassign.php');
require_once($CFG->dirroot . '/group/lib.php');

/**
 * Class mod_qbassign_portfolio_caller_testcase
 *
 * Tests behaviour of the qbassign_portfolio_caller class.
 *
 * @package mod_qbassign
 * @category test
 * @copyright Brendan Cox <brendan.cox@totaralearning.com>
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class portfolio_caller_test extends \advanced_testcase {

    /**
     * Test an qbassignment file is loaded for a user who submitted it.
     */
    public function test_user_submission_file_is_loaded() {
        $this->resetAfterTest(true);

        $user = $this->getDataGenerator()->create_user();
        $course = $this->getDataGenerator()->create_course();

        /* @var mod_qbassign_generator $qbassigngenerator */
        $qbassigngenerator = $this->getDataGenerator()->get_plugin_generator('mod_qbassign');

        $activityrecord = $qbassigngenerator->create_instance(array('course' => $course->id));
        $cm = get_coursemodule_from_instance('qbassign', $activityrecord->id);
        $context = \context_module::instance($cm->id);
        $qbassign = new mod_qbassign_testable_qbassign($context, $cm, $course);

        $submission = $qbassign->get_user_submission($user->id, true);

        $fs = get_file_storage();
        $dummy = (object) array(
            'contextid' => $context->id,
            'component' => 'qbassignsubmission_file',
            'filearea' => qbassignSUBMISSION_FILE_FILEAREA,
            'itemid' => $submission->id,
            'filepath' => '/',
            'filename' => 'myqbassignmnent.pdf'
        );
        $file = $fs->create_file_from_string($dummy, 'Content of ' . $dummy->filename);

        $caller = new \qbassign_portfolio_caller(array('cmid' => $cm->id, 'fileid' => $file->get_id()));
        $caller->set('user', $user);
        $caller->load_data();
        $this->assertEquals($file->get_contenthash(), $caller->get_sha1_file());

        // This processes the file either by fileid or by other fields in the file table.
        // We should get the same outcome with either approach.
        $caller = new \qbassign_portfolio_caller(
            array(
                'cmid' => $cm->id,
                'sid' => $submission->id,
                'area' => qbassignSUBMISSION_FILE_FILEAREA,
                'component' => 'qbassignsubmission_file',
            )
        );
        $caller->set('user', $user);
        $caller->load_data();
        $this->assertEquals($file->get_contenthash(), $caller->get_sha1_file());
    }

    /**
     * Test an qbassignment file is not loaded for a user that did not submit it.
     */
    public function test_different_user_submission_file_is_not_loaded() {
        $this->resetAfterTest(true);

        $user = $this->getDataGenerator()->create_user();
        $course = $this->getDataGenerator()->create_course();

        /* @var mod_qbassign_generator $qbassigngenerator */
        $qbassigngenerator = $this->getDataGenerator()->get_plugin_generator('mod_qbassign');

        $activityrecord = $qbassigngenerator->create_instance(array('course' => $course->id));
        $cm = get_coursemodule_from_instance('qbassign', $activityrecord->id);
        $context = \context_module::instance($cm->id);
        $qbassign = new mod_qbassign_testable_qbassign($context, $cm, $course);

        $submission = $qbassign->get_user_submission($user->id, true);

        $fs = get_file_storage();
        $dummy = (object) array(
            'contextid' => $context->id,
            'component' => 'qbassignsubmission_file',
            'filearea' => qbassignSUBMISSION_FILE_FILEAREA,
            'itemid' => $submission->id,
            'filepath' => '/',
            'filename' => 'myqbassignmnent.pdf'
        );
        $file = $fs->create_file_from_string($dummy, 'Content of ' . $dummy->filename);

        // Now add second user.
        $wronguser = $this->getDataGenerator()->create_user();

        $caller = new \qbassign_portfolio_caller(array('cmid' => $cm->id, 'fileid' => $file->get_id()));
        $caller->set('user', $wronguser);

        $this->expectException(\portfolio_caller_exception::class);
        $this->expectExceptionMessage('Sorry, the requested file could not be found');

        $caller->load_data();
    }

    /**
     * Test an qbassignment file is loaded for a user who is part of a group that submitted it.
     */
    public function test_group_submission_file_is_loaded() {
        $this->resetAfterTest(true);

        $user = $this->getDataGenerator()->create_user();
        $course = $this->getDataGenerator()->create_course();

        $groupdata = new \stdClass();
        $groupdata->courseid = $course->id;
        $groupdata->name = 'group1';
        $groupid = groups_create_group($groupdata);
        $this->getDataGenerator()->enrol_user($user->id, $course->id);
        groups_add_member($groupid, $user);

        /* @var mod_qbassign_generator $qbassigngenerator */
        $qbassigngenerator = $this->getDataGenerator()->get_plugin_generator('mod_qbassign');

        $activityrecord = $qbassigngenerator->create_instance(array('course' => $course->id));
        $cm = get_coursemodule_from_instance('qbassign', $activityrecord->id);
        $context = \context_module::instance($cm->id);
        $qbassign = new mod_qbassign_testable_qbassign($context, $cm, $course);

        $submission = $qbassign->get_group_submission($user->id, $groupid, true);

        $fs = get_file_storage();
        $dummy = (object) array(
            'contextid' => $context->id,
            'component' => 'qbassignsubmission_file',
            'filearea' => qbassignSUBMISSION_FILE_FILEAREA,
            'itemid' => $submission->id,
            'filepath' => '/',
            'filename' => 'myqbassignmnent.pdf'
        );
        $file = $fs->create_file_from_string($dummy, 'Content of ' . $dummy->filename);

        $caller = new \qbassign_portfolio_caller(array('cmid' => $cm->id, 'fileid' => $file->get_id()));
        $caller->set('user', $user);
        $caller->load_data();
        $this->assertEquals($file->get_contenthash(), $caller->get_sha1_file());

        // This processes the file either by fileid or by other fields in the file table.
        // We should get the same outcome with either approach.
        $caller = new \qbassign_portfolio_caller(
            array(
                'cmid' => $cm->id,
                'sid' => $submission->id,
                'area' => qbassignSUBMISSION_FILE_FILEAREA,
                'component' => 'qbassignsubmission_file',
            )
        );
        $caller->set('user', $user);
        $caller->load_data();
        $this->assertEquals($file->get_contenthash(), $caller->get_sha1_file());
    }

    /**
     * Test an qbassignment file is not loaded for a user who is not part of a group that submitted it.
     */
    public function test_different_group_submission_file_is_not_loaded() {
        $this->resetAfterTest(true);

        $user = $this->getDataGenerator()->create_user();
        $course = $this->getDataGenerator()->create_course();

        $groupdata = new \stdClass();
        $groupdata->courseid = $course->id;
        $groupdata->name = 'group1';
        $groupid = groups_create_group($groupdata);
        $this->getDataGenerator()->enrol_user($user->id, $course->id);
        groups_add_member($groupid, $user);

        /* @var mod_qbassign_generator $qbassigngenerator */
        $qbassigngenerator = $this->getDataGenerator()->get_plugin_generator('mod_qbassign');

        $activityrecord = $qbassigngenerator->create_instance(array('course' => $course->id));
        $cm = get_coursemodule_from_instance('qbassign', $activityrecord->id);
        $context = \context_module::instance($cm->id);
        $qbassign = new mod_qbassign_testable_qbassign($context, $cm, $course);

        $submission = $qbassign->get_group_submission($user->id, $groupid,true);

        $fs = get_file_storage();
        $dummy = (object) array(
            'contextid' => $context->id,
            'component' => 'qbassignsubmission_file',
            'filearea' => qbassignSUBMISSION_FILE_FILEAREA,
            'itemid' => $submission->id,
            'filepath' => '/',
            'filename' => 'myqbassignmnent.pdf'
        );
        $file = $fs->create_file_from_string($dummy, 'Content of ' . $dummy->filename);

        // Now add second user.
        $wronguser = $this->getDataGenerator()->create_user();

        // Create a new group for the wrong user.
        $groupdata = new \stdClass();
        $groupdata->courseid = $course->id;
        $groupdata->name = 'group2';
        $groupid = groups_create_group($groupdata);
        $this->getDataGenerator()->enrol_user($wronguser->id, $course->id);
        groups_add_member($groupid, $wronguser);

        // In the negative test for the user, we loaded the caller via fileid. Switching to the other approach this time.
        $caller = new \qbassign_portfolio_caller(
            array(
                'cmid' => $cm->id,
                'sid' => $submission->id,
                'area' => qbassignSUBMISSION_FILE_FILEAREA,
                'component' => 'qbassignsubmission_file',
            )
        );
        $caller->set('user', $wronguser);

        $this->expectException(\portfolio_caller_exception::class);
        $this->expectExceptionMessage('Sorry, the requested file could not be found');

        $caller->load_data();
    }
}
