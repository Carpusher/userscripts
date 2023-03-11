// ==UserScript==
// @name        typeracer
// @version     1.0.0
// @description TypeRacer helper
// @author      carpusher
// @match       https://play.typeracer.com/
// @require     https://code.jquery.com/jquery-3.6.4.min.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// @icon        https://play.typeracer.com/favicon.ico
// @grant       none
// ==/UserScript==

(function() {
    'use strict';

    // Show 'My Scores'
    const myScoresSelector = '.gwt-Label.My_Scores';
    waitForKeyElements(myScoresSelector, () => {
        $(myScoresSelector).click();
    });
})();