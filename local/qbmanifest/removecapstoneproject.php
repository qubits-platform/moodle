<?php
require_once('../../config.php');
require_once($CFG->libdir . '/adminlib.php');
require_once($CFG->libdir.'/csvlib.class.php');
require_once($CFG->dirroot . '/course/lib.php');
require_once($CFG->dirroot . '/course/modlib.php');
global $CFG, $DB;

$iid = csv_import_reader::get_new_iid('capstoneproject');
$cir = new csv_import_reader($iid, 'capstoneproject');
$content = file_get_contents($CFG->dirroot."/books-json/remove-topic-cprojectids.csv");
$cir->load_csv_content($content, 'utf-8', 'comma');
$cir->init();
echo "<pre>";
print_r($cir);
echo "</pre>";

while ($row = $cir->next()) {
    echo "<pre>";
    print_r($row);
    echo "</pre>";
    // get_course_sections($row[0]);
    // course_delete_section_async
    delete_course_modules($row[1]);
    delete_course_sections($row[0]);
}

function delete_course_sections($uid){
    global $DB;
    $likeuid = $DB->sql_like('uid', ':uid');
    $uid = $uid.'%';
    $csections = $DB->get_records_sql(
        "SELECT * FROM {course_sections} WHERE {$likeuid}",
        [
            'uid' => $uid,
        ]
    );

    foreach($csections as $csection){
        $scourse = $DB->get_record("course", [
           "id" => $csection->course
        ]);
        echo "<pre>";
        print_r($csection);
        echo "</pre>";
        course_delete_section($scourse, $csection);
    }
}

function delete_course_modules($uid){
    global $DB;
    $likeuid = $DB->sql_like('uid', ':uid');
    $uid = $uid.'%';
    $course_modules = $DB->get_records_sql(
        "SELECT id,course FROM {qubitspage} WHERE {$likeuid}",
        [
            'uid' => $uid,
        ]
    );
    
    foreach($course_modules as $course_module){
        $instance = $course_module->id;
        $course_id = $course_module->course;
        $course_mdl = $DB->get_record("course_modules",[
            "course" => $course_id,
            "instance" => $instance,
            "module" => 19
        ]);
        echo "<pre>";
        print_r($course_mdl);
        echo "</pre>";
        course_delete_module($course_mdl->id);
    }

}


exit;