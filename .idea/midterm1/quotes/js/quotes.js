/*
 Mariya Khokhlova
 mariyakhokhlova@my.smccd.edu
 CIS 114 OL
 quotes.js
 Modern JavaScript, Chapter 8
 Assignment # midterm1
 Feb-23-2017
 */

// This script manages quotes list.

// This function does all the work.
// It is immediately-invoked.
(function () {

    // Variable that stores the tasks:
    var quotes = [
        'The best preparation for tomorrow is doing your best today. H. Jackson Brown, Jr.',
        'My best friend is the one who brings out the best in me. Henry Ford',
        'An investment in knowledge pays the best interest. Benjamin Franklin'
    ];

    // This function prints an array of tasks
    function printArray(srcArray){
        message = '';
        // Iterate through the array to add all items to the message
        message += '<h2>Quotes:</h2><ol>';
        for (var i = 0, count = srcArray.length; i < count; i++) {
            message += '<li>' + srcArray[i] + '</li>';
        }
        message += '</ol>';
        // Display the message
        U.setText('output', message);
    }

    // This function checks if a quote ID exists in the array
    function checkQuoteID(srcArray, id) {
        // Check if a quote exists in array
        if  ((id > 0) && (id <= srcArray.length)) { return true }
        else {U.setText('error','Quote does not exist!')} // If so, add a message and print the array
    }

    // Function adds a task to the global array
    function addQuote() {
        'use strict';
        var quote = U.$('quote'); // Get form references
        // If task is entered, add it to the array and print array
        if (quote.value) {
            quotes.push(quote.value);
            printArray(quotes);
            // Update task input field with the blank string:
            U.$('quote').value = '';
        }
        return false;
    } // End of addQuote() function.

    // This function edits a quote
    function modifyQuote () {
        'use strict';
        var response = prompt('What quote do you want to edit?'); // Ask for the quote if to edit
        var id = parseInt(response, 10); // Convert id to integer
        if (checkQuoteID(quotes,id)) { // Check if id exists
            var modifiedQuote = prompt('Edit quote',quotes[id-1]); // Display the quote to edit
            quotes[id-1] = modifiedQuote; // Save the modified quote to array
            printArray(quotes); // Update the list of quotes on the UI
        }

    }

    // This function deletes a quote from the array
    function deleteQuote () {
        'use strict';
        // Invoke prompt
        var response = prompt('What quote do you want to delete?'); // Ask for the quote if to delete
        var id = parseInt(response,10); // Convert id to integer
        if (checkQuoteID(quotes,id)) { // Check if id exists
            quotes.splice(id - 1,1); // Remove the quote from array
            printArray(quotes); // Update the list of quotes on the UI
        }
    };

    // This function removes the error from the UI
    function removeError() {
        'use strict';
        var message = U.$('error').innerHTML;
        message = ''; // Clear innerHTML of the Error element
        U.setText('error',message); // Update the element on the UI

    }

    // Initial setup:
    function init() {
        'use strict';
        printArray(quotes);
        U.addEvent(U.$('add'), 'click', addQuote);
        U.addEvent(U.$('modify'), 'click', modifyQuote);
        U.addEvent(U.$('delete'), 'click', deleteQuote);
        U.addEvent(U.$('quote'), 'focus', removeError);
        U.addEvent(U.$('modify'), 'mouseover', removeError);
        U.addEvent(U.$('delete'), 'mouseover', removeError);
    } // End of init() function.
    window.onload = init;

})();