console.log('Hello from external JS!');

alert('Welcome to my website!');
var userFavColor = prompt('What is your favorite color?');
alert('Great, ' + userFavColor + ' is my favorite color too!');

//movie prices logic

var pricePernight = prompt('How much is each movie per night?');
var littleMermaidNights = prompt('For how many nights are you renting The Little Mermaid?');
var brotherBearNights = prompt('For how many nights are you renting Brother Bear?');
var herculesNights = prompt('For how many nights are you renting Hercules?');
var littleMermaid = pricePernight * littleMermaidNights;
var brotherBear = pricePernight * brotherBearNights;
var hercules = pricePernight * herculesNights;

var total = littleMermaid + brotherBear + hercules;

alert ('Your total price for renting all movies is $' + total + '.');

// company payment logic

var googleRate = parseInt((prompt('How much does Google pay per hour?')).replace('$', ''));
var amazonRate = parseInt((prompt('How much does Amazon pay per hour?')).replace('$', ''));
var facebookRate = parseInt((prompt('How much does Facebook pay per hour?')).replace('$', ''));
var googleWorkedHours = prompt('How many hours did you work at Google this week?');
var amazonWorkedHours = prompt('How many hours did you work at Amazon this week?');
var facebookWorkedHours = prompt('How many hours did you work at Facebook this week?');
var googleEarned = googleRate * googleWorkedHours;
var amazonEarned = amazonRate * amazonWorkedHours;
var facebookEarned = facebookRate * facebookWorkedHours;
var total = googleEarned + amazonEarned + facebookEarned;

alert('You worked at Google for ' + googleWorkedHours + ' hours, paying $' + googleRate + ' per hour. You earned $' + googleEarned + ' with Google.' +
           'You worked at Amazon for ' + amazonWorkedHours + ' hours, paying $' + amazonRate + ' per hour. You earned $' + amazonEarned + ' with Amazon.' +
           'You worked at Facebook for ' + facebookWorkedHours + ' hours, paying $' + facebookRate + ' per hour. You earned $' + facebookEarned + ' with Facebook.' +
           'After all this hard work, you have earned a toal of $' + total + '. Great job!');

//student enrollment logic

var isClassFull = prompt('Is the class full?');
var doesScheduleConflict = prompt('Does this class conflict with your schedule?');

if (isClassFull.toLowerCase() === 'no' && doesScheduleConflict.toLowerCase() === 'no')  {
    alert('Congrats! You can take the class.');
}

else {
    alert('Sorry, you cannot take the class at this time.');
}


//buying product logic

var productsBought = prompt('how many items do you have?');
var expired = prompt('Has the offer expired?');
var premiumMember = prompt ('Are you a premium member?');

if (expired.toLowerCase() === 'yes') {
    alert('Sorry, your offer is invalid.');
}

else if (expired.toLowerCase() === 'no') {

    if (productsBought < 3  && premiumMember.toLowerCase() === 'no') {
        alert('Sorry, your offer is invalid.');
    }

    else {
        alert('Your offer is valid!');
    }
}

















