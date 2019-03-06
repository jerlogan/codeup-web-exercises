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
        $('ul').each(function (i, e) {
            $(this).children().last().css('background-color', 'yellow')
        })
    });

    // When any h3 is clicked, the lis underneath it should be bolded. Use font-weight: bold to achieve this.

    $('h3').click(function () {
        $(this).next().children().each(function(i, e){
            $(this).slideToggle();
        });
    });

    // When any list item is clicked, first li of the parent ul should have a font color of blue.

    $('li').click(function () {
        $(this).parent().children().first().css('color', 'blue');
    });

    //Picture frame logic


    $('button.button1').click(function(e){
        e.preventDefault();
        $('div.div1').removeClass('picture-frame1 picture1')
                     .addClass('picture-frame2 picture2');
        $('div.div2').removeClass('picture-frame2')
                     .addClass('picture-frame1')
    });

    $('button.button2').click(function(e){
        e.preventDefault();
        $('div.div2').removeClass('picture-frame1 picture1')
                     .addClass('picture-frame2 picture2');
    });

    $('button.button3').click(function(e){
        e.preventDefault();
        $('div.div3').removeClass('picture-frame1 picture1')
                     .addClass('picture-frame2 picture2');
    });

    $('span').click(function(){
       $('#newsletter').slideUp();
    });

    //pop-up spam window

    $('.register-popup').hide();

    function fadeIn() {
        $('.register-popup').fadeIn();
        $('.close').click(function(){
            $('.register-popup').fadeOut();
        })
    }

    setTimeout(function() {
        fadeIn()
    }, 8000);
});