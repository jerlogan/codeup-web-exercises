(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    //============================================================================

    planets.unshift('the sun');

    console.log('Adding "The Sun" to the beginning of the planets array.');
    console.log(planets);

    //----------------------------------------------------------------------------

    planets.push('pluto');

    console.log('Adding "Pluto" to the end of the planets array.');
    console.log(planets);

    //----------------------------------------------------------------------------

    planets.shift('the sun');

    console.log('Removing "The Sun" from the beginning of the planets array.');
    console.log(planets);

    //----------------------------------------------------------------------------

    planets.pop('Pluto')

    console.log('Removing "Pluto" from the end of the planets array.');
    console.log(planets);

    //----------------------------------------------------------------------------

    console.log(planets.indexOf('Earth'));

    console.log('Finding and logging the index of "Earth" in the planets array.');

    //----------------------------------------------------------------------------

    planets.reverse();

    console.log("Reversing the order of the planets array.");
    console.log(planets);

    //----------------------------------------------------------------------------

    planets.sort();

    console.log("Sorting the planets array.");
    console.log(planets);
})();