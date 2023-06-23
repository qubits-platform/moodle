
<!DOCTYPE html>

<html  dir="ltr" lang="en" xml:lang="en">
<head>
    <title>make-a-social-media-website: Chapter1</title>
    <link rel="shortcut icon" href="http://qubits.localhost.com/theme/image.php/qubitsbasic/theme/1687514797/favicon" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="moodle, make-a-social-media-website: Chapter1" />
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/combo?3.17.2/cssreset/cssreset-min.css&amp;3.17.2/cssfonts/cssfonts-min.css&amp;3.17.2/cssgrids/cssgrids-min.css&amp;3.17.2/cssbase/cssbase-min.css" /><link rel="stylesheet" type="text/css" href="http://qubits.localhost.com/theme/yui_combo.php?rollup/3.17.2/yui-moodlesimple-min.css" /><script id="firstthemesheet" type="text/css">/** Required in order to fix style inclusion problems in IE with YUI **/</script><link rel="stylesheet" type="text/css" href="http://qubits.localhost.com/theme/styles.php/qubitsbasic/1687514797_1/all" />
<script>
//<![CDATA[
var M = {}; M.yui = {};
M.pageloadstarttime = new Date();
M.cfg = {"wwwroot":"http:\/\/qubits.localhost.com","homeurl":{},"sesskey":"V8pq7dnci3","sessiontimeout":"28800","sessiontimeoutwarning":"1200","themerev":"1687514797","slasharguments":1,"theme":"qubitsbasic","iconsystemmodule":"core\/icon_system_fontawesome","jsrev":"1687514797","admin":"admin","svgicons":true,"usertimezone":"UTC","courseId":16,"courseContextId":66,"contextid":426,"contextInstanceId":37,"langrev":1687514797,"templaterev":"1687514797"};var yui1ConfigFn = function(me) {if(/-skin|reset|fonts|grids|base/.test(me.name)){me.type='css';me.path=me.path.replace(/\.js/,'.css');me.path=me.path.replace(/\/yui2-skin/,'/assets/skins/sam/yui2-skin')}};
var yui2ConfigFn = function(me) {var parts=me.name.replace(/^moodle-/,'').split('-'),component=parts.shift(),module=parts[0],min='-min';if(/-(skin|core)$/.test(me.name)){parts.pop();me.type='css';min=''}
if(module){var filename=parts.join('-');me.path=component+'/'+module+'/'+filename+min+'.'+me.type}else{me.path=component+'/'+component+'.'+me.type}};
YUI_config = {"debug":false,"base":"http:\/\/yui.yahooapis.com\/3.17.2\/","comboBase":"http:\/\/yui.yahooapis.com\/combo?","combine":true,"filter":null,"insertBefore":"firstthemesheet","groups":{"yui2":{"base":"http:\/\/qubits.localhost.com\/lib\/yuilib\/2in3\/2.9.0\/build\/","comboBase":"http:\/\/qubits.localhost.com\/theme\/yui_combo.php?","combine":true,"ext":false,"root":"2in3\/2.9.0\/build\/","patterns":{"yui2-":{"group":"yui2","configFn":yui1ConfigFn}}},"moodle":{"name":"moodle","base":"http:\/\/qubits.localhost.com\/theme\/yui_combo.php?m\/1687514797\/","combine":true,"comboBase":"http:\/\/qubits.localhost.com\/theme\/yui_combo.php?","ext":false,"root":"m\/1687514797\/","patterns":{"moodle-":{"group":"moodle","configFn":yui2ConfigFn}},"filter":null,"modules":{"moodle-core-actionmenu":{"requires":["base","event","node-event-simulate"]},"moodle-core-blocks":{"requires":["base","node","io","dom","dd","dd-scroll","moodle-core-dragdrop","moodle-core-notification"]},"moodle-core-chooserdialogue":{"requires":["base","panel","moodle-core-notification"]},"moodle-core-dragdrop":{"requires":["base","node","io","dom","dd","event-key","event-focus","moodle-core-notification"]},"moodle-core-event":{"requires":["event-custom"]},"moodle-core-formchangechecker":{"requires":["base","event-focus","moodle-core-event"]},"moodle-core-handlebars":{"condition":{"trigger":"handlebars","when":"after"}},"moodle-core-languninstallconfirm":{"requires":["base","node","moodle-core-notification-confirm","moodle-core-notification-alert"]},"moodle-core-lockscroll":{"requires":["plugin","base-build"]},"moodle-core-maintenancemodetimer":{"requires":["base","node"]},"moodle-core-notification":{"requires":["moodle-core-notification-dialogue","moodle-core-notification-alert","moodle-core-notification-confirm","moodle-core-notification-exception","moodle-core-notification-ajaxexception"]},"moodle-core-notification-dialogue":{"requires":["base","node","panel","escape","event-key","dd-plugin","moodle-core-widget-focusafterclose","moodle-core-lockscroll"]},"moodle-core-notification-alert":{"requires":["moodle-core-notification-dialogue"]},"moodle-core-notification-confirm":{"requires":["moodle-core-notification-dialogue"]},"moodle-core-notification-exception":{"requires":["moodle-core-notification-dialogue"]},"moodle-core-notification-ajaxexception":{"requires":["moodle-core-notification-dialogue"]},"moodle-core-popuphelp":{"requires":["moodle-core-tooltip"]},"moodle-core-tooltip":{"requires":["base","node","io-base","moodle-core-notification-dialogue","json-parse","widget-position","widget-position-align","event-outside","cache-base"]},"moodle-core_availability-form":{"requires":["base","node","event","event-delegate","panel","moodle-core-notification-dialogue","json"]},"moodle-backup-backupselectall":{"requires":["node","event","node-event-simulate","anim"]},"moodle-backup-confirmcancel":{"requires":["node","node-event-simulate","moodle-core-notification-confirm"]},"moodle-course-categoryexpander":{"requires":["node","event-key"]},"moodle-course-dragdrop":{"requires":["base","node","io","dom","dd","dd-scroll","moodle-core-dragdrop","moodle-core-notification","moodle-course-coursebase","moodle-course-util"]},"moodle-course-management":{"requires":["base","node","io-base","moodle-core-notification-exception","json-parse","dd-constrain","dd-proxy","dd-drop","dd-delegate","node-event-delegate"]},"moodle-course-util":{"requires":["node"],"use":["moodle-course-util-base"],"submodules":{"moodle-course-util-base":{},"moodle-course-util-section":{"requires":["node","moodle-course-util-base"]},"moodle-course-util-cm":{"requires":["node","moodle-course-util-base"]}}},"moodle-form-dateselector":{"requires":["base","node","overlay","calendar"]},"moodle-form-passwordunmask":{"requires":[]},"moodle-form-shortforms":{"requires":["node","base","selector-css3","moodle-core-event"]},"moodle-question-chooser":{"requires":["moodle-core-chooserdialogue"]},"moodle-question-preview":{"requires":["base","dom","event-delegate","event-key","core_question_engine"]},"moodle-question-searchform":{"requires":["base","node"]},"moodle-availability_completion-form":{"requires":["base","node","event","moodle-core_availability-form"]},"moodle-availability_date-form":{"requires":["base","node","event","io","moodle-core_availability-form"]},"moodle-availability_grade-form":{"requires":["base","node","event","moodle-core_availability-form"]},"moodle-availability_group-form":{"requires":["base","node","event","moodle-core_availability-form"]},"moodle-availability_grouping-form":{"requires":["base","node","event","moodle-core_availability-form"]},"moodle-availability_profile-form":{"requires":["base","node","event","moodle-core_availability-form"]},"moodle-mod_assign-history":{"requires":["node","transition"]},"moodle-mod_quiz-autosave":{"requires":["base","node","event","event-valuechange","node-event-delegate","io-form"]},"moodle-mod_quiz-dragdrop":{"requires":["base","node","io","dom","dd","dd-scroll","moodle-core-dragdrop","moodle-core-notification","moodle-mod_quiz-quizbase","moodle-mod_quiz-util-base","moodle-mod_quiz-util-page","moodle-mod_quiz-util-slot","moodle-course-util"]},"moodle-mod_quiz-modform":{"requires":["base","node","event"]},"moodle-mod_quiz-questionchooser":{"requires":["moodle-core-chooserdialogue","moodle-mod_quiz-util","querystring-parse"]},"moodle-mod_quiz-quizbase":{"requires":["base","node"]},"moodle-mod_quiz-toolboxes":{"requires":["base","node","event","event-key","io","moodle-mod_quiz-quizbase","moodle-mod_quiz-util-slot","moodle-core-notification-ajaxexception"]},"moodle-mod_quiz-util":{"requires":["node","moodle-core-actionmenu"],"use":["moodle-mod_quiz-util-base"],"submodules":{"moodle-mod_quiz-util-base":{},"moodle-mod_quiz-util-slot":{"requires":["node","moodle-mod_quiz-util-base"]},"moodle-mod_quiz-util-page":{"requires":["node","moodle-mod_quiz-util-base"]}}},"moodle-message_airnotifier-toolboxes":{"requires":["base","node","io"]},"moodle-filter_glossary-autolinker":{"requires":["base","node","io-base","json-parse","event-delegate","overlay","moodle-core-event","moodle-core-notification-alert","moodle-core-notification-exception","moodle-core-notification-ajaxexception"]},"moodle-filter_mathjaxloader-loader":{"requires":["moodle-core-event"]},"moodle-editor_atto-editor":{"requires":["node","transition","io","overlay","escape","event","event-simulate","event-custom","node-event-html5","node-event-simulate","yui-throttle","moodle-core-notification-dialogue","moodle-core-notification-confirm","moodle-editor_atto-rangy","handlebars","timers","querystring-stringify"]},"moodle-editor_atto-plugin":{"requires":["node","base","escape","event","event-outside","handlebars","event-custom","timers","moodle-editor_atto-menu"]},"moodle-editor_atto-menu":{"requires":["moodle-core-notification-dialogue","node","event","event-custom"]},"moodle-editor_atto-rangy":{"requires":[]},"moodle-report_eventlist-eventfilter":{"requires":["base","event","node","node-event-delegate","datatable","autocomplete","autocomplete-filters"]},"moodle-report_loglive-fetchlogs":{"requires":["base","event","node","io","node-event-delegate"]},"moodle-gradereport_history-userselector":{"requires":["escape","event-delegate","event-key","handlebars","io-base","json-parse","moodle-core-notification-dialogue"]},"moodle-qbank_editquestion-chooser":{"requires":["moodle-core-chooserdialogue"]},"moodle-tool_capability-search":{"requires":["base","node"]},"moodle-tool_lp-dragdrop-reorder":{"requires":["moodle-core-dragdrop"]},"moodle-tool_monitor-dropdown":{"requires":["base","event","node"]},"moodle-assignfeedback_editpdf-editor":{"requires":["base","event","node","io","graphics","json","event-move","event-resize","transition","querystring-stringify-simple","moodle-core-notification-dialog","moodle-core-notification-alert","moodle-core-notification-warning","moodle-core-notification-exception","moodle-core-notification-ajaxexception"]},"moodle-atto_accessibilitychecker-button":{"requires":["color-base","moodle-editor_atto-plugin"]},"moodle-atto_accessibilityhelper-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_align-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_bold-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_charmap-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_clear-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_collapse-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_emojipicker-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_emoticon-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_equation-button":{"requires":["moodle-editor_atto-plugin","moodle-core-event","io","event-valuechange","tabview","array-extras"]},"moodle-atto_h5p-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_html-beautify":{},"moodle-atto_html-button":{"requires":["promise","moodle-editor_atto-plugin","moodle-atto_html-beautify","moodle-atto_html-codemirror","event-valuechange"]},"moodle-atto_html-codemirror":{"requires":["moodle-atto_html-codemirror-skin"]},"moodle-atto_image-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_indent-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_italic-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_link-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_managefiles-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_managefiles-usedfiles":{"requires":["node","escape"]},"moodle-atto_media-button":{"requires":["moodle-editor_atto-plugin","moodle-form-shortforms"]},"moodle-atto_noautolink-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_orderedlist-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_recordrtc-button":{"requires":["moodle-editor_atto-plugin","moodle-atto_recordrtc-recording"]},"moodle-atto_recordrtc-recording":{"requires":["moodle-atto_recordrtc-button"]},"moodle-atto_rtl-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_strike-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_subscript-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_superscript-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_table-button":{"requires":["moodle-editor_atto-plugin","moodle-editor_atto-menu","event","event-valuechange"]},"moodle-atto_title-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_underline-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_undo-button":{"requires":["moodle-editor_atto-plugin"]},"moodle-atto_unorderedlist-button":{"requires":["moodle-editor_atto-plugin"]}}},"gallery":{"name":"gallery","base":"http:\/\/qubits.localhost.com\/lib\/yuilib\/gallery\/","combine":true,"comboBase":"http:\/\/qubits.localhost.com\/theme\/yui_combo.php?","ext":false,"root":"gallery\/1687514797\/","patterns":{"gallery-":{"group":"gallery"}}}},"modules":{"core_filepicker":{"name":"core_filepicker","fullpath":"http:\/\/qubits.localhost.com\/lib\/javascript.php\/1687514797\/repository\/filepicker.js","requires":["base","node","node-event-simulate","json","async-queue","io-base","io-upload-iframe","io-form","yui2-treeview","panel","cookie","datatable","datatable-sort","resize-plugin","dd-plugin","escape","moodle-core_filepicker","moodle-core-notification-dialogue"]},"core_comment":{"name":"core_comment","fullpath":"http:\/\/qubits.localhost.com\/lib\/javascript.php\/1687514797\/comment\/comment.js","requires":["base","io-base","node","json","yui2-animation","overlay","escape"]},"mathjax":{"name":"mathjax","fullpath":"https:\/\/cdn.jsdelivr.net\/npm\/mathjax@2.7.9\/MathJax.js?delayStartupUntil=configured"}}};
M.yui.loader = {modules: {}};

//]]>
</script>

   
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body  id="page-mod-qubitspage-view" class="format-topics limitedwidth  path-mod path-mod-qubitspage chrome dir-ltr lang-en yui-skin-sam yui3-skin-sam qubits-localhost-com pagelayout-incourse course-16 context-426 cmid-37 cm-type-qubitspage category-7 uses-drawers">
<div class="toast-wrapper mx-auto py-0 fixed-top" role="status" aria-live="polite"></div>
<div id="page-wrapper" class="d-print-block">

    <div>
    <a class="sr-only sr-only-focusable" href="#maincontent">Skip to main content</a>
