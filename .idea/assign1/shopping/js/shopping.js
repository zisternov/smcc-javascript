/*
 Mariya Khokhlova
 mariyakhokhlova@my.smccd.edu
 CIS 114 OL
 shopping.js
 Modern JavaScript, Chapter 4
 Assignment # 1.1
 Jan-28-2017
 */

function calculate() {
'use strict';
    var total;
    var quantity = document.getElementById('quantity').value;
    var price = document.getElementById('price').value;
    var tax = document.getElementById('tax').value;
    var discount = document.getElementById('discount').value;
    var shipping = document.getElementById('shipping').value;

    // calculate initial total
    total = quantity * price;

    // factor in the tax rate
    tax /= 100;
    tax *= total;
    total += tax;

    // factor in the discount
    total -= discount;

    // factor in the shipping cost
    // question - why do I have to convert these two values to numbers and why I did not need to do it for vars above?
    total = +total + +shipping;

    document.getElementById('total').value = total.toFixed(2);
    return false;
} // End of calculate() function

function init() {
'use strict';
    var theForm = document.getElementById('theForm');
    theForm.onsubmit = calculate;
} // End of init() function

window.onload = init;

