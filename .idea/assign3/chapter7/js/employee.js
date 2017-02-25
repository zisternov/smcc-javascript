/*
 Mariya Khokhlova
 mariyakhokhlova@my.smccd.edu
 CIS 114 OL
 employee.js
 Modern JavaScript, Chapter 6
 Assignment # 3.2.7
 Feb-23-2017
 */

// This script creates an array of objects using form data.

// Declare a global variable
var employees = [];

// This function acts as a shortcut for document.getElementById().
// It takes an id string as its lone argument.
// It returns an element reference (i.e., an object).
function $(id) {
    'use strict';
    if (typeof id != 'undefined') {
        return document.getElementById(id);
    }
} // End of $ function.


function getInput(elementId){
    'use strict';
    if (typeof elementId == 'string') {
        var elementValue = $(elementId).value;
        console.log('element value is ' + elementValue)
    }
    return elementValue;
}

function setText(elementId, message) {
    'use strict';
    if ( (typeof elementId == 'string')
        && (typeof message == 'string') ) {
        var output = $(elementId);
        if (output.textContent !== undefined) {
            output.textContent = message;
        } else {
            output.innerText = message;
        }
    } // End of main IF.
} // End of setText() function.

function process() {
    'use strict';

    // Get form references:
    var firstName = getInput('firstName');
    var lastName = getInput('lastName');
    var department = getInput('department');

    // Declare a variable for the output message
    var message = '';

    // Reference to where the output goes:
    var output = document.getElementById('output');

    // Add objects to Employees array
    employees.push({
        // Create a new object:
        firstName: firstName,
        lastName: lastName,
        department: department,
        hireDate: new Date()
    });

    // Iterate through Employees array to create an output message
    for (var i = 0, count = employees.length; i < count; i++) {
        message += '<h2>Employee ' + (i + 1) + '</h2> Name: ' + employees[i].lastName + ', ' + employees[i].firstName + '<br>';
        message += 'Department: ' + employees[i].department + '<br>';
        message += 'Start date: ' + employees[i].hireDate.toDateString() + '<br>';
    };

    // Display the employee object:
    setText('output', message);

    // Return false:
    return false;

} // End of process() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = process;
} // End of init() function.
window.onload = init;
