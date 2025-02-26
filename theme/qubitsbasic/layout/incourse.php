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
 * A drawer based layout for the boost theme.
 *
 * @package   theme_boost
 * @copyright 2021 Bas Brands
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

require_once($CFG->libdir . '/behat/lib.php');
require_once($CFG->dirroot . '/course/lib.php');

// Add block button in editing mode.
$addblockbutton = $OUTPUT->addblockbutton();

user_preference_allow_ajax_update('drawer-open-index', PARAM_BOOL);
user_preference_allow_ajax_update('drawer-open-block', PARAM_BOOL);

if (isloggedin()) {
    $courseindexopen = (get_user_preferences('drawer-open-index', true) == true);
    $blockdraweropen = (get_user_preferences('drawer-open-block') == true);
} else {
    $courseindexopen = false;
    $blockdraweropen = false;
}

if (defined('BEHAT_SITE_RUNNING')) {
    $blockdraweropen = true;
}

$extraclasses = ['uses-drawers'];
if ($courseindexopen) {
    $extraclasses[] = 'drawer-open-index';
}

$blockshtml = $OUTPUT->blocks('side-pre');
$hasblocks = (strpos($blockshtml, 'data-block=') !== false || !empty($addblockbutton));
if (!$hasblocks) {
    $blockdraweropen = false;
}
$courseindex = core_course_drawer();
if (!$courseindex) {
    $courseindexopen = false;
}

$bodyattributes = $OUTPUT->body_attributes($extraclasses);
$forceblockdraweropen = $OUTPUT->firstview_fakeblocks();

$secondarynavigation = false;
$overflow = '';
if ($PAGE->has_secondary_navigation()) {
    $tablistnav = $PAGE->has_tablist_secondary_navigation();
    $moremenu = new \core\navigation\output\more_menu($PAGE->secondarynav, 'nav-tabs', true, $tablistnav);
    $secondarynavigation = $moremenu->export_for_template($OUTPUT);
    $overflowdata = $PAGE->secondarynav->get_overflow_menu_data();
    if (!is_null($overflowdata)) {
        $overflow = $overflowdata->export_for_template($OUTPUT);
    }
}

$primary = new core\navigation\output\primary($PAGE);
$renderer = $PAGE->get_renderer('core');
$primarymenu = $primary->export_for_template($renderer);
$buildregionmainsettings = !$PAGE->include_region_main_settings_in_header_actions() && !$PAGE->has_secondary_navigation();
// If the settings menu will be included in the header then don't add it here.
$regionmainsettingsmenu = $buildregionmainsettings ? $OUTPUT->region_main_settings_menu() : false;

$header = $PAGE->activityheader;
$headercontent = $header->export_for_template($renderer);

$tmplpath = 'theme_qubitsbasic/incourse';
$templatecontext = [
    'sitename' => format_string($SITE->shortname, true, ['context' => context_course::instance(SITEID), "escape" => false]),
    'output' => $OUTPUT,
    'sidepreblocks' => $blockshtml,
    'hasblocks' => $hasblocks,
    'bodyattributes' => $bodyattributes,
    'courseindexopen' => $courseindexopen,
    'blockdraweropen' => $blockdraweropen,
    'courseindex' => $courseindex,
    'primarymoremenu' => $primarymenu['moremenu'],
    'secondarymoremenu' => $secondarynavigation ?: false,
    'mobileprimarynav' => $primarymenu['mobileprimarynav'],
    'usermenu' => $primarymenu['user'],
    'langmenu' => $primarymenu['lang'],
    'forceblockdraweropen' => $forceblockdraweropen,
    'regionmainsettingsmenu' => $regionmainsettingsmenu,
    'hasregionmainsettingsmenu' => !empty($regionmainsettingsmenu),
    'overflow' => $overflow,
    'headercontent' => $headercontent,
    'addblockbutton' => $addblockbutton,
    'iscourseandmoddtlpage' => true
];

$path_params = parse_url($PAGE->url, PHP_URL_PATH);
$is_showreact = false;
$muid = '';
$is_scratch = false;
$is_student = false;
$is_teacher = false;
$userid = optional_param('userid', 0, PARAM_INT);
$action = optional_param('action', '', PARAM_TEXT);
if($path_params == "/mod/qbassign/view.php"){
    global $DB;
    $course_user_roles = enrol_get_course_users_roles($COURSE->id);
    $student_id = 5;
    $teacher_id = 3;
    $qbteacher_id = 9;
    $module_id = required_param('id', PARAM_INT);
    $cuserroles = array();
    foreach($course_user_roles as $k => $cu_role){
        $cur_role_obj = current($cu_role);
        if($cur_role_obj->roleid == $student_id)
            $cuserroles['stu-'.$cur_role_obj->userid] = $cur_role_obj->userid;
        if($cur_role_obj->roleid == $teacher_id || $cur_role_obj->roleid == $qbteacher_id)
            $cuserroles['tea-'.$cur_role_obj->userid] = $cur_role_obj->userid;
    }

    $qbinstnce = $DB->get_record_sql("
        SELECT qa.uid as uid, qa.id
        FROM {course_modules} cm
        JOIN {qbassign} qa ON cm.instance = qa.id
        WHERE cm.id = :moduleid ", [
            'moduleid' => $module_id
    ]);
    $muid = ($qbinstnce->uid) ? $qbinstnce->uid : '';
    $qb_config_data = $DB->get_record("qbassign_plugin_config", [
        'plugin' => "scratch",
        'qbassignment' => $qbinstnce->id,
        'name' => "enabled",
        'value' => "1"
    ]);

    //echo "<pre>"; print_r($qb_config_data); exit;

    if(isset($cuserroles['stu-'.$USER->id])){
        $tmplpath = 'theme_qubitsbasic/incourse-assign-student';
        if($qb_config_data){
            $tmplpath = 'theme_qubitsbasic/incourse-assign-scratch-student';
            $templatecontext["scratch_aurl"] = $CFG->wwwroot.'/third_party/scratch/assn';
        }
    }

    if(isset($cuserroles['tea-'.$USER->id]) || is_siteadmin()){
        $templatecontext["is_showreact"] = false;
        $templatecontext["is_scratch"] = false;
        $tmplpath = 'theme_qubitsbasic/incourse-assign-teacher';
        if($action=="grader" || $action=="viewpluginqbassignsubmission"){
            $templatecontext["is_showreact"] = true;  
        }
        if($qb_config_data){
            $templatecontext["is_scratch"] = true;
            $tmplpath = 'theme_qubitsbasic/incourse-assign-scratch-teacher';
            $templatecontext["scratch_aurl"] = $CFG->wwwroot.'/third_party/scratch/assntr';
        }
     }

    $templatecontext["userid"] = $userid;
    $templatecontext["muid"] = $muid;


}

echo $OUTPUT->render_from_template($tmplpath, $templatecontext);
