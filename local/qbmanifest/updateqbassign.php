<?php
require_once('../../config.php');
require_once($CFG->libdir . '/adminlib.php');
global $CFG, $DB, $USER, $OUTPUT;

require_login();

if(!is_siteadmin()){
    throw new \moodle_exception('accessdenied');
}

$modulerec = $DB->get_record("modules",[
    "name" => "qbassign"
]);

$moduleid = $modulerec->id;

$qbassigns = $DB->get_records("course_modules",[
    "module" => $moduleid,
    "completion" => "0"
]);

if($qbassigns){
    $updatedrecords = $DB->execute('UPDATE {course_modules} SET completion = :completion WHERE module = :mid AND completion = :oldcompletion', [
        "completion" => "1",
        "oldcompletion" => "0",
        "mid" => $moduleid
    ]);

    echo "module id >> {$moduleid}<br/>";
    echo count($qbassigns)."<br/>";
    echo "Updated Records result $updatedrecords <br/>";
}
$cnt = 0;
$cnt1 = 0;
$cnt2 = 0;

// Get File submission Assignment IDs


$qbassignconfig = $DB->get_records("qbassign_plugin_config",[
    "plugin" => "file",
    "subtype" => "qbassignsubmission",
    "name" => "enabled",
    "value" => '1'
]);

foreach($qbassignconfig as $sqbassignconfig){
    $qbaid = $sqbassignconfig->qbassignment;
    // max size set
    $msz = $DB->get_record("qbassign_plugin_config",[
        "plugin" => "file",
        "subtype" => "qbassignsubmission",
        "name" => "maxsubmissionsizebytes",
        "qbassignment" => $qbaid
    ]);
    if($msz){
       if($msz->value == "0"){
         $msz->value = "8388608";
         $DB->update_record("qbassign_plugin_config", $msz);
       }
       $cnt++;
    }else{
        $mszdata = new stdClass;
        $mszdata->qbassignment = $qbaid;
        $mszdata->plugin = "file";
        $mszdata->subtype = "qbassignsubmission";
        $mszdata->name = "maxsubmissionsizebytes";
        $mszdata->value = "8388608";
        $DB->insert_record("qbassign_plugin_config", $mszdata);
    }

    // File type
    $mft = $DB->get_record("qbassign_plugin_config",[
        "plugin" => "file",
        "subtype" => "qbassignsubmission",
        "name" => "filetypeslist",
        "qbassignment" => $qbaid
    ]);
    if($mft){
       if(empty($mft->value)){
         $mft->value = "*";
         $DB->update_record("qbassign_plugin_config", $mft);
       }
       $cnt1++;
    }else{
        $mftdata = new stdClass;
        $mftdata->qbassignment = $qbaid;
        $mftdata->plugin = "file";
        $mftdata->subtype = "qbassignsubmission";
        $mftdata->name = "filetypeslist";
        $mftdata->value = "*";
        $DB->insert_record("qbassign_plugin_config", $mftdata);
    }

    // Max File Submission
    $mfs = $DB->get_record("qbassign_plugin_config",[
        "plugin" => "file",
        "subtype" => "qbassignsubmission",
        "name" => "maxfilesubmissions",
        "qbassignment" => $qbaid
    ]);
    if($mfs){
       if($mfs->value < 5){
         $mfs->value = "5";
         $DB->update_record("qbassign_plugin_config", $mfs);
       }
       $cnt2++;
    }else{
        $mfsdata = new stdClass;
        $mfsdata->qbassignment = $qbaid;
        $mfsdata->plugin = "file";
        $mfsdata->subtype = "qbassignsubmission";
        $mfsdata->name = "maxfilesubmissions";
        $mfsdata->value = "5";
        $DB->insert_record("qbassign_plugin_config", $mfsdata);
    }


}

// file	qbassignsubmission	maxfilesubmissions	5
// file	qbassignsubmission	filetypeslist	*
// file	qbassignsubmission	maxsubmissionsizebytes	8388608

echo "File Submissions ".count($qbassignconfig)."<br/>";
echo "maxsubmissionsizebytes ".$cnt."<br/>";
echo "filetypeslist ".$cnt1."<br/>";
echo "maxfilesubmissions ".$cnt2."<br/>";
exit;