</div><script src="http://qubits.localhost.com/lib/javascript.php/1687514797/lib/polyfills/polyfill.js"></script>
<script src="http://qubits.localhost.com/theme/yui_combo.php?rollup/3.17.2/yui-moodlesimple-min.js"></script><script src="http://qubits.localhost.com/lib/javascript.php/1687514797/lib/javascript-static.js"></script>
<script>
//<![CDATA[
document.body.className += ' jsenabled';
//]]>
</script>



    <div class="sidebar">
            <div class="logo-details">
                <img src="/theme/qubitsbasic/pix/images/logos/qubits-logo.png" class="main-logo">
                <img src="/theme/qubitsbasic/pix/images/logos/qubits-compact-logo.png" class="compact-logo">
    
                <i class="icon fa fa-arrow-left arrow-left"></i>
    
            </div>
            <div class="hr-line"></div>
        <ul class="nav-links">
            <li class="nav-item d-block d-sm-none">
                        
                        <a href="javascript:void(0);" class="nav-hover">
                            <span class="userpic" id="mprpic">
                                <span class="userinitials size-35">AU</span>
                            </span>
                            <span class="link_name">Admin User</span>
                            <i class="qicon-chevron-down-thin arrow icon"></i>
                        </a>
                        <ul class="sub-menu">
                                   <li> <a href="http://qubits.localhost.com/user/profile.php" class="dropdown-item" role="menuitem" tabindex="-1">
                                            
                                        Profile
                                    </a> </li>
                                   <li> <a href="http://qubits.localhost.com/grade/report/overview/index.php" class="dropdown-item" role="menuitem" tabindex="-1">
                                            
                                        Grades
                                    </a> </li>
                                   <li> <a href="http://qubits.localhost.com/calendar/view.php?view=month" class="dropdown-item" role="menuitem" tabindex="-1">
                                            
                                        Calendar
                                    </a> </li>
                                   <li> <a href="http://qubits.localhost.com/user/files.php" class="dropdown-item" role="menuitem" tabindex="-1">
                                            
                                        Private files
                                    </a> </li>
                                   <li> <a href="http://qubits.localhost.com/reportbuilder/index.php" class="dropdown-item" role="menuitem" tabindex="-1">
                                            
                                        Reports
                                    </a> </li>
                                   <li> <a href="http://qubits.localhost.com/user/preferences.php" class="dropdown-item" role="menuitem" tabindex="-1">
                                            
                                        Preferences
                                    </a> </li>
                                   <li> <a href="http://qubits.localhost.com/course/switchrole.php?id=16&amp;switchrole=-1&amp;returnurl=%2Fmod%2Fqubitspage%2Fview.php%3Fid%3D37" class="dropdown-item" role="menuitem" tabindex="-1">
                                            
                                        Switch role to...
                                    </a> </li>
                                   <li> <a href="http://qubits.localhost.com/login/logout.php?sesskey=V8pq7dnci3" class="dropdown-item" role="menuitem" tabindex="-1">
                                            
                                        Log out
                                    </a> </li>
                        </ul>
                    
            </li>
             <li class="nav-item d-block d-sm-none">

                <a href="/message/output/popup/notifications.php" class="nav-hover">
                    <i class="qicon-notifications icon"></i>
                    <span class="link_name">Notifications</span>
                </a>
            </li>
            <div class="hr-line mb-5 d-block d-sm-none"></div>
            <li class="nav-item">
                <div class="nav-hover">
                    <i class="qicon-my-courses icon"></i>
                    <a href="/my/courses.php" class="link_name">My Courses</a>
                    <i class="qicon-chevron-down-thin arrow icon"></i>
                </div>
                <ul class="sub-menu">
                    <li><a href="http://qubits.localhost.com/course/view.php?id=16">Build a Social Network from Scratch: JavaScript PHP + MySQL</a></li>
                </ul>
            </li>

            <li class="nav-item">

                <a href="/my" class="nav-hover">
                    <span class="qicon-dashboard icon"></span>
                    <span class="link_name">Dashboard</span>
                </a>
            </li>

            <li class="nav-item">
                <a href="#">
                    <span class="qicon-assessment icon"></span>
                    <span class="link_name">Assesments</span>
                </a>
            </li>
			
			<li class="nav-item">
                <a href="/sitebuilder/">
                    <span class="qicon-assessment icon"></span>
                    <span class="link_name">Site Builder</span>
                </a>
            </li>
        </ul>
    </div>
    
    <div class="sidebar-overlay"></div>
    
    
    
    <nav class="navbar messageicon fixed-top navbar-light bg-white navbar-expand"  aria-label="Site navigation" style="z-index:auto;">
    
       <div class="pagetitle-left-alignment">
        <i class="qicon-menu  icon"></i>
          <nav aria-label="breadcrumb">
    <ol class="breadcrumb bg-none">
            <li class="breadcrumb-item"><a href="/my/courses.php" class="bc-items">My Courses</a></li>
            <li class="breadcrumb-item bc-items" aria-current="page">
            <a href="/course/view.php?id=16" class="bc-items">
            Build a Social Network from Scratch: JavaScript PHP + MySQL
            </a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Chapter1</li>
    </ol>
</nav>
        </div>
    
        <button class="navbar-toggler  aabtn d-block d-md-none px-1 my-1 border-0 d-none" data-toggler="drawers" data-action="toggle" data-target="theme_boost-drawers-primary">
            <span class="navbar-toggler-icon d-none"></span>
            <span class="sr-only">Side panel</span>
        </button>
    
        <ul class="navbar-nav d-none d-md-flex my-1 px-1">
            <!-- page_heading_menu -->
            
        </ul>
    
        <div id="usernavigation" class="navbar-nav ml-auto">
            <div class="popover-region collapsed popover-region-notifications"
    id="nav-notification-popover-container" data-userid="2"
    data-region="popover-region">
    <div class="popover-region-toggle nav-link icon-no-margin"
        data-region="popover-region-toggle"
        role="button"
        aria-controls="popover-region-container-64956ec3d535564956ec2487bb80"
        aria-haspopup="true"
        aria-label=" Show notification window with no new notifications   "
        tabindex="0">
                <i class="icon fa qicon-notifications fa-fw "  title="Toggle notifications menu" role="img" aria-label="Toggle notifications menu"></i>
        <div
            class="count-container hidden"
            data-region="count-container"
            aria-hidden=true
        >
            0
        </div>

    </div>
    <div 
        id="popover-region-container-64956ec3d535564956ec2487bb80"
        class="popover-region-container"
        data-region="popover-region-container"
        aria-expanded="false"
        aria-hidden="true"
        aria-label="Notification window"
        role="region">
        <div class="popover-region-header-container">
            <h3 class="popover-region-header-text" data-region="popover-region-header-text">Notifications</h3>
            <div class="popover-region-header-actions" data-region="popover-region-header-actions">        <a class="mark-all-read-button"
           href="#"
           title="Mark all as read"
           data-action="mark-all-read"
           role="button"
           aria-label="Mark all as read">
            <span class="normal-icon"><i class="icon fa fa-check fa-fw " aria-hidden="true"  ></i></span>
            <span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
        </a>
            <a href="http://qubits.localhost.com/message/notificationpreferences.php"
               title="Notification preferences"
               aria-label="Notification preferences">
                <i class="icon fa fa-cog fa-fw " aria-hidden="true"  ></i></a>
</div>
        </div>
        <div class="popover-region-content-container" data-region="popover-region-content-container">
            <div class="popover-region-content" data-region="popover-region-content">
                        <div class="all-notifications"
            data-region="all-notifications"
            role="log"
            aria-busy="false"
            aria-atomic="false"
            aria-relevant="additions"></div>
        <div class="empty-message" tabindex="0" data-region="empty-message">You have no notifications</div>

            </div>
            <span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
        </div>
                <a class="see-all-link"
                    href="http://qubits.localhost.com/message/output/popup/notifications.php">
                    <div class="popover-region-footer-container">
                        <div class="popover-region-seeall-text">See all</div>
                    </div>
                </a>
    </div>
</div><div class="popover-region collapsed" data-region="popover-region-messages">
    <a id="message-drawer-toggle-64956ec3dcd0e64956ec2487bb81" class="nav-link popover-region-toggle position-relative icon-no-margin" href="#"
            role="button">
        <i class="icon fa fa-comment-o fa-fw "  title="Toggle messaging drawer" role="img" aria-label="Toggle messaging drawer"></i>
        <div
            class="count-container hidden"
            data-region="count-container"
        >
            <span aria-hidden="true">0</span>
            <span class="sr-only">There are 0 unread conversations</span>
        </div>
    </a>
    <span class="sr-only sr-only-focusable" data-region="jumpto" tabindex="-1"></span></div>
            <div class="d-flex align-items-stretch usermenu-container" data-region="usermenu">
                    <div class="usermenu">
                            <div class="dropdown show">
                                <a href="#" role="button" id="user-menu-toggle" data-toggle="dropdown" aria-label="User menu"
                                   aria-haspopup="true" aria-controls="user-action-menu" class="btn dropdown-toggle">
                                    <span class="userbutton">
                                        <span class="avatars">
                                                <span class="avatar current">
                                                    <span class="userinitials size-35">AU</span>
                                                </span>
                                        	<span>Admin User</span>
                                        </span>
                                    </span>
                                </a>
                                <div id="user-action-menu" class="dropdown-menu dropdown-menu-right">
                                    <div id="usermenu-carousel" class="carousel slide" data-touch="false" data-interval="false" data-keyboard="false">
                                        <div class="carousel-inner">
                                            <div id="carousel-item-main" class="carousel-item active" role="menu" tabindex="-1" aria-label="User">
                                                        <a href="http://qubits.localhost.com/user/profile.php" class="dropdown-item" role="menuitem" tabindex="-1">
                                                                
                                                            Profile
                                                        </a>
                                                    
                                                        <a href="http://qubits.localhost.com/grade/report/overview/index.php" class="dropdown-item" role="menuitem" tabindex="-1">
                                                                
                                                            Grades
                                                        </a>
                                                    
                                                        <a href="http://qubits.localhost.com/calendar/view.php?view=month" class="dropdown-item" role="menuitem" tabindex="-1">
                                                                
                                                            Calendar
                                                        </a>
                                                    
                                                        <a href="http://qubits.localhost.com/user/files.php" class="dropdown-item" role="menuitem" tabindex="-1">
                                                                
                                                            Private files
                                                        </a>
                                                    
                                                        <a href="http://qubits.localhost.com/reportbuilder/index.php" class="dropdown-item" role="menuitem" tabindex="-1">
                                                                
                                                            Reports
                                                        </a>
                                                    
                                                    <div class="dropdown-divider"></div>
                                                        <a href="http://qubits.localhost.com/user/preferences.php" class="dropdown-item" role="menuitem" tabindex="-1">
                                                                
                                                            Preferences
                                                        </a>
                                                    
                                                        <a href="http://qubits.localhost.com/course/switchrole.php?id=16&amp;switchrole=-1&amp;returnurl=%2Fmod%2Fqubitspage%2Fview.php%3Fid%3D37" class="dropdown-item" role="menuitem" tabindex="-1">
                                                                
                                                            Switch role to...
                                                        </a>
                                                    <div class="dropdown-divider"></div>
                                                        <a href="http://qubits.localhost.com/login/logout.php?sesskey=V8pq7dnci3" class="dropdown-item" role="menuitem" tabindex="-1">
                                                                
                                                            Log out
                                                        </a>
                                                    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
            </div>
            <div class="divider border-left h-75 align-self-center ml-1 mr-3"></div>
<form action="http://qubits.localhost.com/editmode.php" method="post" class="d-flex align-items-center editmode-switch-form">
    <div class="input-group">
        <label class="mr-2 mb-0 " for="64956ec3ed00564956ec2487bb82-editingswitch">
            Edit mode
        </label>
        <div class="custom-control custom-switch">
            <input type="checkbox" name="setmode" class="custom-control-input" id="64956ec3ed00564956ec2487bb82-editingswitch" data-context="426" data-pageurl="http://qubits.localhost.com/mod/qubitspage/view.php?id=37">
            <span class="custom-control-label">&nbsp;</span>
        </div>
    </div>
    <input type="hidden" name="sesskey" value="V8pq7dnci3">
    <input type="hidden" name="pageurl" value="http://qubits.localhost.com/mod/qubitspage/view.php?id=37">
    <input type="hidden" name="context" value="426">
    <noscript>
        <input type="submit" value="Set mode">
    </noscript>
</form>
        </div>
    </nav>
    

<div  class="drawer drawer-left drawer-primary d-print-none not-initialized" data-region="fixed-drawer" id="theme_boost-drawers-primary" data-preference="" data-state="show-drawer-primary" data-forceopen="0" data-close-on-resize="1">
    <div class="drawerheader">
        <button
            class="btn drawertoggle icon-no-margin hidden"
            data-toggler="drawers"
            data-action="closedrawer"
            data-target="theme_boost-drawers-primary"
            data-toggle="tooltip"
            data-placement="right"
            title="Close drawer"
        >
            <i class="icon fa fa-times fa-fw " aria-hidden="true"  ></i>
        </button>
    </div>
    <div class="drawercontent drag-container" data-usertour="scroller">
                <div class="list-group">
                <a href="http://qubits.localhost.com/?redirect=0" class="list-group-item list-group-item-action  " >
                    Home
                </a>
                <a href="http://qubits.localhost.com/my/" class="list-group-item list-group-item-action  " >
                    Dashboard
                </a>
                <a href="http://qubits.localhost.com/my/courses.php" class="list-group-item list-group-item-action  " >
                    My courses
                </a>
                <a href="http://qubits.localhost.com/admin/search.php" class="list-group-item list-group-item-action  " >
                    Site administration
                </a>
                <a id="drop-down-1" href="#" class="list-group-item list-group-item-action icons-collapse-expand collapsed d-flex" data-toggle="collapse" data-target="#drop-down-menu-1" aria-expanded="false" aria-controls="drop-down-menu-1">
                    Courses
                    <span class="ml-auto expanded-icon icon-no-margin mx-2">
                        <i class="icon fa fa-caret-down fa-fw " aria-hidden="true"  ></i>
                        <span class="sr-only">
                            Collapse
                        </span>
                    </span>
                    <span class="ml-auto collapsed-icon icon-no-margin mx-2">
                        <i class="icon fa fa-caret-right fa-fw " aria-hidden="true"  ></i>
                        <span class="sr-only">
                            Expand
                        </span>
                    </span>
                </a>
                <div class="collapse list-group-item p-0 border-0" role="menu" id="drop-down-menu-1" aria-labelledby="drop-down-1">
                             <a href="http://qubits.localhost.com/course/" class="pl-5 bg-light list-group-item list-group-item-action">All courses</a>
                             <a href="http://qubits.localhost.com/course/view.php?id=16" class="pl-5 bg-light list-group-item list-group-item-action">Executable Books</a>
                </div>
        </div>

    </div>
</div>
        <div  class="drawer drawer-left  d-print-none not-initialized" data-region="fixed-drawer" id="theme_boost-drawers-courseindex" data-preference="drawer-open-index" data-state="show-drawer-left" data-forceopen="0" data-close-on-resize="0">
    <div class="drawerheader">
        <button
            class="btn drawertoggle icon-no-margin hidden"
            data-toggler="drawers"
            data-action="closedrawer"
            data-target="theme_boost-drawers-courseindex"
            data-toggle="tooltip"
            data-placement="right"
            title="Close course index"
        >
            <i class="icon fa fa-times fa-fw " aria-hidden="true"  ></i>
        </button>
    </div>
    <div class="drawercontent drag-container" data-usertour="scroller">
                        <nav id="courseindex" class="courseindex">
    <div id="courseindex-content">
        <div data-region="loading-placeholder-content" aria-hidden="true" id="64956ec3875da64956ec2487bb78-course-index-placeholder">
            <ul class="media-list">
                <li class="media">
                    <div class="media-body col-md-6 p-0 d-flex align-items-center">
                        <div class="bg-pulse-grey rounded-circle mr-2"></div>
                        <div class="bg-pulse-grey w-100"></div>
                    </div>
                </li>
                <li class="media">
                    <div class="media-body col-md-6 p-0 d-flex align-items-center">
                        <div class="bg-pulse-grey rounded-circle mr-2"></div>
                        <div class="bg-pulse-grey w-100"></div>
                    </div>
                </li>
                <li class="media">
                    <div class="media-body col-md-6 p-0 d-flex align-items-center">
                        <div class="bg-pulse-grey rounded-circle mr-2"></div>
                        <div class="bg-pulse-grey w-100"></div>
                    </div>
                </li>
                <li class="media">
                    <div class="media-body col-md-6 p-0 d-flex align-items-center">
                        <div class="bg-pulse-grey rounded-circle mr-2"></div>
                        <div class="bg-pulse-grey w-100"></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</nav>

    </div>
