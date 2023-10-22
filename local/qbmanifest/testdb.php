<?php

require_once('../../config.php');

global $CFG,$DB;

$old_file = array(
    "contenthash" => "21baa4b893fb6c2c8772f78e1dad1a83b703782b000qbs",
    "pathnamehash" => "5fc08591abae4bcd05f9074e14d07a958aa50cfb000qbs",
    "contextid" => 26076,
    "component" => "qbassignsubmission_file",
    "filearea" => "submission_files",
    "itemid" => 7557,
    "filepath" => "/",
    "filename" => "siuuu.PNG",
    "userid" => "",
    "filesize" => "22223",
    "mimetype" => "image/png",
    "status" => "0",
    "source" => "",
    "author" => "",
    "license" => "",
    "timecreated" => 1695631384,
    "timemodified" => 1695631384,
    "sortorder" => "0",
    "referencefileid" => ""
);

$id = $DB->insert_record("files", $old_file);
echo $id;

exit;