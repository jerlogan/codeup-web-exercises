(function() {
    "use strict"


//The first for loop will conntinue the prompt until the user picks
// an odd number betwee 1 and 50.

    for (var i = 1; i < 50; i++) {

        var userNum = prompt('Pick an odd number between 1 and 50.');
        if (userNum % 2 !== 0 && userNum <= 50) {
            console.log('OK, we will skip number ' + userNum + '.');
            break;
        } else {
            continue;
        }
    }

    //the second for statement cycles through numbers 1 through 50

    for (i = 1; i < 50; i++) {

        if (i % 2 !== 0 && userNum <= 50) {
            if (userNum == i) {
                console.log('Yikes! Skipping number ' + userNum);
            } else {
                console.log('Here is an odd number: ' + i);
            }
        }
    }
})();