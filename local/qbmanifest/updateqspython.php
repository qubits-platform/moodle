<?php
require_once('../../config.php');
require_once($CFG->libdir . '/adminlib.php');
global $CFG, $DB, $USER, $OUTPUT;

require_login();

if(!is_siteadmin()){
    throw new \moodle_exception('accessdenied');
}

try {
    $query = "SELECT b1.*
    FROM {course} c
    JOIN {course_modules} a ON c.id = a.course AND c.shortname iLike 'DPL08%'
    JOIN {qbassign} as b ON a.instance = b.id and b.uid iLike 'DPL08-TP2-CHDRN7%'
    JOIN {qbassign_plugin_config} as b1 ON b.id = b1.qbassignment AND b1.plugin = 'scratch' AND b1.subtype='qbassignsubmission' 
    AND b1.name = 'enabled' AND b1.value = '1'
    AND a.module = '18' AND c.id > 54
    ORDER BY b.id asc";
    
    $records = $DB->get_records_sql($query);
    echo "Count ".count($records)."<br/>";
    echo "<pre>";
    print_r($records);
    echo "</pre>";
    $cnt = 0;
    foreach($records as $record){
        $qbassignment = $record->qbassignment;
        $cnt++;
        echo "$cnt ) Qbassignment >>> $qbassignment <br/>";

        // qbassignsubmission - codeblock - enabled
        $getactive_codeblock = $DB->get_record('qbassign_plugin_config', array('plugin' => 'codeblock','subtype' => 'qbassignsubmission','name'=>'enabled','qbassignment'=> $qbassignment));
        if(isset($getactive_codeblock->id)) {
            $getactive_codeblock->value = 1;           
            $codeblock_default = $DB->update_record('qbassign_plugin_config', $getactive_codeblock);
        } else  { 
            $updateactivitycodeblock =  array(
            'qbassignment' => $qbassignment,
            'plugin' => 'codeblock',
            'subtype' => 'qbassignsubmission',
            'name' => 'enabled',
            'value' => 1
            );
            $codeblock_default = $DB->insert_record('qbassign_plugin_config', $updateactivitycodeblock);
        }

        // qbassignsubmission - codeblock - type

        $getactive_codeblock1 = $DB->get_record('qbassign_plugin_config', array('plugin' => 'codeblock','subtype' => 'qbassignsubmission','name'=>'type','qbassignment'=> $qbassignment));
        if(isset($getactive_codeblock1->id)) {
            $getactive_codeblock1->value = 1;           
            $codeblock_default1 = $DB->update_record('qbassign_plugin_config', $getactive_codeblock1);
        } else  { 
            $updateactivitycodeblock1 =  array(
            'qbassignment' => $qbassignment,
            'plugin' => 'codeblock',
            'subtype' => 'qbassignsubmission',
            'name' => 'type',
            'value' => 1
            );
            $codeblock_default1 = $DB->insert_record('qbassign_plugin_config', $updateactivitycodeblock1);
        }

        // qbsubmission - codeblock - language - Python

        $getactive_codeblock2 = $DB->get_record('qbassign_plugin_config', array('plugin' => 'codeblock','subtype' => 'qbassignsubmission','name'=>'lang','qbassignment'=> $qbassignment));
        if(isset($getactive_codeblock2->id)) {
            $getactive_codeblock2->value = "python";           
            $codeblock_default2 = $DB->update_record('qbassign_plugin_config', $getactive_codeblock2);
        } else  { 
            $updateactivitycodeblock2 =  array(
            'qbassignment' => $qbassignment,
            'plugin' => 'codeblock',
            'subtype' => 'qbassignsubmission',
            'name' => 'lang',
            'value' => "python"
            );
            $codeblock_default2 = $DB->insert_record('qbassign_plugin_config', $updateactivitycodeblock2);
        }

        // Set Scratch block as zero
        $record->value = 0;
        $DB->update_record('qbassign_plugin_config', $record);

    }
    exit;
}catch (Exception $e) {
    echo $e->getMessage();
    exit;
}