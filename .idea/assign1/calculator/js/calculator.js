/*
 Mariya Khokhlova
 mariyakhokhlova@my.smccd.edu
 CIS 114 OL
 calculator.js
 Modern JavaScript, Chapter 4
 Assignment # 1.3
 Jan-31-2017
 */

function calculate() {
    'use strict';
    var futureValue;
    var investment = document.getElementById('investment').value;
    var rate = document.getElementById('rate').value;
    var duration = document.getElementById('duration').value;

    // convert rate to percentage
    rate /= 100;

    // calculate future investment using F = P * (1 + r)^n formula
    futureValue = investment * Math.pow((1 + rate), duration);

    // print the result back formatting it as currency
    document.getElementById('futureValue').value = '$' + futureValue.toFixed(2);
    return false;
} // End of calculate() function

function init() {
    'use strict';
    var theForm = document.getElementById('theForm');
    theForm.onsubmit = calculate;
} // End of init() function

window.onload = init;