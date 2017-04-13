/*
 Mariya Khokhlova
 mariyakhokhlova@my.smccd.edu
 CIS 114 OL
 events.js
 Modern JavaScript, Chapter 8
 Assignment # midterm1
 Mar-04-2017
 */

// Function called when events occur.
// Function reports the event type and target.

function reportEvent(e) {
    'use strict';

    // Get the event object:
    if (typeof e == 'undefined') e = window.event;

    // Get the event target:
    var target = e.target || e.srcElement;

    // Establish the output message:
    var msg = target.nodeName + ': ' + e.type + '\n';

    // Add the output to the textarea:
    U.$('output').value += msg;

} // End of reportEvent() function.

// This function is called when the form is submitted.
// It adds and removes event handlers and prevents the default behavior.
function setHandlers(e) {
    'use strict';

    // Get the event object:
    if (typeof e == 'undefined') e = window.event;

    // Bullet list item 5
    // Check if the event is the submit event and, if so, notify the user
    if (e.type == 'submit') {
        alert('The form has been submitted');
    }

    // List of possible events:
    var events = ['mouseover', 'mouseout', 'click', 'keypress', 'blur'];

    // Declare message variable and assign the default value:
    var message = 'Following event handlers are registered: ';

    // Add or remove event handlers accordingly:
    for (var i = 0, count = events.length; i < count; i++) {
        var checkbox = U.$(events[i]); // Get the element.
        if (checkbox.checked) { // Is it checked?
            U.addEvent(document, events[i], reportEvent); // Register event handler for the current event from the array
            message += events[i] + ' '; // Add the name of the event to the message
        } else {
            U.removeEvent(document, events[i], reportEvent);
        }
    } // End of FOR loop.

    // Bullet list item 5
    // Notify the user that the event handler is registered
    alert(message);

    // Clear the output textarea:
    U.$('output').value = '';

    // Bullet list item 7
    // Prevent the default behavior
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }

} // End of setHandlers() function.

// Establish functionality on window load:
window.onload = function () {
    'use strict';
    // Bullet list item 7
    // Register on submit event handler
    U.addEvent(U.$('theForm'), 'submit', setHandlers);
};