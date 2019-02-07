"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

// Even or odd

confirm("Would you like to enter a number?");
var pickedNumber = prompt('What is your number?');

if (pickedNumber % 2 === 0) {
    alert('Your number is even.')
}
else {
    alert('Your number is odd.')
}

//number plus 100

alert('Your number plus 100 is ' + (parseInt(pickedNumber) + 100) + '.');

//if number is negative or positive

if (pickedNumber < 0) {
    alert('Your number is negative.');
}

else {
    alert('Your number is positive.');
}

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

//The following code is commented out because switch case statement below does the same thing (see line 86).

// function analyzeColor(color) {
//
//     if (color === 'blue') {
//         return ('blue is the color of the sky!');
//     }
//
//     else if (color === 'red') {
//         return ('Strawberries are red');
//     }
//
//     else if (color === 'cyan') {
//         return ("I don't know anything about cyan.");
//     }
//
//     else {
//         return ("Sorry, I don't know that color yet.");
//     }
// }

function analyzeColor(color) {

    switch (color) {
        case 'blue':
            return ('blue is the color of the sky!');
            break;
        case 'red':
            return ('Strawberries are red');
            break;
        case 'cyan':
            return ("I don't know anything about cyan.");
            break;
        default:
            return ("Sorry, I don't know that color yet.");
            break;
    }
}



console.log(analyzeColor('blue'));
console.log(analyzeColor('red'));
console.log(analyzeColor('cyan'));
console.log(analyzeColor('green'));



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

//see line 86


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userColor = analyzeColor(prompt('type a color.').toLowerCase());
alert(userColor);


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


function calculateTotal(luckyNumber, totalAmount) {
    switch (luckyNumber) {
        case 1:
            return totalAmount - (totalAmount * .1);
            break;
        case 2:
            return totalAmount - (totalAmount * .25);
            break;
        case 3:
            return totalAmount - (totalAmount * .35);
            break;
        case 4:
            return totalAmount - (totalAmount * .5);
            break;
        case 5:
            return 0;
            break;
        default:
            return totalAmount;
            break;
    }
}

    console.log(calculateTotal(0, 100));
    console.log(calculateTotal(1, 100));
    console.log(calculateTotal(2, 100));
    console.log(calculateTotal(3, 100));
    console.log(calculateTotal(4, 100));
    console.log(calculateTotal(5, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var userTotalBill = prompt('What is your total bill?');
var newTotal = calculateTotal(luckyNumber, userTotalBill);
alert('Your lucky number was ' + luckyNumber + ', your price before the discount was ' +
    + userTotalBill + ', and your price after the discount is ' + newTotal + '.')


var mermaidDays = prompt("How many days did you rent Little Mermaid?");
var bearDays = prompt("How many days did you rent That Bear Movie?");
var herculeDays = prompt("How many days did you rent Hercules?");
var totalDays = mermaidDays + bearDays + herculeDays;
var cost = parseInt((prompt("How much did the movies cost per day?")).replace("$", ""));

var movietotal = totalDays * cost;
alert("You will have to pay $" + movietotal);

