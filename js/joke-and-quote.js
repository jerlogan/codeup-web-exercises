(function() {
    "use strict";

    //Generate Chuck joke

    function chuckJoke() {
        $.ajax("http://api.icndb.com/jokes/random").done(function (joke) {
            var string = '';
            string += joke.value.joke;
            $('.message-center').append(string);
        });
    }

    $('.left-button').click(function(){
        $('.message-center').html('');
        chuckJoke();
    });

    //Generate Programming Quote

    function generateQuote() {
        $.ajax("https://cors-anywhere.herokuapp.com/http://quotes.stormconsultancy.co.uk/random.json").done(function(data) {
            console.log(data);
            var string = '<p><b>' + "''" + data.quote + "''" + '</b></p>' + '<p>' + '- ' + data.author + '</p>';
            $('.message-center').append(string);
        });
    }

    $('.right-button').click(function() {
        $('.message-center').html('');
        generateQuote()
    });

})();
