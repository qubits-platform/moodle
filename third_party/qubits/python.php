<?php
require('../../config.php');
$PAGE->set_pagelayout('thirdparty');
echo $OUTPUT->header();

?>

<div id="__next"></div>

 <script id="__NEXT_DATA__" type="application/json">
  {
	"props": {
	  "pageProps": {},
	  "__N_SSG": true
	},
	"page": "/Editor/[language]",
	"query": {
	  "language": "python"
	},
	"buildId": "BXl1ZtTDTb9tENltKnSWf",
	"isFallback": false,
	"gsp": true,
	"scriptLoader": []
  }
</script>

<?php

echo $OUTPUT->footer();

?>

<script>
//<![CDATA[
var murl = M.cfg.wwwroot+"/third_party/qubits";
require(["jquery", "jqueryui"], function($, jqui){
    
    $.getScript( "https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js" )
    .done(function( script, textStatus ) {
        $.when(
            $.getScript(`${murl}/js/d3.v2.min.js`),
            $.getScript(`${murl}/js/jquery.jsPlumb-1.3.10-all-min.js`),
            $.getScript(`${murl}/js/pytutor.js`),
            $.getScript(`${murl}/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js`),
            $.getScript(`${murl}/_next/static/chunks/webpack-90a5202df4c770d0.js`),
            $.getScript(`${murl}/_next/static/chunks/framework-2c79e2a64abdb08b.js`),
            $.getScript(`${murl}/_next/static/chunks/main-164f91e3b1a225f8.js`),
            $.getScript(`${murl}/_next/static/chunks/pages/_app-aea6920bd27938ca.js`),
            $.getScript(`${murl}/_next/static/chunks/pages/index-6bad1b3ea3f5e85f.js`),
            $.getScript(`${murl}/_next/static/BXl1ZtTDTb9tENltKnSWf/_buildManifest.js`),
            $.getScript(`${murl}/_next/static/BXl1ZtTDTb9tENltKnSWf/_ssgManifest.js`),
			$.getScript(`${murl}/_next/static/chunks/2b7b2d2a-81f6f30138d3ccc2.js`),
            $.getScript(`${murl}/_next/static/chunks/8a28b14e.d29918a3616a3ec4.js`),
            $.getScript(`${murl}/_next/static/chunks/190.e7ef72117155d7ec.js`),
            $.getScript(`${murl}/_next/static/chunks/330.15fd4ae41f8497d9.js`),
			$.getScript(`${murl}/_next/static/chunks/437.abb03a3021b73570.js`),
			$.getScript(`${murl}/_next/static/chunks/pages/Editor/%5Blanguage%5D-79bfa9e96bfce522.js`),
            $.getScript(`${murl}/_next/static/chunks/pages/Chapter1-23617840c1727198.js`),
            $.getScript(`${murl}/_next/static/chunks/pages/_error-3986dd5834f581dc.js`),

            $.Deferred(
                function( deferred ){
                    $( deferred.resolve );
                }
            )
        ).done(function(){

        })

    })
    .fail(function( jqxhr, settings, exception ) {
        console.log( "Triggered ajaxError handler." );
    });
    
});
//]]>
</script>
