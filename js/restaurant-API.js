(function(){
    "use strict";

    $.ajax("data/restaurants.json").done(function(data){
        data.forEach(function(restaurant) {
            var restaurantHours = (restaurant.operating_hours);
            console.log(restaurantHours);



        });




    });

    var currentTime = new Date($.now());
    console.log(currentTime);
    console.log(currentTime.toDateString());
    console.log(currentTime.toTimeString());











})();