</div>
        <div  class="drawer drawer-right d-print-none not-initialized" data-region="fixed-drawer" id="theme_boost-drawers-blocks" data-preference="drawer-open-block" data-state="show-drawer-right" data-forceopen="" data-close-on-resize="1">
    <div class="drawerheader">
        <button
            class="btn drawertoggle icon-no-margin hidden"
            data-toggler="drawers"
            data-action="closedrawer"
            data-target="theme_boost-drawers-blocks"
            data-toggle="tooltip"
            data-placement="left"
            title="Close block drawer"
        >
            <i class="icon fa fa-times fa-fw " aria-hidden="true"  ></i>
        </button>
    </div>
    <div class="drawercontent drag-container" data-usertour="scroller">
                        <section class="d-print-none" aria-label="Blocks">
                    
                    <aside id="block-region-side-pre" class="block-region" data-blockregion="side-pre" data-droptarget="1"><a href="#sb-1" class="sr-only sr-only-focusable">Skip Navigation</a>

<section id="inst9"
     class=" block_navigation block  card mb-3"
     role="navigation"
     data-block="navigation"
     data-instance-id="9"
          aria-labelledby="instance-9-header"
     >

    <div class="card-body p-3">

            <h5 id="instance-9-header" class="card-title d-inline">Navigation</h5>


        <div class="card-text content mt-3">
            <ul class="block_tree list" role="tree" data-ajax-loader="block_navigation/nav_loader"><li class="type_unknown depth_1 contains_branch" role="treeitem" aria-expanded="true" aria-owns="random64956ec2487bb2_group" data-collapsible="false" aria-labelledby="random64956ec2487bb1_label_1_1"><p class="tree_item branch navigation_node"><a tabindex="-1" id="random64956ec2487bb1_label_1_1" href="http://qubits.localhost.com/my/">Dashboard</a></p><ul id="random64956ec2487bb2_group" role="group"><li class="type_setting depth_2 item_with_icon" role="treeitem" aria-labelledby="random64956ec2487bb3_label_2_2"><p class="tree_item hasicon"><a tabindex="-1" id="random64956ec2487bb3_label_2_2" href="http://qubits.localhost.com/?redirect=0"><i class="icon fa fa-home fa-fw navicon" aria-hidden="true"  ></i><span class="item-content-wrap">Site home</span></a></p></li><li class="type_course depth_2 contains_branch" role="treeitem" aria-expanded="false" aria-owns="random64956ec2487bb5_group" aria-labelledby="random64956ec2487bb3_label_2_3"><p class="tree_item branch"><span tabindex="-1" id="random64956ec2487bb3_label_2_3" title="Qubits">Site pages</span></p><ul id="random64956ec2487bb5_group" role="group" aria-hidden="true"><li class="type_custom depth_3 item_with_icon" role="treeitem" aria-labelledby="random64956ec2487bb6_label_3_5"><p class="tree_item hasicon"><a tabindex="-1" id="random64956ec2487bb6_label_3_5" href="http://qubits.localhost.com/my/courses.php"><i class="icon fa fa-fw fa-fw navicon" aria-hidden="true"  ></i><span class="item-content-wrap">My courses</span></a></p></li><li class="type_custom depth_3 item_with_icon" role="treeitem" aria-labelledby="random64956ec2487bb6_label_3_6"><p class="tree_item hasicon"><a tabindex="-1" id="random64956ec2487bb6_label_3_6" href="http://qubits.localhost.com/user/index.php?id=1"><i class="icon fa fa-fw fa-fw navicon" aria-hidden="true"  ></i><span class="item-content-wrap">Participants</span></a></p></li><li class="type_unknown depth_3 item_with_icon" role="treeitem" aria-labelledby="random64956ec2487bb6_label_3_7"><p class="tree_item hasicon"><a tabindex="-1" id="random64956ec2487bb6_label_3_7" href="http://qubits.localhost.com/blog/index.php"><i class="icon fa fa-fw fa-fw navicon" aria-hidden="true"  ></i><span class="item-content-wrap">Site blogs</span></a></p></li><li class="type_custom depth_3 item_with_icon" role="treeitem" aria-labelledby="random64956ec2487bb6_label_3_8"><p class="tree_item hasicon"><a tabindex="-1" id="random64956ec2487bb6_label_3_8" href="http://qubits.localhost.com/badges/view.php?type=1"><i class="icon fa fa-fw fa-fw navicon" aria-hidden="true"  ></i><span class="item-content-wrap">Site badges</span></a></p></li><li class="type_setting depth_3 item_with_icon" role="treeitem" aria-labelledby="random64956ec2487bb6_label_3_9"><p class="tree_item hasicon"><a tabindex="-1" id="random64956ec2487bb6_label_3_9" href="http://qubits.localhost.com/notes/index.php?filtertype=course&amp;filterselect=0"><i class="icon fa fa-fw fa-fw navicon" aria-hidden="true"  ></i><span class="item-content-wrap">Notes</span></a></p></li><li class="type_setting depth_3 item_with_icon" role="treeitem" aria-labelledby="random64956ec2487bb6_label_3_10"><p class="tree_item hasicon"><a tabindex="-1" id="random64956ec2487bb6_label_3_10" href="http://qubits.localhost.com/tag/search.php"><i class="icon fa fa-fw fa-fw navicon" aria-hidden="true"  ></i><span class="item-content-wrap">Tags</span></a></p></li><li class="type_custom depth_3 item_with_icon" role="treeitem" aria-labelledby="random64956ec2487bb6_label_3_12"><p class="tree_item hasicon"><a tabindex="-1" id="random64956ec2487bb6_label_3_12" href="http://qubits.localhost.com/contentbank/index.php?contextid=66"><i class="icon fa fa-paint-brush fa-fw navicon" aria-hidden="true"  ></i><span class="item-content-wrap">Content bank</span></a></p></li></ul></li><li class="type_system depth_2 contains_branch" role="treeitem" aria-expanded="true" aria-owns="random64956ec2487bb14_group" aria-labelledby="random64956ec2487bb3_label_2_13"><p class="tree_item branch"><a tabindex="-1" id="random64956ec2487bb3_label_2_13" href="http://qubits.localhost.com/my/courses.php">My courses</a></p><ul id="random64956ec2487bb14_group" role="group"><li class="type_course depth_3 contains_branch" role="treeitem" aria-expanded="true" aria-owns="random64956ec2487bb16_group" aria-labelledby="random64956ec2487bb15_label_3_14"><p class="tree_item branch canexpand"><a tabindex="-1" id="random64956ec2487bb15_label_3_14" title="Build a Social Network from Scratch: JavaScript PHP + MySQL" href="http://qubits.localhost.com/course/view.php?id=16">make-a-social-media-website</a></p><ul id="random64956ec2487bb16_group" role="group"><li class="type_container depth_4 contains_branch" role="treeitem" aria-expanded="false" aria-owns="random64956ec2487bb18_group" aria-labelledby="random64956ec2487bb17_label_4_15"><p class="tree_item branch"><a tabindex="-1" id="random64956ec2487bb17_label_4_15" href="http://qubits.localhost.com/user/index.php?id=16">Participants</a></p><ul id="random64956ec2487bb18_group" role="group" aria-hidden="true"><li class="type_setting depth_5 item_with_icon" role="treeitem" aria-labelledby="random64956ec2487bb19_label_5_16"><p class="tree_item hasicon"><a tabindex="-1" id="random64956ec2487bb19_label_5_16" href="http://qubits.localhost.com/blog/index.php?courseid=16"><i class="icon fa fa-fw fa-fw navicon" aria-hidden="true"  ></i><span class="item-content-wrap">Course blogs</span></a></p></li><li class="type_setting depth_5 item_with_icon" role="treeitem" aria-labelledby="random64956ec2487bb19_label_5_17"><p class="tree_item hasicon"><a tabindex="-1" id="random64956ec2487bb19_label_5_17" href="http://qubits.localhost.com/notes/index.php?filtertype=course&amp;filterselect=16"><i class="icon fa fa-fw fa-fw navicon" aria-hidden="true"  ></i><span class="item-content-wrap">Notes</span></a></p></li><li class="type_user depth_5 item_with_icon" role="treeitem" aria-labelledby="random64956ec2487bb19_label_5_18"><p class="tree_item hasicon"><a tabindex="-1" id="random64956ec2487bb19_label_5_18" href="http://qubits.localhost.com/user/view.php?id=2&amp;course=16"><i class="icon fa fa-fw fa-fw navicon" aria-hidden="true"  ></i><span class="item-content-wrap">Admin User</span></a></p></li></ul></li><li class="type_setting depth_4 item_with_icon" role="treeitem" aria-labelledby="random64956ec2487bb17_label_4_19"><p class="tree_item hasicon"><a tabindex="-1" id="random64956ec2487bb17_label_4_19" href="http://qubits.localhost.com/badges/view.php?type=2&amp;id=16"><i class="icon fa fa-shield fa-fw navicon"  title="Badges" role="img" aria-label="Badges"></i><span class="item-content-wrap">Badges</span></a></p></li><li class="type_setting depth_4 item_with_icon" role="treeitem" aria-labelledby="random64956ec2487bb17_label_4_20"><p class="tree_item hasicon"><a tabindex="-1" id="random64956ec2487bb17_label_4_20" href="http://qubits.localhost.com/admin/tool/lp/coursecompetencies.php?courseid=16"><i class="icon fa fa-check-square-o fa-fw navicon" aria-hidden="true"  ></i><span class="item-content-wrap">Competencies</span></a></p></li><li class="type_setting depth_4 item_with_icon" role="treeitem" aria-labelledby="random64956ec2487bb17_label_4_21"><p class="tree_item hasicon"><a tabindex="-1" id="random64956ec2487bb17_label_4_21" href="http://qubits.localhost.com/grade/report/index.php?id=16"><i class="icon fa fa-table fa-fw navicon" aria-hidden="true"  ></i><span class="item-content-wrap">Grades</span></a></p></li><li class="type_structure depth_4 contains_branch" role="treeitem" aria-expanded="false" data-requires-ajax="true" data-loaded="false" data-node-id="expandable_branch_30_71" data-node-key="71" data-node-type="30" aria-labelledby="random64956ec2487bb17_label_4_22"><p class="tree_item branch" id="expandable_branch_30_71"><a tabindex="-1" id="random64956ec2487bb17_label_4_22" href="http://qubits.localhost.com/course/view.php?id=16#section-0">General</a></p></li><li class="type_structure depth_4 contains_branch" role="treeitem" aria-expanded="true" aria-owns="random64956ec2487bb26_group" aria-labelledby="random64956ec2487bb17_label_4_23"><p class="tree_item branch"><a tabindex="-1" id="random64956ec2487bb17_label_4_23" href="http://qubits.localhost.com/course/view.php?id=16#section-1">Topic 1</a></p><ul id="random64956ec2487bb26_group" role="group"><li class="type_activity depth_5 item_with_icon current_branch" role="treeitem" aria-labelledby="random64956ec2487bb27_label_5_24"><p class="tree_item hasicon active_tree_node"><a tabindex="-1" id="random64956ec2487bb27_label_5_24" title="Qubits Page" href="http://qubits.localhost.com/mod/qubitspage/view.php?id=37"><img class="icon navicon" alt="Qubits Page" title="Qubits Page" src="http://qubits.localhost.com/theme/image.php/qubitsbasic/qubitspage/1687514797/monologo" /><span class="item-content-wrap">Chapter1</span></a></p></li><li class="type_activity depth_5 item_with_icon" role="treeitem" aria-labelledby="random64956ec2487bb27_label_5_25"><p class="tree_item hasicon"><a tabindex="-1" id="random64956ec2487bb27_label_5_25" title="Qubits Page" href="http://qubits.localhost.com/mod/qubitspage/view.php?id=38"><img class="icon navicon" alt="Qubits Page" title="Qubits Page" src="http://qubits.localhost.com/theme/image.php/qubitsbasic/qubitspage/1687514797/monologo" /><span class="item-content-wrap">Chapter2</span></a></p></li><li class="type_activity depth_5 item_with_icon" role="treeitem" aria-labelledby="random64956ec2487bb27_label_5_26"><p class="tree_item hasicon"><a tabindex="-1" id="random64956ec2487bb27_label_5_26" title="Qubits Page" href="http://qubits.localhost.com/mod/qubitspage/view.php?id=39"><img class="icon navicon" alt="Qubits Page" title="Qubits Page" src="http://qubits.localhost.com/theme/image.php/qubitsbasic/qubitspage/1687514797/monologo" /><span class="item-content-wrap">Chapter3</span></a></p></li><li class="type_activity depth_5 item_with_icon" role="treeitem" aria-labelledby="random64956ec2487bb27_label_5_27"><p class="tree_item hasicon"><a tabindex="-1" id="random64956ec2487bb27_label_5_27" title="Page" href="http://qubits.localhost.com/mod/page/view.php?id=40"><img class="icon navicon" alt="Page" title="Page" src="http://qubits.localhost.com/theme/image.php/qubitsbasic/page/1687514797/monologo" /><span class="item-content-wrap">Test Page 1</span></a></p></li></ul></li><li class="type_structure depth_4 contains_branch" role="treeitem" aria-expanded="false" data-requires-ajax="true" data-loaded="false" data-node-id="expandable_branch_30_73" data-node-key="73" data-node-type="30" aria-labelledby="random64956ec2487bb17_label_4_28"><p class="tree_item branch" id="expandable_branch_30_73"><a tabindex="-1" id="random64956ec2487bb17_label_4_28" href="http://qubits.localhost.com/course/view.php?id=16#section-2">Topic 2</a></p></li><li class="type_structure depth_4 contains_branch" role="treeitem" aria-expanded="false" data-requires-ajax="true" data-loaded="false" data-node-id="expandable_branch_30_74" data-node-key="74" data-node-type="30" aria-labelledby="random64956ec2487bb17_label_4_29"><p class="tree_item branch" id="expandable_branch_30_74"><a tabindex="-1" id="random64956ec2487bb17_label_4_29" href="http://qubits.localhost.com/course/view.php?id=16#section-3">Topic 3</a></p></li><li class="type_structure depth_4 contains_branch" role="treeitem" aria-expanded="false" data-requires-ajax="true" data-loaded="false" data-node-id="expandable_branch_30_75" data-node-key="75" data-node-type="30" aria-labelledby="random64956ec2487bb17_label_4_30"><p class="tree_item branch" id="expandable_branch_30_75"><a tabindex="-1" id="random64956ec2487bb17_label_4_30" href="http://qubits.localhost.com/course/view.php?id=16#section-4">Topic 4</a></p></li></ul></li></ul></li></ul></li></ul>
            <div class="footer"></div>
            
        </div>

    </div>

</section>

  <span id="sb-1"></span><a href="#sb-2" class="sr-only sr-only-focusable">Skip Administration</a>

