<?php
header("Access-Control-Allow-Origin: *");
require_once('../../config.php');
require_once($CFG->libdir . '/adminlib.php');
require_once($CFG->dirroot.'/user/lib.php');

global $CFG, $DB, $USER, $OUTPUT;

// https://qubits.localhost.com/local/qbedlink/qbstcky.php?email=edlinktest001@gmail.com

$email = required_param('email', PARAM_TEXT);

$auser = $DB->get_record("user",[
    "email" => $email
]);

$username = $auser->username;
set_moodle_cookie($user->username);
exit;