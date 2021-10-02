// ==UserScript==
// @name         Hide Userposts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Entfernt Posts eines definierten Users
// @author       You
// @include      https://forum.oeffentlicher-dienst.info/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    /// unerwünschte Unser hier ergänzen
    var nicknames = ["spid","anotherusername1","yetanotherusername2"];

    var links = document.getElementsByTagName("a");
    for(var i=0; i<links.length; i++) {
        for (var s = 0; s < nicknames.length; s++){
            if ( links[i].text.toLowerCase() == nicknames[s].toLowerCase() ){
                console.log(links[i].text.toLowerCase());
                var post = links[i].closest(".post_wrapper");
                post.innerHTML = "<div><p>-- removed --</p></div>";
            }
        }
    }
})();