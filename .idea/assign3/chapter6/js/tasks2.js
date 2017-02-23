/*
 Mariya Khokhlova
 mariyakhokhlova@my.smccd.edu
 CIS 114 OL
 tasks2.js
 Modern JavaScript, Chapter 6
 Assignment # 3.1.6
 Feb-22-2017
 */

// Need a global variable:
    var tasks = [];

// Function called when the form is submitted.
// Function adds a task to the global array.
function addTask() {
    'use strict';

    // Get the task:
    var task = document.getElementById('task');

    // Reference to where the output goes:
    var output = document.getElementById('output');

    // For the output:
    var message = '';

    if (task.value) {

        // Add the item to the array:
        tasks.push(task.value);

        // Build a message using JOIN and format it as a list:
        message = '<h2>To-Do</h2><ol><li>' + tasks.join('</li><li>') + '</li></ol>';

        // Update the page:
        output.innerHTML = message;
        document.getElementById('task').value='';


    } // End of task.value IF.

    // Return false to prevent submission:
    return false;

} // End of addTask() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = addTask;
} // End of init() function.
window.onload = init;