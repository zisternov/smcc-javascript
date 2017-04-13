/*
 Mariya Khokhlova
 mariyakhokhlova@my.smccd.edu
 CIS 114 OL
 membership.js
 Modern JavaScript, Chapter 8
 Assignment # midterm1
 Mar-07-2017
 */

// This script calculates the cost of a membership.

// Function called when the form is submitted or changed.
// Function performs the calculation and prevents the default browser behavior.
function calculate(e) {
    'use strict';

    // Get the event object:
    if (typeof e == 'undefined') e = window.event;

    // Variable to store the total cost:
    var cost;

    // Get a reference to the form elements:
    var type = U.$('type');
    var years = U.$('years');

    // Convert the year to a number:
    if (years && years.value) {
        years = parseInt(years.value);
    }

    // Check for valid data: 
    if (type && type.value && years && (years > 0)) {

        // Determine the base cost:
        switch (type.value) {
            case 'basic':
                cost = 10.00;
                break;
            case 'premium':
                cost = 15.00;
                break;
            case 'gold':
                cost = 20.00;
                break;
            case 'platinum':
                cost = 25.00;
                break;
        }// End of switch.

        // Factor in the number of years:
        cost *= years;

        // Discount multiple years:
        if (years > 1) {
            cost *= .80; // 80%
        }

        // Show the total amount:
        U.$('cost').value = '$' + cost.toFixed(2);

    } else { // Show the error if required fields are empty or invalid
        U.$('cost').value = 'Please enter valid values.';
    }

    // Prevent the form's submission:
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }

    return false;

} // End of calculate() function.

window.onload = function () {
    'use strict';
    U.addEvent(U.$('theForm'), 'submit', calculate); // Register submit event handler for the form
    U.addEvent(U.$('theForm'), 'change', calculate); // Register change event handler for the form
};