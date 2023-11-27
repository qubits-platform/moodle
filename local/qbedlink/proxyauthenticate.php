<?php
header("Access-Control-Allow-Origin: *");
require_once('../../config.php');
require_once($CFG->libdir . '/adminlib.php');
require_once($CFG->dirroot.'/user/lib.php');
global $CFG, $DB, $USER, $OUTPUT;
// http://qubits.localhost.com/local/qbedlink/proxyauthenticate.php?wstoken=...&wsfunction=local_qbedlink_auth_edlinkuser&moodlewsrestformat=json

$email = required_param('email', PARAM_TEXT);

$auser = $DB->get_record("user",[
    "email" => $email
]);
$errmsg = null;
$rst = null;

if($auser){
    if($auser->auth != "edlink")
      $errmsg = "Current User Authentication type is not edlink";

    if($auser->suspended)
       $errmsg = "Current User has been suspended";

    if($auser->deleted)
       $errmsg = "Current User is not available";
    
    if(empty($errmsg)){
        $username = $auser->username;
        $user = get_complete_user_data('username', $username);
        $curesult = complete_user_login($user);
        //set_moodle_cookie($user->username);
        //$url = $CFG->wwwroot.'/my/courses.php';
        //redirect($url);
        echo "Set Cookie <br/>";
        echo "<pre>"; print_r($curesult); echo "</pre>"; exit;
        /* if($curesult){
            $rst = ["result" => true];
        }else{
            $rst = ["result" => false, "validationerror" => "Authentication raised some issues"];
        } */
    }else{
       // $rst = ["result" => false, "validationerror" => $errmsg];
    }
}else{
   // $rst = ["result" => false, "validationerror" => "Given user is not available"];
}

//echo json_encode($rst);