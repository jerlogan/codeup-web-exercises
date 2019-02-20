(function(){
    "use strict";


    var userCalculation = document.querySelector('.userInput');
    userCalculation.innerText = '0';
    var numberButton = document.querySelectorAll('.number-button'),
        plusButton = document.querySelector('.plus-button'),
        minusButton = document.querySelector('.minus-button'),
        multiplyButton = document.querySelector('.multiply-button'),
        divideButton = document.querySelector('.divide-button'),
        equalsButton = document.querySelector('.equals-button'),
        clearButton = document.querySelector('.clear-button');

// for loop for all number buttons

    for (var i = 0; i < numberButton.length; i++) {
        numberButton[i].addEventListener('click', function () {
            userCalculation.innerText += this.innerText;
        }, false);
    }

    // declaring listening events for operator buttons (+, -, *, /)

    plusButton.addEventListener('click', function() {
        userCalculation.innerText += '+';
    });



    minusButton.addEventListener('click', function() {
        userCalculation.innerText += '-';
    });



    multiplyButton.addEventListener('click', function() {
        userCalculation.innerText += '*';
    });



    divideButton.addEventListener('click', function() {
        userCalculation.innerText += '/';
    });

    //The logic behind the equals and clear buttons

    equalsButton.addEventListener('click', function() {

        console.log(userCalculation.innerText);
    });




    clearButton.addEventListener('click', function() {
        userCalculation.innerText = '0';
    });




















})();
