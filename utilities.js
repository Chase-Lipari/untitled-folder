const fs = require('fs');

/**
 *  Read JSON data from given file and return it.
 *  
 * @param {any} filename
 */
function readFromJsonFile(filename) {
    const rawText = fs.readFileSync(filename);
    const parsedJson = JSON.parse(rawText.toString());
    return parsedJson;
}

/**
 *  Write the given data to the given file in Json format.
 * @param {any} filename
 * @param {any} data
 */
function writeToJsonFile(filename, data) {
    const stringToWrite = JSON.stringify(data);
    fs.writeFileSync(filename, stringToWrite);
}

module.exports = {
    readFromJsonFile,
    writeToJsonFile
}
 
// Server.js
// 'use strict';
// var http = require('http');
// var port = process.env.PORT || 1337;
// const model = require("./models/pokemonModel");

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });

//     const result = model.findByName("Eevee");
//     res.write("Find Result 1: " + JSON.stringify(result) + "\n");

//     const name = "Eevee";
//     const addResult = model.addPokemon(name, "Normal");
//     if (addResult) {
//         const findResult2 = model.findByName(name);
//         res.write("Find Result 2 (after add): " + JSON.stringify(findResult2) + "\n");
//         model.replacePokemon(name, "Chadily", "Grass");
//         const findResult3 = model.findByName(name);
//         res.write("Find Result 3 (after replace): " + JSON.stringify(findResult3) + "\n");
//         model.deletePokemon("Charmander");
//     }
//     res.end('Hello World\n');
// }).listen(port);