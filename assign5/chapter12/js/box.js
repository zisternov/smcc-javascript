/*
 Mariya Khokhlova
 mariyakhokhlova@my.smccd.edu
 CIS 114 OL
 box.js
 Modern JavaScript, Chapter 12
 Assignment # 5.1
 April-4-2017
 */
function assert(expression, message) {
    if (!expression) throw {name: 'Assertion Exception', message: message};
}

function calculate() {
    'use strict';
    var volume;
    var length = document.getElementById('length').value;
    var width = document.getElementById('width').value;
    var height = document.getElementById('height').value;

    length = Math.abs(length);
    width = Math.abs(width);
    height = Math.abs(height);

    length = parseInt(length, 10);
    width = parseInt(width, 10);
    height = parseInt(height, 10);


    assert((typeof(length) == 'number'), 'Length must be a number.');
    assert((typeof(width) == 'number'), 'Width must be a number.');
    assert((typeof(height) == 'number'), 'Height must be a number');
    assert((length > 0), 'Length must greater than 0.');
    assert((width > 0), 'Width must greater than 0.');
    assert((height > 0), 'Height must greater than 0.');

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