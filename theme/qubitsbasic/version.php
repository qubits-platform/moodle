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
 *
 * @package   theme_qubitsbasic
 * @copyright 2023 Qubits Dev Team.
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die;

$plugin->component = 'theme_qubitsbasic'; // Full name of the plugin (used for diagnostics)
$plugin->release   = 'v1.0';
$plugin->version   = 2023070400; // The current module version (Date: YYYYMMDDXX)
$plugin->maturity  = MATURITY_STABLE;
$plugin->requires  = 2020061500; // Requires this Moodle version 3.9
// This theme depends boost theme.
$plugin->dependencies = [
    'theme_boost' => 2022112800
];
