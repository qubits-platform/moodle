<?php

// https://staging.myqubit.co/local/qbmanifest/updateqassigntype-otxt.php
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
JOIN {qbassign} as b ON a.instance = b.id AND (b.uid iLike 'DPL01-TP4-CHDRN9%' OR b.uid iLike 'DPL01-TP4-CHDRN13%' OR b.uid iLike 'DPL02-TP2-CHDRN9%')
JOIN {qbassign_plugin_config} as b1 ON b.id = b1.qbassignment AND b1.plugin = 'file' AND b1.subtype='qbassignsubmission' 
AND b1.name = 'enabled' AND b1.value = '1'
AND a.module = '18' AND c.id > 54
ORDER BY b.id asc";

$records = $DB->get_records_sql($query);

    //echo count($records)." rows <br/>";

    echo "<pre>";
    foreach($records as $record){
        print_r($record);
        $qbassignment = $record->qbassignment;
        echo "Qbassignment >>> $qbassignment <br/>";

        // qbassignsubmission - enabled
        $getactive_online = $DB->get_record('qbassign_plugin_config', array('plugin' => 'onlinetex','subtype' => 'qbassignsubmission','name'=>'enabled','qbassignment'=> $qbassignment));
        if(isset($getactive_online->id)) {
            $getactive_online->value = 1;           
            $DB->update_record('qbassign_plugin_config', $getactive_online);
        } else  { 
            $updateactivityonline =  array(
            'qbassignment' => $qbassignment,
            'plugin' => 'onlinetex',
            'subtype' => 'qbassignsubmission',
            'name' => 'enabled',
            'value' => 1
            );
            $DB->insert_record('qbassign_plugin_config', $updateactivityonline);
        }

        // wordlimit enabled
        $getwordlimitenbld = $DB->get_record('qbassign_plugin_config', array('plugin' => 'onlinetex','subtype' => 'qbassignsubmission','name'=>'wordlimitenabled','qbassignment'=> $qbassignment));
        if(isset($getwordlimitenbld->id)){
            $getwordlimitenbld->value = 1;
            $DB->update_record('qbassign_plugin_config', $getwordlimitenbld);
        } else {
            $upwrdenbld =  array(
                'qbassignment' => $qbassignment,
                'plugin' => 'onlinetex',
                'subtype' => 'qbassignsubmission',
                'name' => 'wordlimitenabled',
                'value' => 1
                );
            $DB->insert_record('qbassign_plugin_config', $upwrdenbld);
        }

        // wordlimit
        $getwordlimit = $DB->get_record('qbassign_plugin_config', array('plugin' => 'onlinetex','subtype' => 'qbassignsubmission','name'=>'wordlimit','qbassignment'=> $qbassignment));
        if(isset($getwordlimit->id)){
            $getwordlimit->value = 500;
            $DB->update_record('qbassign_plugin_config', $getwordlimitenbld);
        } else {
            $upwrdenbld =  array(
                'qbassignment' => $qbassignment,
                'plugin' => 'onlinetex',
                'subtype' => 'qbassignsubmission',
                'name' => 'wordlimit',
                'value' => 500
                );
            $DB->insert_record('qbassign_plugin_config', $upwrdenbld);
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