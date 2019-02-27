"use strict";

$(document).ready(function() {

    // makes the faq answers toggle invisible and visible

    $('.toggle-answers').click(function (e) {
        e.preventDefault();
        $('.toggle').toggleClass('invisible');
    });

    // makes each faq question toggle highlighted (yellow background)

    $('dt').click(function () {
        $(this).toggleClass('highlighted');
    });

    //when clicked, the last li in each ul will have a yellow background

    $('.toggle-last-li').click(function (e) {
        e.preventDefault();
        $('li').each(function (index) {
            if ((index + 1) % 4 === 0) {
                $(this).css('background-color', 'yellow');
            }
        })
    });

    // When any h3 is clicked, the lis underneath it should be bolded. Use font-weight: bold to achieve this.

    $('h3').click(function () {
        $(this).next().children().css('font-weight', 'bold');
    });

    // When any list item is clicked, first li of the parent ul should have a font color of blue.

    $('li').click(function () {
        $(this).parent().children().first().css('color', 'blue');
    });

    //Picture frame logic


});