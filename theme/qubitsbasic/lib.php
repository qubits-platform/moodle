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
 * Theme functions.
 *
 * @package    theme_qubitsbasic
 * @copyright  2023 Qubits Dev Team.
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

/**
 * Post process the CSS tree.
 *
 * @param string $tree The CSS tree.
 * @param theme_config $theme The theme config object.
 */

/**
 * Returns the main SCSS content.
 *
 * @return string
 */
// function theme_qubitsbasic_get_main_scss_content($theme) {
//     global $CFG;

//     $scss = '';

//     $context = context_system::instance();
//     $scss .= file_get_contents($CFG->dirroot . '/theme/boost/scss/preset/default.scss');
//     return $scss;
// }
function theme_qubitsbasic_get_main_scss_content($theme) {                                                                                
    global $CFG; 
    $scss = '';      
    $filename = !empty($theme->settings->preset) ? $theme->settings->preset : null;
	$fs = get_file_storage();             
    $context = context_system::instance();                                                                                          
    if ($filename == 'default.scss') {                               
        $scss .= file_get_contents($CFG->dirroot . '/theme/boost/scss/preset/default.scss');                                        
    } else if ($filename == 'plain.scss') {                     
        $scss .= file_get_contents($CFG->dirroot . '/theme/boost/scss/preset/plain.scss');                   
    } else if ($filename && ($presetfile = $fs->get_file($context->id, 'theme_qubitsbasic', 'preset', 0, '/', $filename))) {              
        $scss .= $presetfile->get_content();                                                      
    } else {                                                                           
        $scss .= file_get_contents($CFG->dirroot . '/theme/boost/scss/preset/default.scss');
    }
	
    // Pre CSS - this is loaded AFTER any prescss from the setting but before the main scss.                                        
    $mcourse = file_get_contents($CFG->dirroot . '/theme/qubitsbasic/scss/mycourse.scss');                                                         
    // Post CSS - this is loaded AFTER the main scss but before the extra scss from the setting.                                    
    $login = file_get_contents($CFG->dirroot . '/theme/qubitsbasic/scss/login.scss');                                                       
    $buttons = file_get_contents($CFG->dirroot . '/theme/qubitsbasic/scss/buttons.scss');
    $forms = file_get_contents($CFG->dirroot . '/theme/qubitsbasic/scss/buttons.scss');
    return $mcourse . "\n" . $scss . "\n" . $login. "\n" .$buttons. "\n" .$forms;
}

function theme_qubitsbasic_get_pre_scss($theme) {
    $theme = theme_config::load('boost');
	return theme_boost_get_pre_scss($theme);                         
}
