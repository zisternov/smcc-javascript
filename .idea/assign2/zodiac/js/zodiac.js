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

    // Declare variables:
    var zodiacSign; // Variable to store the zodiac sign
    var pathToImage; // Variable to store the path to image

    // Get a reference to the form elements:
    var year = document.getElementById('year');
    var month = document.getElementById('month');
    var outputTrait = document.getElementById('outputTrait');
    var outputSign = document.getElementById('outputSign');
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

        // Generate the path to the image based on zodiacSign:
        pathToImage = './images/' + zodiacSign + '.jpg';

        // Output the calculated zodiac sign and associated trait to the form:
        outputSign.innerHTML = zodiacSign.toUpperCase(); // Converts the string to upper case
        outputTrait.innerHTML = traits[remainder];

        // Update the image in the form:
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