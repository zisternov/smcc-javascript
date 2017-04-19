/*
 Mariya Khokhlova
 mariyakhokhlova@my.smccd.edu
 CIS 114 OL
 subset_expansion.js
 Murach's JQuery, Chapter 5
 Assignment # midterm2
 Apr-18-2017
 */

// Function to expand / collapse multi-paragraph content
$(document).ready(function () {
    $("a").click(function () { // Event handler for click event on "a" element
        $(this).prev().toggleClass("hide"); // Toggle "Hide" class for previous sibling of current "a" element
        if ($(this).prev().hasClass("hide")) { // Check if previous sibling has "hide" class
            $(this).text("Show more") // If so, set text to "Show more"
        }
        else {
            $(this).text("Show less") // Else, set text to "Show less"
        }
    }) // end of $("a").click
}); // end of $(document).ready


