/*
 Mariya Khokhlova
 mariyakhokhlova@my.smccd.edu
 CIS 114 OL
 todo.js
 Modern JavaScript, Chapter 7
 Assignment # 3.3
 Feb-23-2017
 */

// This script manages a to-do list.

// This function does all the work.
// It is immediately-invoked.
(function () {

    // Variable that stores the tasks:
    var tasks = [];

    // This function prints an array of tasks; it takes an optional prefix argument
    function printArray(prefix){
        if (typeof prefix === 'undefined') {prefix = ''}; // Assign default argument if one is not supplied
        var output = document.getElementById('output'); // Get form references
        var message = prefix; // Declare message var
        // Iterate through the array to add all items to the message
        message += '<h2>To-Do</h2><ol>';
        for (var i = 0, count = tasks.length; i < count; i++) {
            message += '<li>' + tasks[i] + '</li>';
        }
        message += '</ol>';
        // Display the message
        output.innerHTML = message;
        return false;
    }

    // Function adds a task to the global array.
    function addTask() {
        'use strict';
        var task = document.getElementById('task'); // Get form references
        // If task is entered, add it to the array and print array
        if (task.value) {
            tasks.push(task.value);
            printArray();
            // Update task input field with the blank string:
            document.getElementById('task').value = '';
        }
        return false;
    } // End of addTask() function.

    function deleteTask () { // Anonymous function to delete the task
        'use strict';
        // Invoke prompt
        var response = prompt('What task do you want to delete?');
        // Convert user input to an integer
        var taskID = parseInt(response,10);
        // Check if a task exists in array
        if  ((taskID > 0) && (taskID <= tasks.length)) { // If so, remove it from array and print the updated array
            tasks.splice(taskID - 1,1);
            printArray();
        }
        else {
            // Check if the array exists but the task is out of bound
            if (((taskID < 1) && (tasks.length > -1)) || ((taskID > tasks.length) && (tasks.length > -1))) {
                printArray('Task does not exist!')} // If so, add a message and print the array
            else {
                // In case array is empty and task does not exist, print an error
                var output = document.getElementById('output');
                var message = 'Task does not exist!'
                output.innerHTML = message;
            }
        }
    };

    // Initial setup:
    function init() {
        'use strict';
        // Get form references
        document.getElementById('add').onclick = addTask;
        document.getElementById('delete').onclick = deleteTask;
    } // End of init() function.
    window.onload = init;

})();