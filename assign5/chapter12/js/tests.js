/*
 Mariya Khokhlova
 mariyakhokhlova@my.smccd.edu
 CIS 114 OL
 tests.js
 Modern JavaScript, Chapter 12
 Assignment # 5.1
 April-11-2017
 */

// Define the tests:
var myTests = function () {
    'use strict';

    // Test that $() returns an element when provided with a valid ID:
    function testGetElement() {
        jsUnity.assertions.assertNotNull(U.$('output'));
    }

    // Test that $() returns null when provided with an invalid ID:
    function testGetInvalidElement() {
        jsUnity.assertions.assertNull(U.$('doesNotExist'));
    }

    // Added by Mariya Khokhlova
    // Test that $() returns undefined when provided with no argument
    function testGetNoArgument() {
        jsUnity.assertions.assertUndefined(U.$());
    }

    // Added by Mariya Khokhlova
    // Test that $() returns undefined when provided with a wrong type of argument
    function testGetInvalidTypeofArgument() {
        jsUnity.assertions.assertUndefined(U.$(true));
    }

    // Added by Mariya Khokhlova
    // Test that $() returns Object type when provided with a valid ID
    function testGetReturnObjectType() {
        jsUnity.assertions.assertTypeOf('object', U.$('output'));
    }

    // Test that setText() returns true when provided with a valid ID:
    function testSetText() {
        jsUnity.assertions.assertTrue(U.setText('output', 'test'));
    }

    // Test that setText() returns false when provided with an invalid ID:
    function testCannotSetText() {
        jsUnity.assertions.assertFalse(U.setText('doesNotExist', 'test'));
    }

    // Added by Mariya Khokhlova
    // Test that setText() returns false when provided with no argument
    function testSetTextNoArgument() {
        jsUnity.assertions.assertFalse(U.setText('output'));
    }

    // Added by Mariya Khokhlova
    // Test that setText() returns false when provided with the wrong type of argument
    function testSetInvalidTypeOfArgument() {
        jsUnity.assertions.assertFalse(U.setText('output', true));
    }

}; // End of myTests anonymous function.

// Define the logging function:
jsUnity.log = function (message) {
    U.$('results').innerHTML += '<p>' + message + '</p>';
};

// Run the tests:
jsUnity.run(myTests);
