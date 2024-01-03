<?php
require_once('../../config.php');
require_once($CFG->libdir . '/adminlib.php');
require_once($CFG->libdir.'/csvlib.class.php');
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
}

function get_course_sections($uid){
    global $DB;
    $likeuid = $DB->sql_like('uid', ':uid');
    $uid = $uid.'%';
    $csections = $DB->get_records_sql(
        "SELECT id FROM {course_sections} WHERE {$likeuid}",
        [
            'uid' => $uid,
        ]
    );
    return $csections;
}


exit;