<section id="inst10"
     class=" block_settings block  card mb-3"
     role="navigation"
     data-block="settings"
     data-instance-id="10"
          aria-labelledby="instance-10-header"
     >

    <div class="card-body p-3">

            <h5 id="instance-10-header" class="card-title d-inline">Administration</h5>


        <div class="card-text content mt-3">
            <div id="settingsnav" class="box py-3 block_tree_box"><ul class="block_tree list" role="tree" data-ajax-loader="block_navigation/site_admin_loader"><li class="type_setting depth_1 contains_branch" tabindex="-1" role="treeitem" aria-expanded="true" aria-owns="random64956ec2487bb32_group"><p class="tree_item root_node tree_item branch"><span tabindex="0">Qubits Page module administration</span></p><ul id="random64956ec2487bb32_group" role="group"><li class="type_setting depth_2 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/course/modedit.php?update=37&amp;return=1"><i class="icon fa fa-cog fa-fw navicon" aria-hidden="true"  ></i>Settings</a></p></li>
<li class="type_setting depth_2 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/admin/roles/assign.php?contextid=426"><i class="icon fa fa-user-md fa-fw navicon" aria-hidden="true"  ></i>Locally assigned roles</a></p></li>
<li class="type_setting depth_2 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/admin/roles/permissions.php?contextid=426"><i class="icon fa fa-pencil-square-o fa-fw navicon" aria-hidden="true"  ></i>Permissions</a></p></li>
<li class="type_setting depth_2 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/admin/roles/check.php?contextid=426"><i class="icon fa fa-unlock-alt fa-fw navicon" aria-hidden="true"  ></i>Check permissions</a></p></li>
<li class="type_setting depth_2 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/filter/manage.php?contextid=426"><i class="icon fa fa-filter fa-fw navicon" aria-hidden="true"  ></i>Filters</a></p></li>
<li class="type_setting depth_2 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/report/competency/index.php?id=16&amp;mod=37"><i class="icon fa fa-check-square-o fa-fw navicon" aria-hidden="true"  ></i>Competency breakdown</a></p></li>
<li class="type_setting depth_2 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/report/log/index.php?chooselog=1&amp;id=16&amp;modid=37"><i class="icon fa fa-area-chart fa-fw navicon" aria-hidden="true"  ></i>Logs</a></p></li>
<li class="type_setting depth_2 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/backup/backup.php?id=16&amp;cm=37"><i class="icon fa fa-file-zip-o fa-fw navicon" aria-hidden="true"  ></i>Backup</a></p></li>
<li class="type_setting depth_2 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/backup/restorefile.php?contextid=426"><i class="icon fa fa-level-up fa-fw navicon" aria-hidden="true"  ></i>Restore</a></p></li></ul></li>
<li class="type_course depth_1 contains_branch" tabindex="-1" role="treeitem" aria-expanded="false" aria-owns="random64956ec2487bb42_group"><hr /><p class="tree_item root_node tree_item branch"><span tabindex="0">Course administration</span></p><ul id="random64956ec2487bb42_group" role="group" aria-hidden="true"><li class="type_setting depth_2 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/course/edit.php?id=16"><i class="icon fa fa-cog fa-fw navicon" aria-hidden="true"  ></i>Settings</a></p></li>
<li class="type_setting depth_2 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/course/completion.php?id=16"><i class="icon fa fa-cog fa-fw navicon" aria-hidden="true"  ></i>Course completion</a></p></li>
<li class="type_container depth_2 contains_branch" tabindex="-1" role="treeitem" aria-expanded="false" aria-owns="random64956ec2487bb45_group"><p class="tree_item tree_item branch"><span tabindex="0">Users</span></p><ul id="random64956ec2487bb45_group" role="group" aria-hidden="true"><li class="type_setting depth_3 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/user/index.php?id=16"><i class="icon fa fa-user-plus fa-fw navicon" aria-hidden="true"  ></i>Enrolled users</a></p></li>
<li class="type_setting depth_3 contains_branch" tabindex="-1" role="treeitem" aria-expanded="false" aria-owns="random64956ec2487bb47_group"><p class="tree_item tree_item branch"><a href="http://qubits.localhost.com/enrol/instances.php?id=16">Enrolment methods</a></p><ul id="random64956ec2487bb47_group" role="group" aria-hidden="true"><li class="type_setting depth_4 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/enrol/editinstance.php?courseid=16&amp;id=43&amp;type=manual"><i class="icon fa fa-fw fa-fw navicon" aria-hidden="true"  ></i>Manual enrolments</a></p></li></ul></li>
<li class="type_setting depth_3 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/group/index.php?id=16"><i class="icon fa fa-users fa-fw navicon" aria-hidden="true"  ></i>Groups</a></p></li>
<li class="type_setting depth_3 contains_branch" tabindex="-1" role="treeitem" aria-expanded="false" aria-owns="random64956ec2487bb50_group"><p class="tree_item tree_item branch"><a href="http://qubits.localhost.com/admin/roles/permissions.php?contextid=66">Permissions</a></p><ul id="random64956ec2487bb50_group" role="group" aria-hidden="true"><li class="type_setting depth_4 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/admin/roles/check.php?contextid=66"><i class="icon fa fa-unlock-alt fa-fw navicon" aria-hidden="true"  ></i>Check permissions</a></p></li></ul></li>
<li class="type_setting depth_3 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/enrol/otherusers.php?id=16"><i class="icon fa fa-user-plus fa-fw navicon" aria-hidden="true"  ></i>Other users</a></p></li></ul></li>
<li class="type_setting depth_2 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/enrol/manual/unenrolself.php?enrolid=43"><i class="icon fa fa-user fa-fw navicon" aria-hidden="true"  ></i>Unenrol me from make-a-social-media-website</a></p></li>
<li class="type_setting depth_2 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/filter/manage.php?contextid=66"><i class="icon fa fa-filter fa-fw navicon" aria-hidden="true"  ></i>Filters</a></p></li>
<li class="type_container depth_2 contains_branch" tabindex="-1" role="treeitem" aria-expanded="false" aria-owns="random64956ec2487bb55_group"><p class="tree_item tree_item branch"><a href="http://qubits.localhost.com/report/view.php?courseid=16">Reports</a></p><ul id="random64956ec2487bb55_group" role="group" aria-hidden="true"><li class="type_setting depth_3 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/report/competency/index.php?id=16"><i class="icon fa fa-area-chart fa-fw navicon" aria-hidden="true"  ></i>Competency breakdown</a></p></li>
<li class="type_setting depth_3 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/report/log/index.php?id=16"><i class="icon fa fa-area-chart fa-fw navicon" aria-hidden="true"  ></i>Logs</a></p></li>
<li class="type_setting depth_3 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/report/loglive/index.php?id=16"><i class="icon fa fa-area-chart fa-fw navicon" aria-hidden="true"  ></i>Live logs</a></p></li>
<li class="type_setting depth_3 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/report/outline/index.php?id=16"><i class="icon fa fa-area-chart fa-fw navicon" aria-hidden="true"  ></i>Activity report</a></p></li>
<li class="type_setting depth_3 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/report/participation/index.php?id=16"><i class="icon fa fa-area-chart fa-fw navicon" aria-hidden="true"  ></i>Course participation</a></p></li>
<li class="type_setting depth_3 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/report/progress/index.php?course=16"><i class="icon fa fa-area-chart fa-fw navicon" aria-hidden="true"  ></i>Activity completion</a></p></li></ul></li>
<li class="type_setting depth_2 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/grade/edit/tree/index.php?id=16"><i class="icon fa fa-cog fa-fw navicon" aria-hidden="true"  ></i>Gradebook setup</a></p></li>
<li class="type_container depth_2 contains_branch" tabindex="-1" role="treeitem" aria-expanded="false" aria-owns="random64956ec2487bb63_group"><p class="tree_item tree_item branch"><span tabindex="0">Badges</span></p><ul id="random64956ec2487bb63_group" role="group" aria-hidden="true"><li class="type_setting depth_3 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/badges/index.php?type=2&amp;id=16"><i class="icon fa fa-fw fa-fw navicon" aria-hidden="true"  ></i>Manage badges</a></p></li>
<li class="type_setting depth_3 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/badges/newbadge.php?type=2&amp;id=16"><i class="icon fa fa-fw fa-fw navicon" aria-hidden="true"  ></i>Add a new badge</a></p></li></ul></li>
<li class="type_setting depth_2 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/backup/import.php?id=16"><i class="icon fa fa-level-up fa-fw navicon" aria-hidden="true"  ></i>Import</a></p></li>
<li class="type_setting depth_2 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/backup/backup.php?id=16"><i class="icon fa fa-file-zip-o fa-fw navicon" aria-hidden="true"  ></i>Backup</a></p></li>
<li class="type_setting depth_2 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/backup/restorefile.php?contextid=66"><i class="icon fa fa-level-up fa-fw navicon" aria-hidden="true"  ></i>Restore</a></p></li>
<li class="type_setting depth_2 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/backup/copy.php?id=16"><i class="icon fa fa-copy fa-fw navicon" aria-hidden="true"  ></i>Copy course</a></p></li>
<li class="type_setting depth_2 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/course/reset.php?id=16"><i class="icon fa fa-arrow-left fa-fw navicon" aria-hidden="true"  ></i>Reset</a></p></li>
<li class="type_container depth_2 contains_branch" tabindex="-1" role="treeitem" aria-expanded="false" aria-owns="random64956ec2487bb71_group"><p class="tree_item tree_item branch"><a href="http://qubits.localhost.com/question/edit.php?courseid=16">Question bank</a></p><ul id="random64956ec2487bb71_group" role="group" aria-hidden="true"><li class="type_setting depth_3 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/question/edit.php?courseid=16"><i class="icon fa fa-fw fa-fw navicon" aria-hidden="true"  ></i>Questions</a></p></li>
<li class="type_setting depth_3 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/question/bank/managecategories/category.php?courseid=16"><i class="icon fa fa-fw fa-fw navicon" aria-hidden="true"  ></i>Categories</a></p></li>
<li class="type_setting depth_3 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/question/bank/importquestions/import.php?courseid=16"><i class="icon fa fa-fw fa-fw navicon" aria-hidden="true"  ></i>Import</a></p></li>
<li class="type_setting depth_3 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/question/bank/exportquestions/export.php?courseid=16"><i class="icon fa fa-fw fa-fw navicon" aria-hidden="true"  ></i>Export</a></p></li></ul></li>
<li class="type_setting depth_2 item_with_icon" tabindex="-1" role="treeitem"><p class="tree_item hasicon tree_item leaf"><a href="http://qubits.localhost.com/admin/tool/brickfield/index.php?courseid=16"><i class="icon fa fa-area-chart fa-fw navicon" aria-hidden="true"  ></i>Accessibility toolkit</a></p></li></ul></li>
<li class="type_siteadmin depth_1 contains_branch" tabindex="-1" role="treeitem" aria-expanded="false" data-requires-ajax="true" data-loaded="false"><hr /><p class="tree_item root_node tree_item branch" id="expandable_branch_71_siteadministration"><a href="http://qubits.localhost.com/admin/search.php">Site administration</a></p></li></ul></div>
            <div class="footer"><div class="simplesearchform ">
    <form autocomplete="off" action="http://qubits.localhost.com/admin/search.php" method="get" accept-charset="utf-8" class="mform form-inline simplesearchform">
    <div class="input-group">
        <label for="searchinput-64956ec3785db64956ec2487bb77">
            <span class="sr-only">Search in settings</span>
        </label>
        <input type="text"
           id="searchinput-64956ec3785db64956ec2487bb77"
           class="form-control"
           placeholder="Search in settings"
           aria-label="Search in settings"
           name="query"
           data-region="input"
           autocomplete="off"
           value=""
        >
        <div class="input-group-append">
            <button type="submit" class="btn btn-submit  search-icon">
                <i class="icon fa fa-search fa-fw " aria-hidden="true"  ></i>
                <span class="sr-only">Search in settings</span>
            </button>
        </div>

    </div>
    </form>
</div></div>
            
        </div>

    </div>

</section>

  <span id="sb-2"></span></aside>
                </section>

    </div>
</div>
    <div id="page" data-region="mainpage" data-usertour="scroller" class="drawers   drag-container">
        <div id="topofscroll" class="main-inner">
            <div class="drawer-toggles d-flex">
                    <div class="drawer-toggler drawer-left-toggle open-nav d-print-none d-none">
                        <button
                            class="btn icon-no-margin"
                            data-toggler="drawers"
                            data-action="toggle"
                            data-target="theme_boost-drawers-courseindex"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Open course index"
                        >
                            <span class="sr-only">Open course index</span>
                            <i class="icon fa fa-list fa-fw " aria-hidden="true"  ></i>
                        </button>
                    </div>
                    <div class="drawer-toggler drawer-right-toggle ml-auto d-print-none d-none">
                        <button
                            class="btn icon-no-margin"
                            data-toggler="drawers"
                            data-action="toggle"
                            data-target="theme_boost-drawers-blocks"
                            data-toggle="tooltip"
                            data-placement="right"
                            title="Open block drawer"
                        >
                            <span class="sr-only">Open block drawer</span>
                            <span class="dir-rtl-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true"  ></i></span>
                            <span class="dir-ltr-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true"  ></i></span>
                        </button>
                    </div>
            </div>
            <header id="page-header" class="header-maxwidth d-print-none">
    <div class="w-100">
        <div class="d-flex flex-wrap">
            <div id="page-navbar">
                <nav aria-label="Navigation bar">
    <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="http://qubits.localhost.com/course/view.php?id=16#section-1"  title="Build a Social Network from Scratch: JavaScript PHP + MySQL">make-a-social-media-website</a>
                </li>
        
                <li class="breadcrumb-item"><span>Chapter1</span></li>
        </ol>
</nav>
            </div>
            <div class="ml-auto d-flex">
                
            </div>
            <div id="course-header">
                
            </div>
        </div>
        <div class="d-flex align-items-center">
                    <div class="mr-auto">
                        <div class="page-context-header"><div class="page-header-image mr-2"><div class="content activityiconcontainer modicon_qubitspage"><img class="icon activityicon" aria-hidden="true" src="http://qubits.localhost.com/theme/image.php/qubitsbasic/qubitspage/1687514797/monologo" alt="" /></div></div><div class="page-header-headings"><div class="text-muted text-uppercase small line-height-3">Qubits Page</div><h1 class="h2">Chapter1</h1></div></div>
                    </div>
            <div class="header-actions-container ml-auto" data-region="header-actions-container">
            </div>
        </div>
    </div>
