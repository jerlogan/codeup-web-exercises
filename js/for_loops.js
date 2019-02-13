(function() {

    "use strict"

    /* Create a function named showMultiplicationTable that accepts a
    number and console.logs the multiplication table for that number
    (just multiply by the numbers 1 through 10) */

    function showMultiplicationTable(num) {

        for (var i = 1; i <= 10; i++) {
            var newNum = num * i;
            console.log(num + ' x ' + i + ' = ' + newNum);
        }
    }

        console.log(showMultiplicationTable(5));

    /* Use a for loop and the code from the previous lessons to generate
    10 random numbers between 20 and 200 and output to the console whether
    each number is odd or even. */

    for (var i = 1; i <= 10; i++) {

        var num = (Math.floor(Math.random() * 180) + 20);

        if (num % 2 !== 0) {
            console.log(num + ' is odd');
        } else {
            console.log(num + ' is even');
        }
    }

    /* Create a for loop that uses console.log to create
    the output shown below. */


    for(i = 1; i < 10; i++) {
        console.log(String(i).repeat(i))
    }



    // Create a for loop that uses console.log to create the output shown below.

    for (var i = 100; i >= 5; i - 5) {
        console.log(i);
        i = i - 5;
    }

})();

