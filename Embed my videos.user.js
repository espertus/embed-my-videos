// ==UserScript==
// @name         Embed my videos
// @namespace    http://spertus.com
// @version      0.1
// @description  show my videos
// @author       Ellen
// @match        https://play.kotlinlang.org/koans/*
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
    'use strict';
    let re = new RegExp('https://play.kotlinlang.org/koans/([^/]+)/([^/]+)/Task.kt');
    let dict = {
        "Hello, world!": "Wxsfim9WnMo"
    };
    var url = window.location.href;
    var groups = re.exec(url);
    var level = groups[1];
    var task = groups[2].replaceAll("%20", " ");
    debugger;
    var vcode = dict[task];
    if (vcode) {
        var d = $("div.editor-content");
        var iframe = $('<iframe>', {
            width: 560,
            height: 315,
            src: "https://www.youtube.com/embed/" + vcode,
            frameborder: 0
        });
    }
    d.append(iframe);
})();
