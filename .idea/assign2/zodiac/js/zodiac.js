/*
 Mariya Khokhlova
 mariyakhokhlova@my.smccd.edu
 CIS 114 OL
 zodiac.js
 Modern JavaScript, Chapter 5
 Assignment # 2.2
 Feb-9-2017
 */

function findSign() {

    // Be strict:
    'use strict';

    // Variable for array of traits:
    var traits = [
        'Quick-witted, charming, lucky, adaptable, bright, versatile, lively, smart',
        'Honest, energetic, intelligent, flamboyant, flexible, diverse, confident',
        'Loyal, sociable, courageous, diligent, steady, lively, adaptable, smart',
        'Honorable, philanthropic, determined, optimistic, sincere, sociable',
        'Intelligent, adaptable, quick-witted, charming, artistic, sociable',
        'Loyal, reliable, thorough, strong, reasonable, steady, determined',
        'Enthusiastic, courageous, ambitious, leadership, confidence, charismatic',
        'Trustworthy, empathic, modest, diplomatic, sincere, sociable, caretakers',
        'Lucky, flexible, eccentric, imaginative, artistic, spiritual, charismatic',
        'Philosophical, organized, intelligent, intuitive, elegant, attentive, decisive',
        'Adaptable, loyal, courageous, ambitious, intelligent, adventurous, strong ',
        'Tasteful, crafty, warm, elegant, charming, intuitive, sensitive, calm',
    ];

    // Variable to store the zodiac sign:
    var zodiacSign;

    // Variable to store the path to image:
    var pathToImage;

    // Variable to output the trait:
    var message;

    // Get a reference to the form elements:
    var year = document.getElementById('year');
    var month = document.getElementById('month');
    var output = document.getElementById('output');
    var image = document.getElementById('image');

    // Convert the year to a number:
    if (year && year.value) {
        year = parseInt(year.value, 10);
    }

    // Check for valid data:
    if (month && month.value && year && (year >= 1000 && year < 10000)) {

        // Calculate the remainder
        var remainder = year % 12;
        console.log('remainder after devision is ' + remainder);

        // Check the month of birth and if January use the zodiac sign of previous year:
        if (month.value == 'january') {remainder -= 1};

        // Check if remainder is -1 and if so change it to 11:
        if (remainder == -1) {remainder = 11};

        console.log('remainder after checking month is ' + remainder);

        // Assign the zodiac sign without considering a month:
        switch (remainder) {
            case 0:
                zodiacSign = 'monkey';
                break;
            case 1:
                zodiacSign = 'rooster';
                break;
            case 2:
                zodiacSign = 'dog';
                break;
            case 3:
                zodiacSign = 'pig';
                break;
            case 4:
                zodiacSign = 'rat';
                break;
            case 5:
                zodiacSign = 'ox';
                break;
            case 6:
                zodiacSign = 'tiger';
                break;
            case 7:
                zodiacSign = 'rabbit';
                break;
            case 8:
                zodiacSign = 'dragon';
                break;
            case 9:
                zodiacSign = 'snake';
                break;
            case 10:
                zodiacSign = 'horse';
                break;
            case 11:
                zodiacSign = 'goat';
                break;
            default:
                zodiacSign = "Zodiac sign cannot be calculated";
                break;
        } // End of switch.

        console.log('Zodiac Sign is ' + zodiacSign);

        pathToImage = './images/' + zodiacSign + '.jpg';
        console.log('Path is ' + pathToImage);

        message = traits[remainder];
        console.log('trait is ' + message);

        // TALK TO ANDREW
        // output.innerHTML = message;
        console.log('output is ' + output);

        document.getElementById('image').src = pathToImage;

    } else { // Show an error:
        document.getElementById('year').value = 'should be in 1000-9999 range.';
    }

    // Return false to prevent submission:
    return false;

} // End of findSign() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = findSign;
} // End of init() function.
window.onload = init;