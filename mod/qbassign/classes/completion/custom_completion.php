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

declare(strict_types=1);

namespace mod_qbassign\completion;

use core_completion\activity_custom_completion;

/**
 * Activity custom completion subclass for the qbassign activity.
 *
 * Class for defining mod_qbassign's custom completion rules and fetching the completion statuses
 * of the custom completion rules for a given qbassign instance and a user.
 *
 * @package mod_qbassign
 * @copyright Simey Lameze <simey@moodle.com>
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class custom_completion extends activity_custom_completion {

    /**
     * Fetches the completion state for a given completion rule.
     *
     * @param string $rule The completion rule.
     * @return int The completion state.
     */
    public function get_state(string $rule): int {
        global $CFG;

        $this->validate_rule($rule);

        $userid = $this->userid;
        $cm = $this->cm;

        require_once($CFG->dirroot . '/mod/qbassign/locallib.php');

        $qbassign = new \qbassign(null, $cm, $cm->get_course());
        if ($qbassign->get_instance()->teamsubmission) {
            $submission = $qbassign->get_group_submission($userid, 0, false);
        } else {
            $submission = $qbassign->get_user_submission($userid, false);
        }
        $status = $submission && $submission->status == qbassign_SUBMISSION_STATUS_SUBMITTED;

        return $status ? COMPLETION_COMPLETE : COMPLETION_INCOMPLETE;
    }

    /**
     * Fetch the list of custom completion rules that this module defines.
     *
     * @return array
     */
    public static function get_defined_custom_rules(): array {
        return ['completionsubmit'];
    }

    /**
     * Returns an associative array of the descriptions of custom completion rules.
     *
     * @return array
     */
    public function get_custom_rule_descriptions(): array {
        return [
            'completionsubmit' => get_string('completiondetail:submit', 'qbassign')
        ];
    }

    /**
     * Returns an array of all completion rules, in the order they should be displayed to users.
     *
     * @return array
     */
    public function get_sort_order(): array {
        return [
            'completionview',
            'completionsubmit',
            'completionusegrade',
            'completionpassgrade',
        ];
    }
}
