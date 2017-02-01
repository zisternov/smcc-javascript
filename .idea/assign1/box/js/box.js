/*
 Mariya Khokhlova
 mariyakhokhlova@my.smccd.edu
 CIS 114 OL
 box.js
 Modern JavaScript, Chapter 4
 Assignment # 1.2
 Jan-28-2017
 */

function calculate() {
    'use strict';
    var volume;
    var length = document.getElementById('length').value;
    var width = document.getElementById('width').value;
    var height = document.getElementById('height').value;


    length = Math.abs(length);
    width = Math.abs(width);
    height = Math.abs(height);

    //calculate volume
    volume = length * width * height;

    document.getElementById('volume').value = volume.toFixed(2);
    return false;
} // End of calculate() function

function init() {
    'use strict';
    var theForm = document.getElementById('theForm');
    theForm.onsubmit = calculate;
} // End of init() function

window.onload = init;