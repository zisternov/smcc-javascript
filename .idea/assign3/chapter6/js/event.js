/*
 Mariya Khokhlova
 mariyakhokhlova@my.smccd.edu
 CIS 114 OL
 event.js
 Modern JavaScript, Chapter 6
 Assignment # 3.1.2
 Feb-21-2017
 */


// This script validates two dates and calculates the number of days between them.

function process() {
    'use strict';

    // Get a reference to the form elements
    var start = document.getElementById('start');
    var end = document.getElementById('end');

    // Get a reference to the paragraph
    var output = document.getElementById('output');
    
    // For the output
    var message = '';
    var interval = '';
    var day = 1000 * 60 * 60 * 24;
    
    // Validate that start and end are good
    
    // Try to create a start and end date
    var startDate = new Date(start.value); // Start date
    var endDate = new Date(end.value); // End date
    var today = new Date (); // Today

    if ( startDate.getTime() && endDate.getTime() ) {
        
        // Make sure the start date is in the future
        if (startDate > today) {

            // Make sure the start date comes first
            if (startDate < endDate) {

                // Get the interval:
                var diff = endDate - startDate;

                // Determine the interval
                if (diff <= day) {
                    interval = '1 day';
                } else {
                    interval = Math.round(diff / day) + ' days';
                }

                // Build the message
                message = 'The event has been scheduled starting on ' + startDate.toLocaleDateString();
                message += ' and ending on ' + endDate.toLocaleDateString();
                message += ', which is a period of ' + interval + '.';
            } else { // The start date doesn't come first
                message = 'The start date must come before the end date!';
            }
        } else { // The start date is not in the future
            message = 'The start date must be in the future';
        }

    
    } else { // One or both dates are invalid!
        message = 'Please enter valid start and end dates in the format MM/DD/YYYY.';
    }
    
    // Update the paragraph:
	if (output.textContent !== undefined) {
		output.textContent = message;
	} else {
		output.innerText = message;
	}
        
    // Return false to prevent submission:
    return false;
    
} // End of process() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = process;
} // End of init() function.
window.onload = init;