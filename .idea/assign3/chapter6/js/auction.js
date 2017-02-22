/*
 Mariya Khokhlova
 mariyakhokhlova@my.smccd.edu
 CIS 114 OL
 auction.js
 Modern JavaScript, Chapter 6
 Assignment # 3.1.1
 Feb-20-2017
 */

function init() {
    'use strict';

    // Declare the end date of the auction
    var end = new Date('08 March 2017 08:00:00 UTC');

    // Create a Date object for today
    var today = new Date();

    // Check is auction end date is in the future
    if (end > today) {

        // Get the difference between today and auction's end date
        var diff = end - today;

        // Declare seconds, minutes and hours var
        var seconds, minutes, hours;
        seconds = (diff / 1000) % 60; // Convert milliseconds to seconds and use remainder as a value for seconds

        minutes = (diff / 1000 / 60) % 60; // Convert milliseconds to seconds, seconds to minutes and use remainder as a value for minutes

        hours = (diff / 1000 / 60 / 60); // Convert milliseconds to seconds, seconds to mins and divide them by 60 to get hours

        // Build a string to display the remaining time
        var message = parseInt(hours, 10) + ' hours, ' + parseInt(minutes, 10) + ' minutes, ' + parseInt(seconds, 10) + ' seconds';
    }
    // If auction day is in the past, display the corresponding message to the user
    else {
        message = 'Sorry, auction has ended';
    }

    // Get a reference to the paragraph
    var output = document.getElementById('output');

    // Update the innerText or textContent property of the paragraph
    if (output.textContent !== undefined) {
        output.textContent = message;
    } else {
        output.innerText = message;
    }

} // End of init() function.

window.onload = init;