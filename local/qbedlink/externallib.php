<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.


/**
 * External course participation api.
 *
 * This api is mostly read only, the actual enrol and unenrol
 * support is in each enrol plugin.
 *
 * @package    local_qbedlink
 * @copyright  2023 Qubits Dev Team
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

require_once("$CFG->libdir/externallib.php");
require_once($CFG->dirroot.'/user/lib.php');

// http://qubits.localhost.com/webservice/rest/server.php?wstoken=...&wsfunction=local_qbedlink_auth_edlinkuser&moodlewsrestformat=json

class local_qbedlink_external extends external_api {

    public static function edlink_loginuser($email){
        global $DB;
        $params = self::validate_parameters(
            self::edlink_loginuser_parameters(),
            array(
                'email' => $email
            )
        );

        $auser = $DB->get_record("user",[
            "email" => $email
        ]);
        $errmsg = null;

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
                //echo "<pre>"; print_r($curesult); echo "</pre>"; exit;
                if($curesult){
                    return ["result" => true];
                }else{
                    return ["result" => false, "validationerror" => "Authentication raised some issues"];
                }
            }else{
                return ["result" => false, "validationerror" => $errmsg];
            }
        }else{
            return ["result" => false, "validationerror" => "Given user is not available"];
        }
        
    }

    public static function edlink_loginuser_parameters(){
        return new external_function_parameters(
            array(
                'email' => new external_value(PARAM_TEXT, 'Email')
            )
        );
    }

    public static function edlink_loginuser_returns(){
        return new external_single_structure([
            'result' => new external_value(PARAM_BOOL, 'True if the edlink user was successfully logged in'),
            'validationerror' => new external_value(PARAM_BOOL, 'Indicates invalid form data', VALUE_DEFAULT, false),
        ]);
    }

}