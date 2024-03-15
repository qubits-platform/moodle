<?php
require_once('../../config.php');
require_once($CFG->libdir . '/adminlib.php');
global $CFG, $DB, $USER, $OUTPUT;

require_login();

if(!is_siteadmin()){
    throw new \moodle_exception('accessdenied');
}

//$DB->get_connection()->beginTransaction();

try {
$query = "SELECT b1.*
FROM {course} c
JOIN {course_modules} a ON c.id = a.course AND ( c.shortname iLike 'DPL01%' OR c.shortname iLike 'DPL02%')
JOIN {qbassign} as b ON a.instance = b.id
JOIN {qbassign_plugin_config} as b1 ON b.id = b1.qbassignment AND b1.plugin = 'scratch' AND b1.subtype='qbassignsubmission' 
AND b1.name = 'enabled' AND b1.value = '1'
AND a.module = '18' AND c.id > 54
ORDER BY b.id asc";

$records = $DB->get_records_sql($query);

    echo "<pre>";
    foreach($records as $record){
        print_r($record);
        $qbassignment = $record->qbassignment;
        echo "Qbassignment >>> $qbassignment <br/>";
        
        // qbassignsubmission - enabled
        $getactive_online = $DB->get_record('qbassign_plugin_config', array('plugin' => 'file','subtype' => 'qbassignsubmission','name'=>'enabled','qbassignment'=> $qbassignment));
        if(isset($getactive_online->id)) {
            $getactive_online->value = 1;           
            $onlinetext_default = $DB->update_record('qbassign_plugin_config', $getactive_online);
        } else  { 
            $updateactivityonline =  array(
            'qbassignment' => $qbassignment,
            'plugin' => 'file',
            'subtype' => 'qbassignsubmission',
            'name' => 'enabled',
            'value' => 1
            );
            $onlinefile_default = $DB->insert_record('qbassign_plugin_config', $updateactivityonline);
        }

        // qbassignsubmission - maxfilesubmissions
        $getfilesub = $DB->get_record('qbassign_plugin_config', array('plugin' => 'file','subtype' => 'qbassignsubmission','name'=>'maxfilesubmissions','qbassignment'=>$qbassignment));
        if(isset($getfilesub->id)) {
            $DB->set_field('qbassign_plugin_config', 'value', 5, array('plugin'=>'file','subtype' => 'qbassignsubmission','name' => 'maxfilesubmissions','qbassignment' => $qbassignment));
        } else {
            $submissionfilelimit =  array(
                'qbassignment' => $qbassignment,
                'plugin' => 'file',
                'subtype' => 'qbassignsubmission',
                'name' => 'maxfilesubmissions',
                'value' => 5
            );
            $onlinefile_flimit = $DB->insert_record('qbassign_plugin_config', $submissionfilelimit);
        }


        // qbassignsubmission - filetypeslist
        $getfiletype = $DB->get_record('qbassign_plugin_config', array('plugin' => 'file','subtype' => 'qbassignsubmission','name'=>'filetypeslist','qbassignment'=> $qbassignment));
        if(isset($getfiletype->id)) {
            $DB->set_field('qbassign_plugin_config', 'value', '*', array('plugin'=>'file','subtype' => 'qbassignsubmission','name' => 'filetypeslist','qbassignment' => $qbassignment));
        } else {
            $submissionfiletype =  array(
            'qbassignment' => $qbassignment,
            'plugin' => 'file',
            'subtype' => 'qbassignsubmission',
            'name' => 'filetypeslist',
            'value' => '*'
            );
            $onlinefile_tyflimit = $DB->insert_record('qbassign_plugin_config', $submissionfiletype);
        }

        // qbassignsubmission - maxsubmissionsizebytes
        $getfilesize = $DB->get_record('qbassign_plugin_config', array('plugin' => 'file','subtype' => 'qbassignsubmission','name'=>'maxsubmissionsizebytes','qbassignment'=> $qbassignment));
        if(isset($getfilesize->id)) {
            $DB->set_field('qbassign_plugin_config', 'value', '2097152', array('plugin'=>'file','subtype' => 'qbassignsubmission','name' => 'maxsubmissionsizebytes','qbassignment' => $qbassignment));
        } else  {
            $submissionfilebytetype =  array(
            'qbassignment' => $qbassignment,
            'plugin' => 'file',
            'subtype' => 'qbassignsubmission',
            'name' => 'maxsubmissionsizebytes',
            'value' => '2097152'
            );
            $onlinefile_tybyflimit = $DB->insert_record('qbassign_plugin_config', $submissionfilebytetype);
        }

        $record->value = 0;
        $DB->update_record('qbassign_plugin_config', $record);
    }
    echo "</pre>";
    
   // $DB->get_connection()->commit();

} catch (Exception $e) {
    // Handle exceptions
    // Rollback the transaction on error
    // $DB->get_connection()->rollBack();
    // Optionally log the error
    //error_log($e->getMessage());
}

exit;