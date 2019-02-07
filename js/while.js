"use strict"

/* Create a while loop that
uses console.log() to create the output shown below. */


// var i = 2;
//
// while(i < 65537) {
//     console.log(i);
//     i = i * 2;
// }

/* An ice cream seller can't go home until she sells all of
her cones. Write a JS program that generates a random number
between 50 and 100 representing the amount of cones to sell.
Your code should generate numbers between 1 and 5,
simulating the amount of cones being bought by her clients.
Use a do-while loop to log to the console the amount of
cones sold to each person. This is how you get the random
numbers. */

//generates random number between 50 and 100

var conesLeftToSell = Math.floor(Math.random() * 50) + 50;
var conesBought;

do {
    //generates random number between 1 and 5
    conesBought = Math.floor(Math.random() * 5) + 1;
    conesLeftToSell = conesLeftToSell - conesBought;
    console.log(conesBought + ' cone(s) have just been sold...there are '
        + conesLeftToSell + ' cone(s) left.');
} while (conesLeftToSell - conesBought > 0);

