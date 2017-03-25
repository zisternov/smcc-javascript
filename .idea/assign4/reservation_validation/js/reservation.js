/*
 Mariya Khokhlova
 mariyakhokhlova@my.smccd.edu
 CIS 114 OL
 reservation.js
 Murach's JQuery, Chapter 8
 Assignment # 4
 Mar-24-2017
 */

$(document).ready(function () {
// Move focus to the Arrival date
    $("fieldset input:eq(0)").focus();

    // Validate text and date fields
    $("[name=reservation_form]").validate(
        {
            rules: {
                arrival_date: {required: true, date: true}, // Validate arrival date
                nights: {required: true, digits: true, min: 1}, // Validate nights
                name: {required: true}, // Validate name
                email: {required: true, email: true}, // Validate email
                phone: {required: true, phoneUS: true} // Validate phone and force US format

            }, // End rules
            // Overwrite the default messages for nights
            messages: {
                nights: {
                    digits: "Please enter a valid duration of your stay.",
                    min: "Minimum 1 night stay is required."
                }

            }, // End messages
        }) // End validate
}); // End ready
