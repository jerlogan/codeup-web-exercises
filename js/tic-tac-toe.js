$(document).ready(function(){
   "use strict";

   //icon switcher: turn number starts at 1 and keeps going up.

   var turnNumber = 1;
   var gameStarted = false;


   //Logic for changing the html to which player's turn it is...and their specified icon.

    $('.start-game').click(function(e) {
        e.preventDefault();

        $(this).hide();
        $('.player-one-turn-info').show();
        gameStarted = true;
        console.log(gameStarted);

    });

    //conditional checking which turn it is: player 1 (number is odd) or player 2 (number is even)

console.log(gameStarted);

        $('.small-square').click(function () {
            if (gameStarted) {
                if (turnNumber % 2 === 1) {
                    $(this).addClass('player-one-icon');
                    $('.player-two-turn-info').show();
                    $('.player-one-turn-info').hide();
                    console.log(turnNumber);


                } else if (turnNumber % 2 === 0) {
                    $(this).addClass('player-two-icon');
                    $('.player-one-turn-info').show();
                    $('.player-two-turn-info').hide();
                    console.log(turnNumber);
                }
                turnNumber++;
            }
        });

















});