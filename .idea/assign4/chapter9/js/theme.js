/*
 Mariya Khokhlova
 mariyakhokhlova@my.smccd.edu
 CIS 114 OL
 theme.js
 Modern JavaScript, Chapter 9
 Assignment # 4
 Mar-23-2017
 */

// Function called to establish the theme:
function setTheme(theme) {
    'use strict';

    // Get reference to CSS file
    var css = document.styleSheets[0];

    if (css.deleteRule) { // Check if insertRule/deleteRule is supported (most modern browsers)
        switch (theme) {
            case 'aTheme':
                // Delete existing rule
                css.deleteRule(0);
                // Insert aTheme rule
                css.insertRule('body {font-size: 48px;background-color: #f1f2d8;color: #1b1d26;}', 0);
                break;
            case 'bTheme':
                // Delete existing rule
                css.deleteRule(0);
                // Insert bTheme rule
                css.insertRule('body {font-size: 22px;font-variant: small-caps;' +
                    'background-color: #f6f6f6;color: #0b77b7;}', 0);
                break;
        }
    }
    else switch (theme) { // fall back for IE8 and below
        case 'aTheme':
            // Delete existing rule
            css.removeRule(0);
            // Add aTheme rule
            css.addRule('body', '{font-size: 48px;background-color: #f1f2d8;color: #1b1d26;}', 0);
            break;
        case 'bTheme':
            // Delete existing rule
            css.removeRule(0);
            // Insert bTheme rule
            css.addRule('body', '{font-size: 22px;font-variant: small-caps;' +
                'background-color: #f6f6f6;color: #0b77b7;}', 0);
            break;
    }

} // End of setTheme() function.


// Function called when the link is clicked.
function setThemeCookie(e) {
    'use strict';

    // Get the event object:
    if (typeof e == 'undefined') e = window.event;

    // Prevent the default behavior:
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }

    // Get the event target:
    var target = e.target || e.srcElement;

    // Set the cookie:
    var expire = new Date(); // Today!
    expire.setDate(expire.getDate() + 7); // One week!
    COOKIE.setCookie('theme', target.id, expire);
    console.log("target is " + target + " target id is " + target.id)

    // Update the theme:
    setTheme(target.id);

    return false; // Prevent the default behavior.

} // End of setThemeCookie() function.

// Establish functionality on window load:
window.onload = function () {
    'use strict';

    // Add click event handlers to each theme link:
    document.getElementById('aTheme').onclick = setThemeCookie;
    document.getElementById('bTheme').onclick = setThemeCookie;

    // Get the cookie's value:
    var theme = COOKIE.getCookie('theme');

    // If there was a value, set the theme:
    if (theme) {
        setThemeCookie(theme);
    }
}; // End of onload anonymous function.