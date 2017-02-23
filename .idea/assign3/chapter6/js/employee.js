/*
 Mariya Khokhlova
 mariyakhokhlova@my.smccd.edu
 CIS 114 OL
 employee.js
 Modern JavaScript, Chapter 6
 Assignment # 3.1.7
 Feb-22-2017
 */

// This script creates an array of objects using form data.

// Function called when the form is submitted.
// Function creates an array of objects

// Declare a global variable
var employees = [];

function process() {
    'use strict';

    // Get form references:
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var department = document.getElementById('department').value;

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
    output.innerHTML = message;

    // Return false:
    return false;

} // End of process() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = process;
} // End of init() function.
window.onload = init;
