/*
 Mariya Khokhlova
 mariyakhokhlova@my.smccd.edu
 CIS 114 OL
 slide_show.js
 Murach's JQuery, Chapter 9
 Assignment # 5
 April-11-2017
 */

$(document).ready(function () {
    var nextSlide = $("#slides img:first-child");
    var nextCaption;
    var nextSlideSource;
    var isPlayClicked = false; // Variable to store the state of slideshow
    var timer; // Variable for toggling slide show on and off

    // Function for updating the slide properties to avoid code repetition
    var updateSlideProperties = function() {
        nextSlideSource = nextSlide.attr("src");
        nextCaption = nextSlide.attr("alt");
        $("#slide").attr("src", nextSlideSource).fadeIn(1000);
        $("#caption").text(nextCaption).fadeIn(1000);
    };

    // Function for running the slide show
    var runSlideShow = function () {
        $("#caption").fadeOut(1000);
        $("#slide").fadeOut(1000,
            function () {
                if (nextSlide.next().length == 0) {
                    nextSlide = $("#slides img:first-child");
                }
                else {
                    nextSlide = nextSlide.next();
                }
                updateSlideProperties();
            }
        )
    };

    // Setup event handler for Play/Pause button
    $([id = play]).click(function () {
        if (!isPlayClicked) { // If slide show is not started
            timer = setInterval(runSlideShow, 3000); // Start slide show
            $([id = play]).attr("value", "Pause"); // Change the button value to "Pause"
            $([id = play]).siblings().attr("disabled", "disabled"); // Disable "Prev"/"Next" button
            isPlayClicked = true; // Mark slide show as started

        }
        else { // If slide show is started
            timer = clearInterval(timer); // Stop slide show
            $([id = play]).attr("value", "Start"); // Change the button value to "Start"
            if (nextSlide.next().length != 0) { // Check if next slide exists
                $([id = next]).removeAttr("disabled"); // If so, enable "Next" button
            }
            if (nextSlide.prev().length != 0) { // Check is previous slide exists
                $([id = prev]).removeAttr("disabled"); // If so, enable "Prev" button
            }
            isPlayClicked = false; // Mark slide show as not started
        }

    });

    // Setup event handler for Next button
    $([id = next]).click(function () {
        $([id = next]).attr("disabled", "disabled"); // Disable "Next" button
        $([id = prev]).removeAttr("disabled"); // Enable "Prev" button
        nextSlide = nextSlide.next(); // Move to the next slide
        updateSlideProperties(); // Update slide properties
        if (nextSlide.next().length != 0) { // Check if next slide exists
            $([id = next]).removeAttr("disabled"); // If so, enable "Next" button
        }
    });

    // Setup event handler for Prev button
    $([id = prev]).click(function () {
        $([id = prev]).attr("disabled", "disabled"); // Disable "Prev" button
        $([id = next]).removeAttr("disabled"); // Enable "Next" button
        nextSlide = nextSlide.prev(); // Move to the previous slide
        updateSlideProperties();
        if (nextSlide.prev().length != 0) { // Check if previous slide exists
            $([id = prev]).removeAttr("disabled"); // If so, enable "Prev" button
        }
    });
});