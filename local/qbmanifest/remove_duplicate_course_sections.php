<?php
require_once('../../config.php');
require_once($CFG->libdir . '/adminlib.php');
global $CFG, $DB, $USER, $OUTPUT;

require_login();

if(!is_siteadmin()){
    throw new \moodle_exception('accessdenied');
}

$topicuid = required_param('topicuid', PARAM_TEXT);
$rtopicuid = required_param('rtopicuid', PARAM_TEXT);
$fourthtopic = required_param('fourthtopic', PARAM_TEXT);
$fifthtopic = required_param('fifthtopic', PARAM_TEXT);

// http://qubits.localhost.com/local/qbmanifest/remove_duplicate_course_sections.php?topicuid=DPL12-TP4-000&rtopicuid=DPL12-TP5-000&fourthtopic=Unit 4: Object Oriented Programming in Java&fifthtopic=Unit 5: Built-in Classes

/* echo "Topicuid {$topicuid}<br/> rtopicuid {$rtopicuid} <br/> fourthtopic {$fourthtopic} <br/> fifthtopic {$fifthtopic}";
exit; */

/* $topicuid = 'DPL12-TP4-000';
$rtopicuid = 'DPL12-TP5-000';
$fourthtopic = "Unit 4: Object Oriented Programming in Java";
$fifthtopic = "Unit 5: Built-in Classes"; */

$sql=<<<EOD
SELECT b.* FROM (SELECT a2.uid, count(a2.uid), STRING_AGG(a2.id, ',') sid, STRING_AGG(a2.course, ',') course FROM (select CAST(a1.id AS VARCHAR), a1.uid, CAST(a1.course AS VARCHAR) course
from "{course_sections}" a1 WHERE a1.course > 219 ) a2
group by a2.uid 
having count(a2.uid) > 1) b
WHERE b.uid LIKE '{$topicuid}%'
EOD;


$records = $DB->get_records_sql($sql);


foreach($records as $record){
	$asid = explode(",", $record->sid);
	$first = $asid[0];
	$second = $asid[1];
	if($first > $second){
	  $fifthsid = $first;
      $fourthsid = $second;
	}else{
	  $fifthsid = $second;
      $fourthsid = $first;
	}
	
	$fourthrow = $DB->get_record("course_sections",[
	   "id" => $fourthsid
	]);
	
	$fourthrow->name = $fourthtopic;
	$DB->update_record("course_sections", $fourthrow);
	
	$fifthrow = $DB->get_record("course_sections",[
	   "id" => $fifthsid
	]);
	
	$fifthrow->name = $fifthtopic;
	$fifthrow->uid = str_replace($topicuid, $rtopicuid, $fifthrow->uid);
	$DB->update_record("course_sections", $fifthrow);
	
	echo "<pre>";
	//print_r($asid);
	print_r($record);
	echo "</pre>";
}

//echo $sql;
exit;