</header>
                <div class="secondary-navigation d-print-none">
                    <nav class="moremenu navigation">
                        <ul id="moremenu-64956ec38826a-nav-tabs" role="menubar" class="nav more-nav nav-tabs">
                                        <li data-key="modulepage" class="nav-item" role="none" data-forceintomoremenu="false">
                                                    <a role="menuitem" class="nav-link active active_tree_node "
                                                        href="http://qubits.localhost.com/mod/qubitspage/view.php?id=37"
                                                        aria-current="true"
                                                        
                                                    >
                                                        Qubits Page
                                                    </a>
                                        </li>
                                        <li data-key="modedit" class="nav-item" role="none" data-forceintomoremenu="false">
                                                    <a role="menuitem" class="nav-link  "
                                                        href="http://qubits.localhost.com/course/modedit.php?update=37&amp;return=1"
                                                        
                                                        tabindex="-1"
                                                    >
                                                        Settings
                                                    </a>
                                        </li>
                                        <li data-key="filtermanage" class="nav-item" role="none" data-forceintomoremenu="true">
                                                    <a role="menuitem" class="nav-link  "
                                                        href="http://qubits.localhost.com/filter/manage.php?contextid=426"
                                                        
                                                        tabindex="-1"
                                                    >
                                                        Filters
                                                    </a>
                                        </li>
                                        <li data-key="roleoverride" class="nav-item" role="none" data-forceintomoremenu="true">
                                                    <a role="menuitem" class="nav-link  "
                                                        href="http://qubits.localhost.com/admin/roles/permissions.php?contextid=426"
                                                        
                                                        tabindex="-1"
                                                    >
                                                        Permissions
                                                    </a>
                                        </li>
                                        <li data-key="backup" class="nav-item" role="none" data-forceintomoremenu="true">
                                                    <a role="menuitem" class="nav-link  "
                                                        href="http://qubits.localhost.com/backup/backup.php?id=16&amp;cm=37"
                                                        
                                                        tabindex="-1"
                                                    >
                                                        Backup
                                                    </a>
                                        </li>
                                        <li data-key="restore" class="nav-item" role="none" data-forceintomoremenu="true">
                                                    <a role="menuitem" class="nav-link  "
                                                        href="http://qubits.localhost.com/backup/restorefile.php?contextid=426"
                                                        
                                                        tabindex="-1"
                                                    >
                                                        Restore
                                                    </a>
                                        </li>
                            <li role="none" class="nav-item dropdown dropdownmoremenu d-none" data-region="morebutton">
                                <a class="dropdown-toggle nav-link " href="#" id="moremenu-dropdown-64956ec38826a" role="menuitem" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" tabindex="-1">
                                    More
                                </a>
                                <ul class="dropdown-menu dropdown-menu-left" data-region="moredropdown" aria-labelledby="moremenu-dropdown-64956ec38826a" role="menu">
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            <div id="page-content" class="pb-3 d-print-block">
                <div id="region-main-box">
                    <section id="region-main" aria-label="Content">

                        <span class="notifications" id="user-notifications"></span>
                            <span id="maincontent"></span>
                            <div class="activity-header" data-for="page-activity-header">
                                    <span class="sr-only">Completion requirements</span>
                                    <div data-region="activity-information" data-activityname="Chapter1" class="activity-information">

            <div class="completion-info" data-region="completion-info">
                                <button class="btn btn-outline-secondary btn-sm text-nowrap" data-action="toggle-manual-completion" data-toggletype="manual:mark-done" data-cmid="37" data-activityname="Chapter1" data-withavailability="0" title="Mark Chapter1 as done" aria-label="Mark Chapter1 as done" >
                                    Mark as done
                                </button>
                        
            </div>

</div>
</div>
                        <div role="main"><div id="qubitspage" class="box py-3 generalbox center clearfix"><div class="no-overflow"><p dir="ltr" style="text-align: left;">.</p></div></div>



<link rel="icon" href="http://qubits.localhost.com/mod/qubitspage/qubits-logo.png" sizes="any" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<script src="https://cdn.jsdelivr.net/gh/qubits-platform/sqlite-wasm@master/sqlite3.js" defer=""></script>
<script src="https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js" defer=""></script>
<link rel="preload" href="http://qubits.localhost.com/mod/qubitspage/_next/static/css/8637dc5940b82e6a.css" as="style" />
<link rel="stylesheet" href="http://qubits.localhost.com/mod/qubitspage/_next/static/css/8637dc5940b82e6a.css" data-n-g="" />
<noscript data-n-css=""></noscript>
<script defer="" nomodule="" src="http://qubits.localhost.com/mod/qubitspage/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js"></script>
<script src="http://qubits.localhost.com/mod/qubitspage/_next/static/chunks/webpack-0124a6d1c5800fd9.js" defer=""></script>
<script src="http://qubits.localhost.com/mod/qubitspage/_next/static/chunks/framework-2c79e2a64abdb08b.js" defer=""></script>
<script src="http://qubits.localhost.com/mod/qubitspage/_next/static/chunks/main-164f91e3b1a225f8.js" defer=""></script>
<script src="http://qubits.localhost.com/mod/qubitspage/_next/static/chunks/pages/_app-27065eecd8aeb3ae.js" defer=""></script>
<script src="http://qubits.localhost.com/mod/qubitspage/_next/static/chunks/pages/index-44a994c9ffe51c6c.js" defer=""></script>
<script src="http://qubits.localhost.com/mod/qubitspage/_next/static/r8axIo-woj1gZqT6ZWhcv/_buildManifest.js" defer=""></script>
<script src="http://qubits.localhost.com/mod/qubitspage/_next/static/r8axIo-woj1gZqT6ZWhcv/_ssgManifest.js" defer=""></script>
<script src="http://qubits.localhost.com/mod/qubitspage/_next/static/chunks/8a28b14e.d29918a3616a3ec4.js" defer=""></script>
<script src="http://qubits.localhost.com/mod/qubitspage/_next/static/chunks/792.40b0b06ec78d3a1f.js" defer=""></script>
<script src="http://qubits.localhost.com/mod/qubitspage/_next/static/chunks/938.4d9aae90a278c26c.js" defer=""></script>

<!-- <link rel="icon" href="/qubits-logo.png" sizes="any" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
    integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
<script src="https://cdn.jsdelivr.net/gh/qubits-platform/sqlite-wasm@master/sqlite3.js" defer=""></script>
<script src="https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js" defer=""></script>
<script type="text/javascript" src="http://qubits.localhost.com/mod/qubitspage/js/d3.v2.min.js" defer=""></script>
<script type="text/javascript"
    src="https://cdnjs.cloudflare.com/ajax/libs/jQuery-Validation-Engine/2.6.4/jquery-1.8.2.min.js" defer=""></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/simplemodal/1.4.4/jquery.simplemodal.min.js"
    defer=""></script>
<script type="text/javascript" src="http://qubits.localhost.com/mod/qubitspage/js/jquery.ba-bbq.js" defer=""></script>
<script type="text/javascript" src="http://qubits.localhost.com/mod/qubitspage/js/jquery.jsPlumb-1.3.10-all-min.js" defer=""></script>
<script type="text/javascript" src="http://qubits.localhost.com/mod/qubitspage/js/jquery-ui.min.js" defer=""></script>
<link type="text/css" href="http://qubits.localhost.com/mod/qubitspage/css/jquery-ui.min.css" rel="stylesheet" />
<link type="text/css" href="http://qubits.localhost.com/mod/qubitspage/css/pytutor-basic.css" rel="stylesheet" />
<script type="text/javascript" src="http://qubits.localhost.com/mod/qubitspage/js/pytutor.js" defer=""></script>
<link rel="stylesheet" href="http://qubits.localhost.com/mod/qubitspage/css/pytutor.css" />
<link rel="preload" href="http://qubits.localhost.com/mod/qubitspage/_next/static/css/8637dc5940b82e6a.css" as="style" />
<link rel="stylesheet" href="http://qubits.localhost.com/mod/qubitspage/_next/static/css/8637dc5940b82e6a.css" data-n-g="" />
<noscript data-n-css=""></noscript>
<script defer="" nomodule="" src="http://qubits.localhost.com/mod/qubitspage/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js"></script>
<script src="http://qubits.localhost.com/mod/qubitspage/_next/static/chunks/webpack-b62f17611695669b.js" defer=""></script>
<script src="http://qubits.localhost.com/mod/qubitspage/_next/static/chunks/framework-2c79e2a64abdb08b.js" defer=""></script>
<script src="http://qubits.localhost.com/mod/qubitspage/_next/static/chunks/main-164f91e3b1a225f8.js" defer=""></script>
<script src="http://qubits.localhost.com/mod/qubitspage/_next/static/chunks/pages/_app-56234dec6cff1cfd.js" defer=""></script>
<script src="http://qubits.localhost.com/mod/qubitspage/_next/static/chunks/pages/index-44a994c9ffe51c6c.js" defer=""></script>
<script src="http://qubits.localhost.com/mod/qubitspage/_next/static/chunks/pages/_error-54de1933a164a1ff.js" defer=""></script>
<script src="http://qubits.localhost.com/mod/qubitspage/_next/static/3LkbFP7wCQiq9-kj4Em_i/_buildManifest.js" defer=""></script>
<script src="http://qubits.localhost.com/mod/qubitspage/_next/static/3LkbFP7wCQiq9-kj4Em_i/_ssgManifest.js" defer=""></script>
<script src="http://qubits.localhost.com/mod/qubitspage/_next/static/chunks/8a28b14e.d29918a3616a3ec4.js" defer=""></script>
<script src="http://qubits.localhost.com/mod/qubitspage/_next/static/chunks/25.42ab8018a3117c3f.js" defer=""></script>
<script src="http://qubits.localhost.com/mod/qubitspage/_next/static/chunks/186.70d0e194e7f158a2.js" defer=""></script> -->

<div id="__next"></div>
<script id="__NEXT_DATA__" type="application/json">
    {
        "props": {
            "pageProps": {}
        },
        "page": "/",
        "query": {},
        "buildId": "r8axIo-woj1gZqT6ZWhcv",
        "nextExport": true,
        "autoExport": true,
        "isFallback": false,
        "scriptLoader": []
    }
</script>
<div class="modified">Last modified: Thursday, 18 May 2023, 5:52 AM</div></div>
                        <div class="mt-5 mb-1 activity-navigation container-fluid">
<div class="row">
    <div class="col-md-4">        <div class="float-left">
                <a href="http://qubits.localhost.com/mod/forum/view.php?id=15&forceview=1" id="prev-activity-link" class="btn btn-link" >&#x25C4; Announcements</a>

        </div>
</div>
    <div class="col-md-4">        <div class="mdl-align">
            <div class="urlselect">
    <form method="post" action="http://qubits.localhost.com/course/jumpto.php" class="form-inline" id="url_select_f64956ec2487bb83">
        <input type="hidden" name="sesskey" value="V8pq7dnci3">
            <label for="jump-to-activity" class="sr-only">
                Jump to...
            </label>
        <select  id="jump-to-activity" class="custom-select urlselect" name="jump"
                 >
                    <option value="" selected>Jump to...</option>
                    <option value="/mod/forum/view.php?id=15&amp;forceview=1" >Announcements</option>
                    <option value="/mod/qubitspage/view.php?id=38&amp;forceview=1" >Chapter2</option>
                    <option value="/mod/qubitspage/view.php?id=39&amp;forceview=1" >Chapter3</option>
                    <option value="/mod/page/view.php?id=40&amp;forceview=1" >Test Page 1</option>
        </select>
            <noscript>
                <input type="submit" class="btn btn-secondary ml-1" value="Go">
            </noscript>
    </form>
</div>

        </div>
</div>
    <div class="col-md-4">        <div class="float-right">
                <a href="http://qubits.localhost.com/mod/qubitspage/view.php?id=38&forceview=1" id="next-activity-link" class="btn btn-link" >Chapter2 &#x25BA;</a>

        </div>
</div>
</div>
</div>
                        

                    </section>
                </div>
            </div>
        </div>
        
        <footer id="page-footer" class="footer-popover bg-white">
            <div data-region="footer-container-popover">
                <button class="btn btn-icon bg-secondary icon-no-margin btn-footer-popover" data-action="footer-popover" aria-label="Show footer">
                    <i class="icon fa fa-question fa-fw " aria-hidden="true"  ></i>
                </button>
            </div>
            <div class="footer-content-popover container" data-region="footer-content-popover">
                    <div class="footer-section p-3 border-bottom">
                            <div class="footer-support-link"><a href="https://docs.moodle.org/401/en/mod/qubitspage/view"><i class="icon fa fa-book fa-fw iconhelp icon-pre" aria-hidden="true"  ></i>Help and documentation</a></div>
        
                            <div class="footer-support-link"><a target="_blank" href="https://moodle.com/help/?utm_source=CTA-banner&amp;utm_medium=platform&amp;utm_campaign=name~Moodle4+cat~lms+mp~no"><i class="icon fa fa-life-ring fa-fw fa fa-life-ring" aria-hidden="true"  ></i>Services and support<i class="icon fa fa-external-link fa-fw ml-1"  title="Opens in new window" role="img" aria-label="Opens in new window"></i></a></div>
        
                            <div class="footer-support-link"><a href="http://qubits.localhost.com/user/contactsitesupport.php"><i class="icon fa fa-envelope-o fa-fw " aria-hidden="true"  ></i>Contact site support</a></div>
                    </div>
                <div class="footer-section p-3 border-bottom">
                    <div class="logininfo">
                        <div class="logininfo">You are logged in as <a href="http://qubits.localhost.com/user/profile.php?id=2" title="View profile">Admin User</a> (<a href="http://qubits.localhost.com/login/logout.php?sesskey=V8pq7dnci3">Log out</a>)</div>
                    </div>
                    <div class="tool_usertours-resettourcontainer">
                    </div>
        
                    <div class="tool_dataprivacy"><a href="http://qubits.localhost.com/admin/tool/dataprivacy/summary.php">Data retention summary</a></div>
                    <script>
//<![CDATA[
var require = {
    baseUrl : 'http://qubits.localhost.com/lib/requirejs.php/1687514797/',
    // We only support AMD modules with an explicit define() statement.
    enforceDefine: true,
    skipDataMain: true,
    waitSeconds : 0,

    paths: {
        jquery: 'http://qubits.localhost.com/lib/javascript.php/1687514797/lib/jquery/jquery-3.6.1.min',
        jqueryui: 'http://qubits.localhost.com/lib/javascript.php/1687514797/lib/jquery/ui-1.13.2/jquery-ui.min',
        jqueryprivate: 'http://qubits.localhost.com/lib/javascript.php/1687514797/lib/requirejs/jquery-private'
    },

    // Custom jquery config map.
    map: {
      // '*' means all modules will get 'jqueryprivate'
      // for their 'jquery' dependency.
      '*': { jquery: 'jqueryprivate' },
      // Stub module for 'process'. This is a workaround for a bug in MathJax (see MDL-60458).
      '*': { process: 'core/first' },

      // 'jquery-private' wants the real jQuery module
      // though. If this line was not here, there would
      // be an unresolvable cyclic dependency.
      jqueryprivate: { jquery: 'jquery' }
    }
};

