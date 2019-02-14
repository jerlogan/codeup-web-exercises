/* Create a function that returns a random day of the week */

var randomIndex = Math.floor(Math.random() * 6);
var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function randomDay() {
    console.log(daysOfWeek[randomIndex]);
}

randomDay();
