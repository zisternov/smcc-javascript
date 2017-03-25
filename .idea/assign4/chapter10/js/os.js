/*
 Mariya Khokhlova
 mariyakhokhlova@my.smccd.edu
 CIS 114 OL
 os.js
 Modern JavaScript, Chapter 10
 Assignment # 4
 Mar-23-2017
 */

// This script creates two linked select menus.

// Function clears out all the existing options and adds the new ones.
// Function takes menu IS and array of menu options as  arguments.
function populateMenu(os, options) {
    'use strict';

    // Clear existing options
    while (os.firstChild) {
        os.removeChild(os.firstChild);
    }

    // Populate menu with options
    for (var i = 0, count = options.length; i < count; i++) {
        var opt = document.createElement('option');
        opt.text = opt.value = options[i];
        os.appendChild(opt);
    }
}

// Function called when the first menu's value changes.
// Function updates the second menu.
function updateMenu() {
    'use strict';

    // Get references to the menus:
    var os = document.getElementById('os');
    var os2 = document.getElementById('os2');

    // Determine the options:
    if (os.value == 'Windows') {
        var options = ['7 Home Basic', '7 Home Premium', '7 Professional', '7 Ultimate', 'Vista', 'XP'];
    } else if (os.value == 'Mac OS X') {
        options = ['10.7 Lion', '10.6 Snow Leopard', '10.5 Leopard', '10.4 Tiger'];
    } else options = null;

    // Update the menu:
    if (options) {
        os2.disabled = false;
        os2.style.visibility = 'visible';

        // Call populateMenu function to clear existing options and add new ones
        populateMenu(os2, options);

    } else { // No selection!
        // Disable the element
        os2.disabled = true;
        // Change visibility to hidden
        os2.style.visibility = 'hidden';
    }
} // End of updateMenu() function.

// Establish functionality on window load:
window.onload = function () {
    'use strict';

    // Get the select menu:
    var os = document.getElementById('os');

    // Call populateMenu function to clear existing options and add new ones
    populateMenu(os, ['Choose', 'Windows', 'Mac OS X']);

    // Add an event handler:
    os.onchange = updateMenu;

    // Create the other select menu:
    var os2 = document.createElement('select');
    os2.id = 'os2';
    // Disable the element
    os2.disabled = true;
    // Change visibility to hidden
    os2.style.visibility = 'hidden';
    os.parentNode.appendChild(os2);

};