//]]>
</script>
<script src="http://qubits.localhost.com/lib/javascript.php/1687514797/lib/requirejs/require.min.js"></script>
<script>
//<![CDATA[
M.util.js_pending("core/first");
require(['core/first'], function() {
require(['core/prefetch'])
;
require(["media_videojs/loader"], function(loader) {
    loader.setUp('en');
});;
M.util.js_pending('block_navigation/navblock'); require(['block_navigation/navblock'], function(amd) {amd.init("9"); M.util.js_complete('block_navigation/navblock');});;
M.util.js_pending('block_settings/settingsblock'); require(['block_settings/settingsblock'], function(amd) {amd.init("10", "expandable_branch_71_siteadministration"); M.util.js_complete('block_settings/settingsblock');});;
M.util.js_pending('core_courseformat/courseeditor'); require(['core_courseformat/courseeditor'], function(amd) {amd.setViewFormat("16", {"editing":false,"supportscomponents":true,"statekey":"1687514797_1687514819"}); M.util.js_complete('core_courseformat/courseeditor');});;

require(['core_courseformat/local/courseindex/placeholder'], function(component) {
    component.init('64956ec3875da64956ec2487bb78-course-index-placeholder');
});
;

require(['core_courseformat/local/courseindex/drawer'], function(component) {
    component.init('courseindex');
});
;

require(['core_course/manual_completion_toggle'], toggle => {
    toggle.init()
});
;
M.util.js_pending('core_courseformat/local/content/activity_header'); require(['core_courseformat/local/content/activity_header'], function(amd) {amd.init(); M.util.js_complete('core_courseformat/local/content/activity_header');});;

    require(['jquery'], function($) {
        $("#mprpic").find("img").addClass("user-profile").removeClass("userpicture");
    });
;

require(['jquery'], function($){

    $(document).on("mouseenter", ".coursecard", function(){
        $(this).find(".white-circle").addClass("numbercolor");
    }).on("mouseleave", ".coursecard", function(){
        $(this).find(".white-circle").removeClass("numbercolor");
    });

    $(document).on("click", ".arrow", function(){
        $(this).parents(".nav-item").toggleClass("showMenu");
    });

    $(window).on("resize", function (e) {
                checkScreenSize();
            });

            checkScreenSize();

            function checkScreenSize() {
                var newWindowWidth = $(window).width();
                if (newWindowWidth < 578) {
                    $(".fa-arrow-left").click(function () {
                        $(".sidebar").hide();
                        $(".sidebar-overlay").hide();
                        $(".qicon-menu").show();
                    });
                    $(".qicon-menu").click(function () {
                        $(".sidebar").show().css({ "transition": "all 0.5s ease", "transition-delay": "3s" });
                        $(".sidebar-overlay").show();

                    });
                    $(".sidebar-overlay").click(function () {
                        $(".sidebar").hide().css({ "transition": "all 0.5s ease", "transition-delay": "3s" });;
                        $(".sidebar-overlay").hide();
                        $(".qicon-menu").show();
                    });
                    
                    $(".nav-item").hover(function(){
                        $(".white-circle").toggleClass("numbercolor");
                    });
                }
                else {
                    $(".fa-arrow-left").click(function () {
                        $(".sidebar").addClass("close-bars");
                        $(".compact-logo").show();
                        $(".qicon-menu").show();
                        $(".pagetitle-left-alignment").addClass("closebar-left-alignment");
                        $(".main-inner").addClass("leftnav");
                    });
                    $(".qicon-menu").click(function () {
                        $(".sidebar").removeClass("close-bars");
                        $(".compact-logo").hide();
                        $(".qicon-menu").hide();
                        $(".pagetitle-left-alignment").removeClass("closebar-left-alignment");
                         $(".main-inner").removeClass("leftnav");
                    });
                    
                }
            }
});
;

require(['jquery', 'message_popup/notification_popover_controller'], function($, Controller) {
    var container = $('#nav-notification-popover-container');
    var controller = new Controller(container);
    controller.registerEventListeners();
    controller.registerListNavigationEventListeners();
});
;

require(
[
    'jquery',
    'core_message/message_popover'
],
function(
    $,
    Popover
) {
    var toggle = $('#message-drawer-toggle-64956ec3dcd0e64956ec2487bb81');
    Popover.init(toggle);
});
;

    require(['core/usermenu'], function(UserMenu) {
        UserMenu.init();
    });
;

require(['core/edit_switch'], function(editSwitch) {
    editSwitch.init('64956ec3ed00564956ec2487bb82-editingswitch');
});
;

require(['theme_boost/drawers']);
;

require(['theme_boost/drawers']);
;

require(['theme_boost/drawers']);
;

    require(['core/moremenu'], function(moremenu) {
        moremenu(document.querySelector('#moremenu-64956ec38826a-nav-tabs'));
    });
;

        require(['jquery', 'core/custom_interaction_events'], function($, CustomEvents) {
            CustomEvents.define('#jump-to-activity', [CustomEvents.events.accessibleChange]);
            $('#jump-to-activity').on(CustomEvents.events.accessibleChange, function() {
                if (!$(this).val()) {
                    return false;
                }
                $('#url_select_f64956ec2487bb83').submit();
            });
        });
    ;

require(['theme_boost/footer-popover'], function(FooterPopover) {
    FooterPopover.init();
});
;

require(['jquery', 'core_message/message_drawer'], function($, MessageDrawer) {
    var root = $('#message-drawer-64956ec43595764956ec2487bb84');
    MessageDrawer.init(root, '64956ec43595764956ec2487bb84', false);
});
;

M.util.js_pending('theme_boost/loader');
require(['theme_boost/loader', 'theme_boost/drawer'], function(Loader, Drawer) {
    Drawer.init();
    M.util.js_complete('theme_boost/loader');
});
;
M.util.js_pending('core/notification'); require(['core/notification'], function(amd) {amd.init(426, []); M.util.js_complete('core/notification');});;
M.util.js_pending('core/log'); require(['core/log'], function(amd) {amd.setConfig({"level":"warn"}); M.util.js_complete('core/log');});;
M.util.js_pending('core/page_global'); require(['core/page_global'], function(amd) {amd.init(); M.util.js_complete('core/page_global');});;
M.util.js_pending('core/utility'); require(['core/utility'], function(amd) {M.util.js_complete('core/utility');});
    M.util.js_complete("core/first");
});
//]]>
</script>
<script>
//<![CDATA[
M.str = {"moodle":{"lastmodified":"Last modified","name":"Name","error":"Error","info":"Information","yes":"Yes","no":"No","viewallcourses":"View all courses","cancel":"Cancel","confirm":"Confirm","areyousure":"Are you sure?","closebuttontitle":"Close","unknownerror":"Unknown error","file":"File","url":"URL","collapseall":"Collapse all","expandall":"Expand all"},"repository":{"type":"Type","size":"Size","invalidjson":"Invalid JSON string","nofilesattached":"No files attached","filepicker":"File picker","logout":"Logout","nofilesavailable":"No files available","norepositoriesavailable":"Sorry, none of your current repositories can return files in the required format.","fileexistsdialogheader":"File exists","fileexistsdialog_editor":"A file with that name has already been attached to the text you are editing.","fileexistsdialog_filemanager":"A file with that name has already been attached","renameto":"Rename to \"{$a}\"","referencesexist":"There are {$a} links to this file","select":"Select"},"admin":{"confirmdeletecomments":"You are about to delete comments, are you sure?","confirmation":"Confirmation"},"debug":{"debuginfo":"Debug info","line":"Line","stacktrace":"Stack trace"},"langconfig":{"labelsep":": "}};
//]]>
</script>
<script>
//<![CDATA[
(function() {Y.use("moodle-filter_mathjaxloader-loader",function() {M.filter_mathjaxloader.configure({"mathjaxconfig":"\r\nMathJax.Hub.Config({\r\n    config: [\"Accessible.js\", \"Safe.js\"],\r\n    errorSettings: { message: [\"!\"] },\r\n    skipStartupTypeset: true,\r\n    messageStyle: \"none\"\r\n});\r\n","lang":"en"});
});
M.util.help_popups.setup(Y);
 M.util.js_pending('random64956ec2487bb85'); Y.on('domready', function() { M.util.js_complete("init");  M.util.js_complete('random64956ec2487bb85'); });
})();
//]]>
</script>

                </div>
                <div class="footer-section p-3">
                    <div>Powered by <a href="https://moodle.com">Moodle</a></div>
                        <div>
                            Version 4.1.1+ (Build: 20230224)
                        </div>
                </div>
            </div>
        
            <div class="footer-content-debugging footer-dark bg-dark text-light">
                <div class="container-fluid footer-dark-inner">
                    
                </div>
            </div>
        </footer>
    </div>
    <div
    id="drawer-64956ec43595764956ec2487bb84"
    class=" drawer bg-white hidden"
    aria-expanded="false"
    aria-hidden="true"
    data-region="right-hand-drawer"
    role="region"
    tabindex="0"
