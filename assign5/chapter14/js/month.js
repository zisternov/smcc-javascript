/*
 Mariya Khokhlova
 mariyakhokhlova@my.smccd.edu
 CIS 114 OL
 tasks.js
 Modern JavaScript, Chapter 14
 Assignment # 5.2.7
 April-11-2017
 */

// Extend Date object to add literal representation of a month
Date.prototype.getMonthName = function () {
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'];
    return monthNames[this.getMonth()];
};

window.onload = function () {
    'use strict';
    var myTestDate = new Date(); // Declare a new date
    // Add the name of the month to Output
    document.getElementById('output').innerText = 'Current month is ' + myTestDate.getMonthName();
};

