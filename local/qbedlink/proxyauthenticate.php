<?php
header("Access-Control-Allow-Origin: *");
require_once('../../config.php');
require_once($CFG->libdir . '/adminlib.php');
require_once($CFG->dirroot.'/user/lib.php');
global $CFG, $DB, $USER, $OUTPUT;
// http://qubits.localhost.com/local/qbedlink/proxyauthenticate.php?wstoken=...&wsfunction=local_qbedlink_auth_edlinkuser&moodlewsrestformat=json

$email = required_param('email', PARAM_TEXT);
$token = required_param('token', PARAM_TEXT);
//d194573de478fa1a83a8b0079a9df01b
$token = str_replace("869o", "", $token);
$rtoken = $DB->get_record("external_tokens", array("token" => $token));
if($rtoken->token!==$token){
    throw new moodle_exception('Invalid Token', 'error');
}

$auser = $DB->get_record("user",[
    "email" => $email
]);
$errmsg = null;
$rst = null;

if($auser){
    if($auser->auth != "edlink")
      throw new moodle_exception('Current User Authentication type is not edlink', 'error');

    if($auser->suspended)
      throw new moodle_exception('Current User has been suspended', 'error');

    if($auser->deleted)
      throw new moodle_exception('Current User is not available', 'error');

    $username = $auser->username;
    $user = get_complete_user_data('username', $username);
    $curesult = complete_user_login($user);
    $url = $CFG->wwwroot.'/my/courses.php';
    redirect($url);
    exit;
}