>
            <div id="message-drawer-64956ec43595764956ec2487bb84" class="message-app" data-region="message-drawer" role="region">
            <div class="closewidget text-right pr-2">
                <a class="text-dark btn-link" data-action="closedrawer" href="#"
                   title="Close" aria-label="Close"
                >
                    <i class="icon fa fa-window-close fa-fw " aria-hidden="true"  ></i>
                </a>
            </div>
            <div class="header-container position-relative" data-region="header-container">
                <div class="hidden border-bottom p-1 px-sm-2" aria-hidden="true" data-region="view-contacts">
                    <div class="d-flex align-items-center">
                        <div class="align-self-stretch">
                            <a class="h-100 d-flex align-items-center mr-2" href="#" data-route-back role="button">
                                <div class="icon-back-in-drawer">
                                    <span class="dir-rtl-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true"  ></i></span>
                                    <span class="dir-ltr-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true"  ></i></span>
                                </div>
                                <div class="icon-back-in-app">
                                    <span class="dir-rtl-hide"><i class="icon fa fa-times fa-fw " aria-hidden="true"  ></i></span>
                                </div>                            </a>
                        </div>
                        <div>
                            Contacts
                        </div>
                        <div class="ml-auto">
                            <a href="#" data-route="view-search" role="button" aria-label="Search">
                                <i class="icon fa fa-search fa-fw " aria-hidden="true"  ></i>
                            </a>
                        </div>
                    </div>
                </div>                
                <div
                    class="hidden bg-white position-relative border-bottom p-1 px-sm-2"
                    aria-hidden="true"
                    data-region="view-conversation"
                >
                    <div class="hidden" data-region="header-content"></div>
                    <div class="hidden" data-region="header-edit-mode">
                        
                        <div class="d-flex p-2 align-items-center">
                            Messages selected:
                            <span class="ml-1" data-region="message-selected-court">1</span>
                            <button type="button" class="ml-auto close" aria-label="Cancel message selection"
                                data-action="cancel-edit-mode">
                                    <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                    <div data-region="header-placeholder">
                        <div class="d-flex">
                            <div
                                class="ml-2 rounded-circle bg-pulse-grey align-self-center"
                                style="height: 38px; width: 38px"
                            >
                            </div>
                            <div class="ml-2 " style="flex: 1">
                                <div
                                    class="mt-1 bg-pulse-grey w-75"
                                    style="height: 16px;"
                                >
                                </div>
                            </div>
                            <div
                                class="ml-2 bg-pulse-grey align-self-center"
                                style="height: 16px; width: 20px"
                            >
                            </div>
                        </div>
                    </div>
                    <div
                        class="hidden position-absolute z-index-1"
                        data-region="confirm-dialogue-container"
                        style="top: 0; bottom: -1px; right: 0; left: 0; background: rgba(0,0,0,0.3);"
                    ></div>
                </div>                <div class="border-bottom p-1 px-sm-2" aria-hidden="false"  data-region="view-overview">
                    <div class="d-flex align-items-center">
                        <div class="input-group simplesearchform">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Search"
                                aria-label="Search"
                                data-region="view-overview-search-input"
                            >
                            <div class="input-group-append">
                                <span class="icon-no-margin btn btn-submit">
                                    <i class="icon fa fa-search fa-fw " aria-hidden="true"  ></i>
                                </span>
                            </div>
                        </div>
                        <div class="ml-2">
                            <a
                                href="#"
                                data-route="view-settings"
                                data-route-param="2"
                                aria-label="Settings"
                                role="button"
                            >
                                <i class="icon fa fa-cog fa-fw " aria-hidden="true"  ></i>
                            </a>
                        </div>
                    </div>
                    <div class="text-right mt-sm-3">
                        <a href="#" data-route="view-contacts" role="button">
                            <i class="icon fa fa-user fa-fw " aria-hidden="true"  ></i>
                            Contacts
                            <span
                                class="badge badge-primary bg-primary ml-2 hidden"
                                data-region="contact-request-count"
                            >
                                <span aria-hidden="true">0</span>
                                <span class="sr-only">There are 0 pending contact requests</span>
                            </span>
                        </a>
                    </div>
                </div>
                
                <div class="hidden border-bottom p-1 px-sm-2 view-search"  aria-hidden="true" data-region="view-search">
                    <div class="d-flex align-items-center">
                        <a
                            class="mr-2 align-self-stretch d-flex align-items-center"
                            href="#"
                            data-route-back
                            data-action="cancel-search"
                            role="button"
                        >
                            <div class="icon-back-in-drawer">
                                <span class="dir-rtl-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true"  ></i></span>
                                <span class="dir-ltr-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true"  ></i></span>
                            </div>
                            <div class="icon-back-in-app">
                                <span class="dir-rtl-hide"><i class="icon fa fa-times fa-fw " aria-hidden="true"  ></i></span>
                            </div>                        </a>
                        <div class="input-group simplesearchform">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Search"
                                aria-label="Search"
                                data-region="search-input"
                            >
                            <div class="input-group-append">
                                <button
                                    class="btn btn-submit icon-no-margin"
                                    type="button"
                                    data-action="search"
                                    aria-label="Search"
                                >
                                    <span data-region="search-icon-container">
                                        <i class="icon fa fa-search fa-fw " aria-hidden="true"  ></i>
                                    </span>
                                    <span class="hidden" data-region="loading-icon-container">
                                        <span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>                
                <div class="hidden border-bottom p-1 px-sm-2 pb-sm-3" aria-hidden="true" data-region="view-settings">
                    <div class="d-flex align-items-center">
                        <div class="align-self-stretch" >
                            <a class="h-100 d-flex mr-2 align-items-center" href="#" data-route-back role="button">
                                <div class="icon-back-in-drawer">
                                    <span class="dir-rtl-hide"><i class="icon fa fa-chevron-left fa-fw " aria-hidden="true"  ></i></span>
                                    <span class="dir-ltr-hide"><i class="icon fa fa-chevron-right fa-fw " aria-hidden="true"  ></i></span>
                                </div>
                                <div class="icon-back-in-app">
                                    <span class="dir-rtl-hide"><i class="icon fa fa-times fa-fw " aria-hidden="true"  ></i></span>
                                </div>                            </a>
                        </div>
                        <div>
                            Settings
                        </div>
                    </div>
                </div>
            </div>
            <div class="body-container position-relative" data-region="body-container">
                
                <div
                    class="hidden"
                    data-region="view-contact"
                    aria-hidden="true"
                >
                    <div class="p-2 pt-3" data-region="content-container"></div>
                </div>                <div class="hidden h-100" data-region="view-contacts" aria-hidden="true" data-user-id="2">
                    <div class="d-flex flex-column h-100">
                        <div class="p-3 border-bottom">
                            <ul class="nav nav-pills nav-fill" role="tablist">
                                <li class="nav-item">
                                    <a
                                        id="contacts-tab-64956ec43595764956ec2487bb84"
                                        class="nav-link active"
                                        href="#contacts-tab-panel-64956ec43595764956ec2487bb84"
                                        data-toggle="tab"
                                        data-action="show-contacts-section"
                                        role="tab"
                                        aria-controls="contacts-tab-panel-64956ec43595764956ec2487bb84"
                                        aria-selected="true"
                                    >
                                        Contacts
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a
                                        id="requests-tab-64956ec43595764956ec2487bb84"
                                        class="nav-link"
                                        href="#requests-tab-panel-64956ec43595764956ec2487bb84"
                                        data-toggle="tab"
                                        data-action="show-requests-section"
                                        role="tab"
                                        aria-controls="requests-tab-panel-64956ec43595764956ec2487bb84"
                                        aria-selected="false"
                                    >
                                        Requests
                                        <span class="badge badge-primary bg-primary ml-2 hidden"
                                            data-region="contact-request-count"
                                        >
                                            <span aria-hidden="true">0</span>
                                            <span class="sr-only">There are 0 pending contact requests</span>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-content d-flex flex-column h-100">
                                            <div
                    class="tab-pane fade show active h-100 lazy-load-list"
                    aria-live="polite"
                    data-region="lazy-load-list"
                    data-user-id="2"
                                        id="contacts-tab-panel-64956ec43595764956ec2487bb84"
                    data-section="contacts"
                    role="tabpanel"
                    aria-labelledby="contacts-tab-64956ec43595764956ec2487bb84"

                >
                    
                    <div class="hidden text-center p-2" data-region="empty-message-container">
                        No contacts
                    </div>
                    <div class="hidden list-group" data-region="content-container">
                        
                    </div>
                    <div class="list-group" data-region="placeholder-container">
                        
                    </div>
                    <div class="w-100 text-center p-3 hidden" data-region="loading-icon-container" >
                        <span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
                    </div>
                </div>
                
                                            <div
                    class="tab-pane fade h-100 lazy-load-list"
                    aria-live="polite"
                    data-region="lazy-load-list"
                    data-user-id="2"
                                        id="requests-tab-panel-64956ec43595764956ec2487bb84"
                    data-section="requests"
                    role="tabpanel"
                    aria-labelledby="requests-tab-64956ec43595764956ec2487bb84"

                >
                    
                    <div class="hidden text-center p-2" data-region="empty-message-container">
                        No contact requests
                    </div>
                    <div class="hidden list-group" data-region="content-container">
                        
                    </div>
                    <div class="list-group" data-region="placeholder-container">
                        
                    </div>
                    <div class="w-100 text-center p-3 hidden" data-region="loading-icon-container" >
                        <span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
                
                <div
                    class="view-conversation hidden h-100"
                    aria-hidden="true"
                    data-region="view-conversation"
                    data-user-id="2"
                    data-midnight="1687478400"
                    data-message-poll-min="10"
                    data-message-poll-max="120"
                    data-message-poll-after-max="300"
                    style="overflow-y: auto; overflow-x: hidden"
                >
                    <div class="position-relative h-100" data-region="content-container" style="overflow-y: auto; overflow-x: hidden">
                        <div class="content-message-container hidden h-100 px-2 pt-0" data-region="content-message-container" role="log" style="overflow-y: auto; overflow-x: hidden">
                            <div class="py-3 sticky-top z-index-1 border-bottom text-center hidden" data-region="contact-request-sent-message-container">
                                <p class="m-0">Contact request sent</p>
                                <p class="font-italic font-weight-light" data-region="text"></p>
                            </div>
                            <div class="p-3 text-center hidden" data-region="self-conversation-message-container">
                                <p class="m-0">Personal space</p>
                                <p class="font-italic font-weight-light" data-region="text">Save draft messages, links, notes etc. to access later.</p>
                           </div>
                            <div class="hidden text-center p-3" data-region="more-messages-loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</div>
                        </div>
                        <div class="p-4 w-100 h-100 hidden position-absolute z-index-1" data-region="confirm-dialogue-container" style="top: 0; background: rgba(0,0,0,0.3);">
                            
                            <div class="p-3 bg-white" data-region="confirm-dialogue" role="alert">
                                <p class="text-muted" data-region="dialogue-text"></p>
                                <div class="mb-2 custom-control custom-checkbox hidden" data-region="delete-messages-for-all-users-toggle-container">
                                    <input type="checkbox" class="custom-control-input" id="delete-messages-for-all-users" data-region="delete-messages-for-all-users-toggle">
                                    <label class="custom-control-label text-muted" for="delete-messages-for-all-users">
                                        Delete for me and for everyone else
                                    </label>
                                </div>
                                <button type="button" class="btn btn-primary btn-block hidden" data-action="confirm-block">
                                    <span data-region="dialogue-button-text">Block</span>
                                    <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                </button>
                                <button type="button" class="btn btn-primary btn-block hidden" data-action="confirm-unblock">
                                    <span data-region="dialogue-button-text">Unblock</span>
                                    <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                </button>
                                <button type="button" class="btn btn-primary btn-block hidden" data-action="confirm-remove-contact">
                                    <span data-region="dialogue-button-text">Remove</span>
                                    <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                </button>
                                <button type="button" class="btn btn-primary btn-block hidden" data-action="confirm-add-contact">
                                    <span data-region="dialogue-button-text">Add</span>
                                    <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                </button>
                                <button type="button" class="btn btn-primary btn-block hidden" data-action="confirm-delete-selected-messages">
                                    <span data-region="dialogue-button-text">Delete</span>
                                    <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                </button>
                                <button type="button" class="btn btn-primary btn-block hidden" data-action="confirm-delete-conversation">
                                    <span data-region="dialogue-button-text">Delete</span>
                                    <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                </button>
                                <button type="button" class="btn btn-primary btn-block hidden" data-action="request-add-contact">
                                    <span data-region="dialogue-button-text">Send contact request</span>
                                    <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                </button>
                                <button type="button" class="btn btn-primary btn-block hidden" data-action="accept-contact-request">
                                    <span data-region="dialogue-button-text">Accept and add to contacts</span>
                                    <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                </button>
                                <button type="button" class="btn btn-secondary btn-block hidden" data-action="decline-contact-request">
                                    <span data-region="dialogue-button-text">Decline</span>
                                    <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                </button>
                                <button type="button" class="btn btn-primary btn-block" data-action="okay-confirm">OK</button>
                                <button type="button" class="btn btn-secondary btn-block" data-action="cancel-confirm">Cancel</button>
                            </div>
                        </div>
                        <div class="px-2 pb-2 pt-0" data-region="content-placeholder">
                            <div class="h-100 d-flex flex-column">
                                <div
                                    class="px-2 pb-2 pt-0 bg-light h-100"
                                    style="overflow-y: auto"
                                >
                                    <div class="mt-4">
                                        <div class="mb-4">
                                            <div class="mx-auto bg-white" style="height: 25px; width: 100px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="mr-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="mr-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ml-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="mr-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="mr-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ml-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="mr-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="mr-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ml-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                    </div>                                    <div class="mt-4">
                                        <div class="mb-4">
                                            <div class="mx-auto bg-white" style="height: 25px; width: 100px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="mr-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="mr-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ml-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="mr-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="mr-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ml-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="mr-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="mr-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ml-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                    </div>                                    <div class="mt-4">
                                        <div class="mb-4">
                                            <div class="mx-auto bg-white" style="height: 25px; width: 100px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="mr-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="mr-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ml-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="mr-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="mr-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ml-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="mr-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="mr-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ml-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                    </div>                                    <div class="mt-4">
                                        <div class="mb-4">
                                            <div class="mx-auto bg-white" style="height: 25px; width: 100px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="mr-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="mr-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ml-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="mr-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="mr-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ml-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="mr-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="mr-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ml-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                    </div>                                    <div class="mt-4">
                                        <div class="mb-4">
                                            <div class="mx-auto bg-white" style="height: 25px; width: 100px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="mr-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="mr-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ml-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="mr-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="mr-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ml-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                        <div class="d-flex flex-column p-2 bg-white rounded mb-2">
                                            <div class="d-flex align-items-center mb-2">
                                                <div class="mr-2">
                                                    <div class="rounded-circle bg-pulse-grey" style="height: 35px; width: 35px"></div>
                                                </div>
                                                <div class="mr-4 w-75 bg-pulse-grey" style="height: 16px"></div>
                                                <div class="ml-auto bg-pulse-grey" style="width: 35px; height: 16px"></div>
                                            </div>
                                            <div class="bg-pulse-grey w-100" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-100 mt-2" style="height: 16px"></div>
                                            <div class="bg-pulse-grey w-75 mt-2" style="height: 16px"></div>
                                        </div>
                                    </div>                                </div>
                            </div>                        </div>
                    </div>
                </div>
                
                <div
                    class="hidden"
                    aria-hidden="true"
                    data-region="view-group-info"
                >
                    <div
                        class="pt-3 h-100 d-flex flex-column"
                        data-region="group-info-content-container"
                        style="overflow-y: auto"
                    ></div>
                </div>                <div class="h-100 view-overview-body" aria-hidden="false" data-region="view-overview"  data-user-id="2">
                    <div id="message-drawer-view-overview-container-64956ec43595764956ec2487bb84" class="d-flex flex-column h-100" style="overflow-y: auto">
                            
                            
                            <div
                                class="section border-0 card rounded-0"
                                data-region="view-overview-favourites"
                            >
                                <div id="view-overview-favourites-toggle" class="card-header rounded-0" data-region="toggle">
                                    <button
                                        class="btn btn-link w-100 text-left p-1 p-sm-2 d-flex rounded-0 align-items-center overview-section-toggle collapsed"
                                        data-toggle="collapse"
                                        data-target="#view-overview-favourites-target-64956ec43595764956ec2487bb84"
                                        aria-expanded="false"
                                        aria-controls="view-overview-favourites-target-64956ec43595764956ec2487bb84"
                                    >
                                        <span class="collapsed-icon-container">
                                            <i class="icon fa fa-caret-right fa-fw " aria-hidden="true"  ></i>
                                        </span>
                                        <span class="expanded-icon-container">
                                            <i class="icon fa fa-caret-down fa-fw " aria-hidden="true"  ></i>
                                        </span>
                                        <span class="font-weight-bold">Starred</span>
                                        <small class="hidden ml-1" data-region="section-total-count-container">
                                            (<span aria-hidden="true" data-region="section-total-count"></span><span class="sr-only"> total conversations</span>)
                                        </small>
                                        <span class="hidden ml-2" data-region="loading-icon-container">
                                            <span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
                                        </span>
                                        <span
                                            class="hidden badge badge-pill badge-primary ml-auto bg-primary"
                                            data-region="section-unread-count"
                                        >
                                            <span aria-hidden="true"></span>
                                            <span class="sr-only">There are  unread conversations</span>
                                        </span>
                                    </button>
                                </div>
                                                            <div
                                class="collapse border-bottom  lazy-load-list"
                                aria-live="polite"
                                data-region="lazy-load-list"
                                data-user-id="2"
                                            id="view-overview-favourites-target-64956ec43595764956ec2487bb84"
            aria-labelledby="view-overview-favourites-toggle"
            data-parent="#message-drawer-view-overview-container-64956ec43595764956ec2487bb84"

                            >
                                
                                <div class="hidden text-center p-2" data-region="empty-message-container">
                                            <p class="text-muted mt-2">No starred conversations</p>

                                </div>
                                <div class="hidden list-group" data-region="content-container">
                                    
                                </div>
                                <div class="list-group" data-region="placeholder-container">
                                            <div class="text-center py-2"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</div>

                                </div>
                                <div class="w-100 text-center p-3 hidden" data-region="loading-icon-container" >
                                    <span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
                                </div>
                            </div>
                            </div>
                            
                            
                            <div
                                class="section border-0 card rounded-0"
                                data-region="view-overview-group-messages"
                            >
                                <div id="view-overview-group-messages-toggle" class="card-header rounded-0" data-region="toggle">
                                    <button
                                        class="btn btn-link w-100 text-left p-1 p-sm-2 d-flex rounded-0 align-items-center overview-section-toggle collapsed"
                                        data-toggle="collapse"
                                        data-target="#view-overview-group-messages-target-64956ec43595764956ec2487bb84"
                                        aria-expanded="false"
                                        aria-controls="view-overview-group-messages-target-64956ec43595764956ec2487bb84"
                                    >
                                        <span class="collapsed-icon-container">
                                            <i class="icon fa fa-caret-right fa-fw " aria-hidden="true"  ></i>
                                        </span>
                                        <span class="expanded-icon-container">
                                            <i class="icon fa fa-caret-down fa-fw " aria-hidden="true"  ></i>
                                        </span>
                                        <span class="font-weight-bold">Group</span>
                                        <small class="hidden ml-1" data-region="section-total-count-container">
                                            (<span aria-hidden="true" data-region="section-total-count"></span><span class="sr-only"> total conversations</span>)
                                        </small>
                                        <span class="hidden ml-2" data-region="loading-icon-container">
                                            <span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
                                        </span>
                                        <span
                                            class="hidden badge badge-pill badge-primary ml-auto bg-primary"
                                            data-region="section-unread-count"
                                        >
                                            <span aria-hidden="true"></span>
                                            <span class="sr-only">There are  unread conversations</span>
                                        </span>
                                    </button>
                                </div>
                                                            <div
                                class="collapse border-bottom  lazy-load-list"
                                aria-live="polite"
                                data-region="lazy-load-list"
                                data-user-id="2"
                                            id="view-overview-group-messages-target-64956ec43595764956ec2487bb84"
            aria-labelledby="view-overview-group-messages-toggle"
            data-parent="#message-drawer-view-overview-container-64956ec43595764956ec2487bb84"

                            >
                                
                                <div class="hidden text-center p-2" data-region="empty-message-container">
                                            <p class="text-muted mt-2">No group conversations</p>

                                </div>
                                <div class="hidden list-group" data-region="content-container">
                                    
                                </div>
                                <div class="list-group" data-region="placeholder-container">
                                            <div class="text-center py-2"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</div>

                                </div>
                                <div class="w-100 text-center p-3 hidden" data-region="loading-icon-container" >
                                    <span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
                                </div>
                            </div>
                            </div>
                            
                            
                            <div
                                class="section border-0 card rounded-0"
                                data-region="view-overview-messages"
                            >
                                <div id="view-overview-messages-toggle" class="card-header rounded-0" data-region="toggle">
                                    <button
                                        class="btn btn-link w-100 text-left p-1 p-sm-2 d-flex rounded-0 align-items-center overview-section-toggle collapsed"
                                        data-toggle="collapse"
                                        data-target="#view-overview-messages-target-64956ec43595764956ec2487bb84"
                                        aria-expanded="false"
                                        aria-controls="view-overview-messages-target-64956ec43595764956ec2487bb84"
                                    >
                                        <span class="collapsed-icon-container">
                                            <i class="icon fa fa-caret-right fa-fw " aria-hidden="true"  ></i>
                                        </span>
                                        <span class="expanded-icon-container">
                                            <i class="icon fa fa-caret-down fa-fw " aria-hidden="true"  ></i>
                                        </span>
                                        <span class="font-weight-bold">Private</span>
                                        <small class="hidden ml-1" data-region="section-total-count-container">
                                            (<span aria-hidden="true" data-region="section-total-count"></span><span class="sr-only"> total conversations</span>)
                                        </small>
                                        <span class="hidden ml-2" data-region="loading-icon-container">
                                            <span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
                                        </span>
                                        <span
                                            class="hidden badge badge-pill badge-primary ml-auto bg-primary"
                                            data-region="section-unread-count"
                                        >
                                            <span aria-hidden="true"></span>
                                            <span class="sr-only">There are  unread conversations</span>
                                        </span>
                                    </button>
                                </div>
                                                            <div
                                class="collapse border-bottom  lazy-load-list"
                                aria-live="polite"
                                data-region="lazy-load-list"
                                data-user-id="2"
                                            id="view-overview-messages-target-64956ec43595764956ec2487bb84"
            aria-labelledby="view-overview-messages-toggle"
            data-parent="#message-drawer-view-overview-container-64956ec43595764956ec2487bb84"

                            >
                                
                                <div class="hidden text-center p-2" data-region="empty-message-container">
                                            <p class="text-muted mt-2">No private conversations</p>

                                </div>
                                <div class="hidden list-group" data-region="content-container">
                                    
                                </div>
                                <div class="list-group" data-region="placeholder-container">
                                            <div class="text-center py-2"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</div>

                                </div>
                                <div class="w-100 text-center p-3 hidden" data-region="loading-icon-container" >
                                    <span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
                
                <div
                    data-region="view-search"
                    aria-hidden="true"
                    class="h-100 hidden"
                    data-user-id="2"
                    data-users-offset="0"
                    data-messages-offset="0"
                    style="overflow-y: auto"
                    
                >
                    <div class="hidden" data-region="search-results-container" style="overflow-y: auto">
                        
                        <div class="d-flex flex-column">
                            <div class="mb-3 bg-white" data-region="all-contacts-container">
                                <div data-region="contacts-container"  class="pt-2">
                                    <h4 class="h6 px-2">Contacts</h4>
                                    <div class="list-group" data-region="list"></div>
                                </div>
                                <div data-region="non-contacts-container" class="pt-2 border-top">
                                    <h4 class="h6 px-2">Non-contacts</h4>
                                    <div class="list-group" data-region="list"></div>
                                </div>
                                <div class="text-right">
                                    <button class="btn btn-link text-primary" data-action="load-more-users">
                                        <span data-region="button-text">Load more</span>
                                        <span data-region="loading-icon-container" class="hidden"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                    </button>
                                </div>
                            </div>
                            <div class="bg-white" data-region="messages-container">
                                <h4 class="h6 px-2 pt-2">Messages</h4>
                                <div class="list-group" data-region="list"></div>
                                <div class="text-right">
                                    <button class="btn btn-link text-primary" data-action="load-more-messages">
                                        <span data-region="button-text">Load more</span>
                                        <span data-region="loading-icon-container" class="hidden"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                    </button>
                                </div>
                            </div>
                            <p class="hidden p-3 text-center" data-region="no-results-container">No results</p>
                        </div>                    </div>
                    <div class="hidden" data-region="loading-placeholder">
                        <div class="text-center pt-3 icon-size-4"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</div>
                    </div>
                    <div class="p-3 text-center" data-region="empty-message-container">
                        <p>Search people and messages</p>
                    </div>
                </div>                
                <div class="h-100 hidden bg-white" aria-hidden="true" data-region="view-settings">
                    <div class="hidden" data-region="content-container">
                        
                        <div data-region="settings" class="p-3">
                            <h3 class="h6 font-weight-bold">Privacy</h3>
                            <p>You can restrict who can message you</p>
                            <div data-preference="blocknoncontacts" class="mb-3">
                                <fieldset>
                                    <legend class="sr-only">Accept messages from:</legend>
                                        <div class="custom-control custom-radio mb-2">
                                            <input
                                                type="radio"
                                                name="message_blocknoncontacts"
                                                class="custom-control-input"
                                                id="block-noncontacts-64956ec43595764956ec2487bb84-1"
                                                value="1"
                                            >
                                            <label class="custom-control-label ml-2" for="block-noncontacts-64956ec43595764956ec2487bb84-1">
                                                My contacts only
                                            </label>
                                        </div>
                                        <div class="custom-control custom-radio mb-2">
                                            <input
                                                type="radio"
                                                name="message_blocknoncontacts"
                                                class="custom-control-input"
                                                id="block-noncontacts-64956ec43595764956ec2487bb84-0"
                                                value="0"
                                            >
                                            <label class="custom-control-label ml-2" for="block-noncontacts-64956ec43595764956ec2487bb84-0">
                                                My contacts and anyone in my courses
                                            </label>
                                        </div>
                                </fieldset>
                            </div>
                        
                            <div class="hidden" data-region="notification-preference-container">
                                <h3 class="mb-2 mt-4 h6 font-weight-bold">Notification preferences</h3>
                            </div>
                        
                            <h3 class="mb-2 mt-4 h6 font-weight-bold">General</h3>
                            <div data-preference="entertosend">
                                <div class="custom-control custom-switch">
                                    <input type="checkbox" class="custom-control-input" id="enter-to-send-64956ec43595764956ec2487bb84" checked>
                                    <label class="custom-control-label" for="enter-to-send-64956ec43595764956ec2487bb84">
                                        Use enter to send
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-region="placeholder-container">
                        
                        <div class="d-flex flex-column p-3">
                            <div class="w-25 bg-pulse-grey h6" style="height: 18px"></div>
                            <div class="w-75 bg-pulse-grey mb-4" style="height: 18px"></div>
                            <div class="mb-3">
                                <div class="w-100 d-flex mb-3">
                                    <div class="bg-pulse-grey rounded-circle" style="width: 18px; height: 18px"></div>
                                    <div class="bg-pulse-grey w-50 ml-2" style="height: 18px"></div>
                                </div>
                                <div class="w-100 d-flex mb-3">
                                    <div class="bg-pulse-grey rounded-circle" style="width: 18px; height: 18px"></div>
                                    <div class="bg-pulse-grey w-50 ml-2" style="height: 18px"></div>
                                </div>
                                <div class="w-100 d-flex mb-3">
                                    <div class="bg-pulse-grey rounded-circle" style="width: 18px; height: 18px"></div>
                                    <div class="bg-pulse-grey w-50 ml-2" style="height: 18px"></div>
                                </div>
                            </div>
                            <div class="w-50 bg-pulse-grey h6 mb-3 mt-2" style="height: 18px"></div>
                            <div class="mb-4">
                                <div class="w-100 d-flex mb-2 align-items-center">
                                    <div class="bg-pulse-grey w-25" style="width: 18px; height: 27px"></div>
                                    <div class="bg-pulse-grey w-25 ml-2" style="height: 18px"></div>
                                </div>
                                <div class="w-100 d-flex mb-2 align-items-center">
                                    <div class="bg-pulse-grey w-25" style="width: 18px; height: 27px"></div>
                                    <div class="bg-pulse-grey w-25 ml-2" style="height: 18px"></div>
                                </div>
                            </div>
                            <div class="w-25 bg-pulse-grey h6 mb-3 mt-2" style="height: 18px"></div>
                            <div class="mb-3">
                                <div class="w-100 d-flex mb-2 align-items-center">
                                    <div class="bg-pulse-grey w-25" style="width: 18px; height: 27px"></div>
                                    <div class="bg-pulse-grey w-50 ml-2" style="height: 18px"></div>
                                </div>
                            </div>
                        </div>                    </div>
                </div>            </div>
            <div class="footer-container position-relative" data-region="footer-container">
                
                <div
                    class="hidden border-top bg-white position-relative"
                    aria-hidden="true"
                    data-region="view-conversation"
                    data-enter-to-send="1"
                >
                    <div class="hidden p-sm-2" data-region="content-messages-footer-container">
                        
                            <div
                                class="emoji-auto-complete-container w-100 hidden"
                                data-region="emoji-auto-complete-container"
                                aria-live="polite"
                                aria-hidden="true"
                            >
                            </div>
                        <div class="d-flex mt-sm-1">
                            <textarea
                                dir="auto"
                                data-region="send-message-txt"
                                class="form-control bg-light"
                                rows="3"
                                data-auto-rows
                                data-min-rows="3"
                                data-max-rows="5"
                                aria-label="Write a message..."
                                placeholder="Write a message..."
                                style="resize: none"
                                maxlength="4096"
                            ></textarea>
                        
                            <div class="position-relative d-flex flex-column">
                                    <div
                                        data-region="emoji-picker-container"
                                        class="emoji-picker-container hidden"
                                        aria-hidden="true"
                                    >
                                        
                                        <div
                                            data-region="emoji-picker"
                                            class="card shadow emoji-picker"
                                        >
                                            <div class="card-header px-1 pt-1 pb-0 d-flex justify-content-between flex-shrink-0">
                                                <button
                                                    class="btn btn-outline-secondary icon-no-margin category-button rounded-0 selected"
                                                    data-action="show-category"
                                                    data-category="Recent"
                                                    title="Recent"
                                                >
                                                    <i class="icon fa fa-clock-o fa-fw " aria-hidden="true"  ></i>
                                                </button>
                                                <button
                                                    class="btn btn-outline-secondary icon-no-margin category-button rounded-0"
                                                    data-action="show-category"
                                                    data-category="Smileys & Emotion"
                                                    title="Smileys & emotion"
                                                >
                                                    <i class="icon fa fa-smile-o fa-fw " aria-hidden="true"  ></i>
                                                </button>
                                                <button
                                                    class="btn btn-outline-secondary icon-no-margin category-button rounded-0"
                                                    data-action="show-category"
                                                    data-category="People & Body"
                                                    title="People & body"
                                                >
                                                    <i class="icon fa fa-male fa-fw " aria-hidden="true"  ></i>
                                                </button>
                                                <button
                                                    class="btn btn-outline-secondary icon-no-margin category-button rounded-0"
                                                    data-action="show-category"
                                                    data-category="Animals & Nature"
                                                    title="Animals & nature"
                                                >
                                                    <i class="icon fa fa-leaf fa-fw " aria-hidden="true"  ></i>
                                                </button>
                                                <button
                                                    class="btn btn-outline-secondary icon-no-margin category-button rounded-0"
                                                    data-action="show-category"
                                                    data-category="Food & Drink"
                                                    title="Food & drink"
                                                >
                                                    <i class="icon fa fa-cutlery fa-fw " aria-hidden="true"  ></i>
                                                </button>
                                                <button
                                                    class="btn btn-outline-secondary icon-no-margin category-button rounded-0"
                                                    data-action="show-category"
                                                    data-category="Travel & Places"
                                                    title="Travel & places"
                                                >
                                                    <i class="icon fa fa-plane fa-fw " aria-hidden="true"  ></i>
                                                </button>
                                                <button
                                                    class="btn btn-outline-secondary icon-no-margin category-button rounded-0"
                                                    data-action="show-category"
                                                    data-category="Activities"
                                                    title="Activities"
                                                >
                                                    <i class="icon fa fa-futbol-o fa-fw " aria-hidden="true"  ></i>
                                                </button>
                                                <button
                                                    class="btn btn-outline-secondary icon-no-margin category-button rounded-0"
                                                    data-action="show-category"
                                                    data-category="Objects"
                                                    title="Objects"
                                                >
                                                    <i class="icon fa fa-lightbulb-o fa-fw " aria-hidden="true"  ></i>
                                                </button>
                                                <button
                                                    class="btn btn-outline-secondary icon-no-margin category-button rounded-0"
                                                    data-action="show-category"
                                                    data-category="Symbols"
                                                    title="Symbols"
                                                >
                                                    <i class="icon fa fa-heart fa-fw " aria-hidden="true"  ></i>
                                                </button>
                                                <button
                                                    class="btn btn-outline-secondary icon-no-margin category-button rounded-0"
                                                    data-action="show-category"
                                                    data-category="Flags"
                                                    title="Flags"
                                                >
                                                    <i class="icon fa fa-flag fa-fw " aria-hidden="true"  ></i>
                                                </button>
                                            </div>
                                            <div class="card-body p-2 d-flex flex-column overflow-hidden">
                                                <div class="input-group mb-1 flex-shrink-0">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text pr-0 bg-white text-muted">
                                                            <i class="icon fa fa-search fa-fw " aria-hidden="true"  ></i>
                                                        </span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        class="form-control border-left-0"
                                                        placeholder="Search"
                                                        aria-label="Search"
                                                        data-region="search-input"
                                                    >
                                                </div>
                                                <div class="flex-grow-1 overflow-auto emojis-container h-100" data-region="emojis-container">
                                                    <div class="position-relative" data-region="row-container"></div>
                                                </div>
                                                <div class="flex-grow-1 overflow-auto search-results-container h-100 hidden" data-region="search-results-container">
                                                    <div class="position-relative" data-region="row-container"></div>
                                                </div>
                                            </div>
                                            <div
                                                class="card-footer d-flex flex-shrink-0"
                                                data-region="footer"
                                            >
                                                <div class="emoji-preview" data-region="emoji-preview"></div>
                                                <div data-region="emoji-short-name" class="emoji-short-name text-muted text-wrap ml-2"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        class="btn btn-link btn-icon icon-size-3 ml-1"
                                        aria-label="Toggle emoji picker"
                                        data-action="toggle-emoji-picker"
                                    >
                                        <i class="icon fa fa-smile-o fa-fw " aria-hidden="true"  ></i>
                                    </button>
                                <button
                                    class="btn btn-link btn-icon icon-size-3 ml-1 mt-auto"
                                    aria-label="Send message"
                                    data-action="send-message"
                                >
                                    <span data-region="send-icon-container"><i class="icon fa fa-paper-plane fa-fw " aria-hidden="true"  ></i></span>
                                    <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="hidden p-sm-2" data-region="content-messages-footer-edit-mode-container">
                        
                        <div class="d-flex p-3 justify-content-end">
                            <button
                                class="btn btn-link btn-icon my-1 icon-size-4"
                                data-action="delete-selected-messages"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Delete selected messages"
                            >
                                <span data-region="icon-container"><i class="icon fa fa-trash fa-fw " aria-hidden="true"  ></i></span>
                                <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                                <span class="sr-only">Delete selected messages</span>
                            </button>
                        </div>                    </div>
                    <div class="hidden bg-secondary p-sm-3" data-region="content-messages-footer-require-contact-container">
                        
                        <div class="p-3 bg-white">
                            <p data-region="title"></p>
                            <p class="text-muted" data-region="text"></p>
                            <button type="button" class="btn btn-primary btn-block" data-action="request-add-contact">
                                <span data-region="dialogue-button-text">Send contact request</span>
                                <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                            </button>
                        </div>
                    </div>
                    <div class="hidden bg-secondary p-sm-3" data-region="content-messages-footer-require-unblock-container">
                        
                        <div class="p-3 bg-white">
                            <p class="text-muted" data-region="text">You have blocked this user.</p>
                            <button type="button" class="btn btn-primary btn-block" data-action="request-unblock">
                                <span data-region="dialogue-button-text">Unblock user</span>
                                <span class="hidden" data-region="loading-icon-container"><span class="loading-icon icon-no-margin"><i class="icon fa fa-circle-o-notch fa-spin fa-fw "  title="Loading" role="img" aria-label="Loading"></i></span>
</span>
                            </button>
                        </div>
                    </div>
                    <div class="hidden bg-secondary p-sm-3" data-region="content-messages-footer-unable-to-message">
                        
                        <div class="p-3 bg-white">
                            <p class="text-muted" data-region="text">You are unable to message this user</p>
                        </div>
                    </div>
                    <div class="p-sm-2" data-region="placeholder-container">
                        <div class="d-flex">
                            <div class="bg-pulse-grey w-100" style="height: 80px"></div>
                            <div class="mx-2 mb-2 align-self-end bg-pulse-grey" style="height: 20px; width: 20px"></div>
                        </div>                    </div>
                    <div
                        class="hidden position-absolute z-index-1"
                        data-region="confirm-dialogue-container"
                        style="top: -1px; bottom: 0; right: 0; left: 0; background: rgba(0,0,0,0.3);"
                    ></div>
                </div>                    <div data-region="view-overview" class="text-center">
                        <a href="http://qubits.localhost.com/message/index.php">
                            See all
                        </a>
                    </div>
            </div>
        </div>

</div>
</div>

</body>
</html>