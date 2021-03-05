const axios = require("axios");

//Fetch this URL
axios('https://pokeapi.co/api/v2/pokemon/bulbasaur')
//And then...
    .then(function (response) {
        //Use the 'data'
        const pokemon = response.data;

        //In this example, the above URL will return an object
        //with data on the Pokemon requested
        console.log(chalk.blue.bold("This is a " + pokemon.name + " and its ID is " + pokemon.id));
    })
    //Fetch this URL
axios('https://pokeapi.co/api/v2/pokemon/pikachu')
//And then...
    .then(function (response) {
        //Use the 'data'
        const pokemonp = response.data;

        //In this example, the above URL will return an object
        //with data on the Pokemon requested
        console.log(gradient.rainbow(pokemonp.name + " is my favorite pokemon and his ID is " + pokemonp.id));
    })
    .catch(function (error) {
        //handle error
        console.log("Error: " + error);
    });
    const chalk = require('chalk');
    const log = console.log;
    const gradient = require('gradient-string');

    axios('https://www.affirmations.dev/')
    //And then...
        .then(function (response) {
            //Use the 'data'
            const affirmation = response.data;
    
            //In this example, the above URL will return an object
            //with data on the Pokemon requested
            console.log(gradient.pastel('♥ ♥ Pikachu says "' + affirmation.affirmation + '." Try again for more words of affirmation from Pikachu ♥ ♥'));
        })   