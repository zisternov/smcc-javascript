/*
 Mariya Khokhlova
 mariyakhokhlova@my.smccd.edu
 CIS 114 OL
 errorMessages.js
 Modern JavaScript, Chapter 10
 Assignment # 4
 Mar-23-2017
 */

// This script defines functions for adding and removing error messages.

// This function adds the error message.
// It takes two arguments: the form element ID and the message.
function addErrorMessage(id, msg) {
    'use strict';

    // Get the form element reference:
    var elem = document.getElementById(id);

    // Define the new span's ID value:
    var newId = id + 'Error';

    // Check for the existence of the span:
    var span = document.getElementById(newId);
    if (span) {
        span.firstChild.value = msg; // Update
    } else { // Create new.

        // Create the span:
        span = document.createElement('span');
        span.id = newId;
        span.className += 'error'
        span.appendChild(document.createTextNode(msg));

        // Add the span to the parent:
        elem.parentNode.appendChild(span);
        elem.previousSibling.className += ' error';

    } // End of main IF-ELSE.

} // End of addErrorMessage() function.

// This function removes the error message.
// It takes one argument: the form element ID.
function removeErrorMessage(id) {
    'use strict';
        // Get a reference to the span:
        var span = document.getElementById(id + 'Error');
        if (span) {

            // Remove the class from the label:
            // Get the index of last blank space in the classname:
            var lastSpaceIndex = span.parentNode.firstChild.className.lastIndexOf(' ');
            // Slice the classname until the last blank space
            var originalClass = span.parentNode.firstChild.className.slice(0, lastSpaceIndex);
            // Update the classname with a new string
            span.parentNode.firstChild.className = originalClass;

            // Remove the span:
            span.parentNode.removeChild(span);

        } // End of IF.

} // End of removeErrorMessage() function.