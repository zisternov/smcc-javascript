/*
 Mariya Khokhlova
 mariyakhokhlova@my.smccd.edu
 CIS 114 OL
 image_gallery.js
 Murach's JQuery, Chapter 5
 Assignment # 4
 Mar-24-2017
 */

// This script swaps the image and its caption when the image link is clicked
// This function goes through all images, gets their URL and caption.
// It then updates the image and a caption within the gallery p
$(document).ready(function () {
    // Preload images
    $("li a").each(function () {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");

    });
    // Setup event handlers
    $("li a").click(function (evt) {
        // Update image
        var imageUrl = $(this).attr("href");
        $("img").attr("src", imageUrl);

        // Update caption
        var caption = $(this).attr("title");
        $("#caption").text(caption);

        // Cancel the default action on the link
        evt.preventDefault();
    });

    // Move focus on the first link
    $("li:first-child a").focus();
})