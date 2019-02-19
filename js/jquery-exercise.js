"use strict";

$('.header-one').click(function() {
    $(this).css('background-color', 'green');
});

$('.paragraph').dblclick(function(){
    $(this).css('font-size', '18px');
});

$('.unordered-list li').hover(
    function () {
        $(this).css('color', 'red')
    },
    function () {
        $(this).css('color', 'black')
    }
);









