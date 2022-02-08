'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
const model = require("./models/pokemonModelFileAsync");

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
   model.addPokemon("Eevee", "Normal")
    const result = model.addPokemonValid1("eve2", "normal")
    if(result){
        res.write("Successfully wrote valid1 pokemon");
    }else{
        res.write("Failed to write valid1 pokemon")
    }
    const result2 = model.addPokemonValid2("Eve", "normal")
    if(result2){
res.write("Successfully wrote valid2 pokemon")
    }else{
        res.write("Failed to write valid1 pokemon")
    }
    const findName = "Eve";
    const findResult = model.findByName(findName);
    if(findResult != null){
        // res.write("Succesfully found pokemon: " + )
    }
    res.end('Hello World\n');
}).listen(port);