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

    function printArray(suffix){
        if (typeof suffix === 'undefined') {suffix = ''};
        var output = document.getElementById('output');
        var message = suffix;
        console.log('suffix is ' + suffix);
            message += '<h2>To-Do</h2><ol>';
            for (var i = 0, count = tasks.length; i < count; i++) {
                message += '<li>' + tasks[i] + '</li>';
            }
            message += '</ol>';
            output.innerHTML = message;
            // Update task input field with the blank string:
        return false;
    }

    // Function called when the form is submitted.
    // Function adds a task to the global array.
    function addTask() {
        'use strict';
        var task = document.getElementById('task');
        if (task.value) {
            tasks.push(task.value);
            printArray();
            // Update task input field with the blank string:
            document.getElementById('task').value = '';
        } // End of task.value IF.

        // Return false to prevent submission:
        return false;
    } // End of addTask() function.


    // Initial setup:
    function init() {
        'use strict';
        document.getElementById('add').onclick = addTask;
        document.getElementById('delete').onclick = function () {
            'use strict';
            var response = prompt('What task do you want to delete?');
            var taskID = parseInt(response,10);
            if  ((taskID > 0) && (taskID <= tasks.length)) {
                tasks.splice(taskID - 1,1);
                printArray();
            }
            else {
                if (((taskID < 1) && (tasks.length > -1)) || ((taskID > tasks.length) && (tasks.length > -1))) {
                    printArray('Task does not exist!')}
                    else {
                    var output = document.getElementById('output');
                    var message = 'Task does not exist!'
                    output.innerHTML = message;
                }
            }
        };
    } // End of init() function.
    window.onload = init;

})();