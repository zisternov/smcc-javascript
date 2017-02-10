/*
 Mariya Khokhlova
 mariyakhokhlova@my.smccd.edu
 CIS 114 OL
 membership.js
 Modern JavaScript, Chapter 5
 Assignment # 2.1
 Feb-9-2017
 */

function calculate() {

    // Be strict:
    'use strict';

    // Variable to store the total cost:
    var cost;

    // Get a reference to the form elements:
    var type = document.getElementById('type');
    var years = document.getElementById('years');

    // Convert the year to a number:
    if (years && years.value) {
        years = parseInt(years.value, 10);
    }

    // Check for valid data:
    if (type && type.value && years && (years > 0) ) {

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
        } // End of switch.

        // Factor in the number of years:
        cost *= years;

        // Discount multiple years:
        switch (years) {
            case 1:
                cost *= 1;
                break;
            case 2:
            case 3:
                cost *= .90;
                break;
            case 4:
                cost *= .85;
                break;
            default:
                cost *= .80;
                break;

        }

        // Show the total amount:
        document.getElementById('cost').value = '$' + cost.toFixed(2);

    } else { // Show an error:
        document.getElementById('cost').value = 'Please enter valid values.';
    }

    // Return false to prevent submission:
    return false;

} // End of calculate() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = calculate;
} // End of init() function.
window.onload = init;