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
 * An event observer.
 *
 * @package    qbassignfeedback_editpd
 * @copyright  2016 Damyon Wiese
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
namespace qbassignfeedback_editpd\event;

/**
 * An event observer.
 * @copyright  2016 Damyon Wiese
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class observer {

    /**
     * Listen to events and queue the submission for processing.
     * @param \mod_qbassign\event\submission_created $event
     */
    public static function submission_created(\mod_qbassign\event\submission_created $event) {
        self::queue_conversion($event);
    }

    /**
     * Listen to events and queue the submission for processing.
     * @param \mod_qbassign\event\submission_updated $event
     */
    public static function submission_updated(\mod_qbassign\event\submission_updated $event) {
        self::queue_conversion($event);
    }

    /**
     * Queue the submission for processing.
     * @param \mod_qbassign\event\base $event The submission created/updated event.
     */
    protected static function queue_conversion($event) {
        $data = [
            'submissionid' => $event->other['submissionid'],
            'submissionattempt' => $event->other['submissionattempt'],
        ];
        $task = new \qbassignfeedback_editpd\task\convert_submission;
        $task->set_custom_data($data);
        \core\task\manager::queue_adhoc_task($task, true);
    }
}
