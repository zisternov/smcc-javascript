/*
Mariya Khokhlova
mariyakhokhlova@my.smccd.edu
CIS 114 OL
tasks.js
Modern JavaScript, Chapter 14
Assignment # 5.2.3 - 5.2.4
April-11-2017
*/

// Function for creating Task objects.
// Function takes two arguments: the task name and its priority.
function Task(name, priority) {
    'use strict';
	
	// Assign the paremeters to variables:
	this.name = name;
	this.priority = priority;

	// Set the completion to false (i.e., not completed).
	this.completed = false;
	
	// Define a toString() method:
	this.toString = function() {
		return this.name + ' (' + this.priority + ')';
	};
	
} // End of Task function.

// Function removes user input from the form
function resetInput() {
	document.getElementById('task').value = ''; // Clear user input from Task text field
	document.getElementById('priority').value = 'normal'; // Reset Priority to default
}

// Function that sets up the work:
window.onload = function(){
    'use strict';

	// Form references:
	var task = document.getElementById('task');
	var priority = document.getElementById('priority');
	var output = document.getElementById('output');

	// Variable that stores the tasks:
	var tasks = []; 

	// Function called when the form is submitted.
	// Function adds a task to the array.
	document.getElementById('theForm').onsubmit = function() {
		var message = ''; // Declare empty message variable
		
		// Create a new Task:
		var t = new Task(task.value, priority.value);

		// Add it to the array:
		tasks.push(t);
		
		// Build the list of all tasks in the array
		for (var i = 0; i < tasks.length; i++ ) {
			message = message + tasks[i].toString() + '<br>';
		}

		// Add the header to the list of tasks
		message = '<h1>There are now <b>' + tasks.length + '</b> item(s) in the to-do list.</h1><br>' + message;
		output.innerHTML = message;

        // Reset user input
		resetInput();

	    // Return false to prevent submission:
        return false;

	}; // End of onsubmit anonymous function.

}; // End of onload anonymous function.