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
 * This file defines the admin settings for this plugin
 *
 * @package   qbassignsubmission_file
 * @copyright 2012 NetSpot {@link http://www.netspot.com.au}
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */


// Note: This is on by default.
$settings->add(new admin_setting_configcheckbox('qbassignsubmission_file/default',
                   new lang_string('default', 'qbassignsubmission_file'),
                   new lang_string('default_help', 'qbassignsubmission_file'), 1));

$settings->add(new admin_setting_configtext('qbassignsubmission_file/maxfiles',
                   new lang_string('maxfiles', 'qbassignsubmission_file'),
                   new lang_string('maxfiles_help', 'qbassignsubmission_file'), 20, PARAM_INT));

$settings->add(new admin_setting_filetypes('qbassignsubmission_file/filetypes',
                   new lang_string('defaultacceptedfiletypes', 'qbassignsubmission_file'),
                   new lang_string('acceptedfiletypes_help', 'qbassignsubmission_file'), ''));

if (isset($CFG->maxbytes)) {

    $name = new lang_string('maximumsubmissionsize', 'qbassignsubmission_file');
    $description = new lang_string('configmaxbytes', 'qbassignsubmission_file');

    $maxbytes = get_config('qbassignsubmission_file', 'maxbytes');
    $element = new admin_setting_configselect('qbassignsubmission_file/maxbytes',
                                              $name,
                                              $description,
                                              $CFG->maxbytes,
                                              get_max_upload_sizes($CFG->maxbytes, 0, 0, $maxbytes));
    $settings->add($element);
}
