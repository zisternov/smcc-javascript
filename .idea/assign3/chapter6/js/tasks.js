/*
 Mariya Khokhlova
 mariyakhokhlova@my.smccd.edu
 CIS 114 OL
 tasks.js
 Modern JavaScript, Chapter 6
 Assignment # 3.1.3
 Feb-21-2017
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

    // Reference to where the random task goes:
    var randomTask = document.getElementById('randomTask');

    // For the output:
    var message = '';
    var randomTaskID;

    if (task.value) {

        // Add the item to the array:
        tasks.push(task.value);

        // Update the page:
        message = '<h2>To-Do</h2><ol>';
        for (var i = 0, count = tasks.length; i < count; i++) {
            message += '<li>' + tasks[i] + '</li>';
        }
        message += '</ol>';
        output.innerHTML = message;

        // Update task input field with the blank string:
        document.getElementById('task').value='';


    } // End of task.value IF.

    // Check if there is at least one task
    if (tasks.length > 0)
    {
        randomTaskID = Math.floor((Math.random() * tasks.length));
        console.log('Random Task ID is ' + randomTaskID);
        randomTask.innerHTML = 'Random task for today is ' + tasks[randomTaskID];
    }
    // Return false to prevent submission:
    return false;

} // End of addTask() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = addTask;
} // End of init() function.
window.onload = init;