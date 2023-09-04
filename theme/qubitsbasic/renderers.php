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
 * Core and Course renderer inclsion page.
 * @package    theme_qubitsbasic
 * @copyright  2023 Qubits Dev Team.
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
defined('MOODLE_INTERNAL') || die();

//require_once('renderers/course_renderer.php');
require_once('renderers/core_renderer.php');


use mod_quiz\output\edit_renderer as editquiz;
use \mod_quiz\structure;
use \html_writer;

class theme_qubitsbasic_mod_quiz_edit_renderer extends editquiz{ 

    public function add_menu_actions(structure $structure, $page, \moodle_url $pageurl,
    \core_question\local\bank\question_edit_contexts $contexts, array $pagevars) {

        global $COURSE, $USER;

        $context = context_course::instance($COURSE->id, IGNORE_MISSING);
        $roles = get_user_roles($context, $USER->id, false);
        $role = key($roles);       

        if($roles[$role]->shortname == "editingteacher" || $roles[$role]->shortname == "teacher")
        return '';

        $actions = $this->edit_menu_actions($structure, $page, $pageurl, $pagevars);
        if (empty($actions)) {
            return '';
        }
        $menu = new \action_menu();
        $menu->set_constraint('.mod-quiz-edit-content');
        $trigger = html_writer::tag('span', get_string('add', 'quiz'), array('class' => 'add-menu'));
        $menu->set_menu_trigger($trigger);
        // The menu appears within an absolutely positioned element causing width problems.
        // Make sure no-wrap is set so that we don't get a squashed menu.
        $menu->set_nowrap_on_items(true);

        // Disable the link if quiz has attempts.
        if (!$structure->can_be_edited()) {
            return $this->render($menu);
        }

        foreach ($actions as $action) {
            if ($action instanceof \action_menu_link) {
                $action->add_class('add-menu');
            }
            $menu->add($action);
        }
        $menu->attributes['class'] .= ' page-add-actions commands';

        // Prioritise the menu ahead of all other actions.
        $menu->prioritise = true;

        return $this->render($menu);

    }

}
