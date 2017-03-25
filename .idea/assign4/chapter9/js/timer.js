/*
 Mariya Khokhlova
 mariyakhokhlova@my.smccd.edu
 CIS 114 OL
 timer.js
 Modern JavaScript, Chapter 9
 Assignment # 4
 Mar-23-2017
 */

// Establish functionality on window load:
window.onload = function() {
        'use strict';

        // Get now:
        var now = new Date();

        // Create the message:
        var message = 'It has been ' + now.getTime() + ' milliseconds since the epoch.';
        // Set timer to bring up an alert after 2000 milliseconds
        setTimeout(function () { alert(message)}, 2000);

};