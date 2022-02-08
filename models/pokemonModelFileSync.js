const utils = require('../utilities.js');
const db = './data/pokemonDatabase.json';
const pokeTypes = ["Normal", "Grass", "Fire", "Water", "Electric", "Psychic"];
const validate = require("./validateUtils.js");

function addPokemon(name, type){
    const allpokemon = utils.readFromJsonFile(db)
    console.log(allpokemon[0]);
    allpokemon.push({"name":name, "type":type});
    console.log(allpokemon[0])
    utils.writeToJsonFile(db, allpokemon);
}


// find and return the pokemon with the given name
// returns null if name is not valid or isnt in db.
function findByName(name){
    const valid = validate.isValid1(name, "normal");
    if(!valid){
        return null;
    }
    let allpokemon = utils.readFromJsonFile(db)
    const firstMatch = allpokemon.find((pokemon,index) =>{
        return(pokemon.name == name)
    })
    return firstMatch;
}

function addPokemonValid1(name, type){
    const valid = validate.isValid1(name, "normal")
if(valid){
    addPokemon(name, type);
    return {"name": name, "type": type}
}else{
    return null;
}

}
function addPokemonValid2(name,type){
    const valid = validate.isValid1(name, type);
    if(valid) {
        addPokemon(name, type);
        return {"name":name, "type":type};
    }else{
        return null;
    }
}

// function isValid1(name, type){
//     let typeTrue = false;
//     for(let i = 0; i < pokeTypes.length; i++){
//         if(type.toLowerCase() == pokeTypes[i].toLowerCase()){
//             typeTrue = true;
//         }
//     }

//     if(name && typeTrue){
//         return true;
//     }
// }


function replacePokemon(originalName, newName, newType){

    // Validate input
    if (!validate.isValid1(originalName, 'normal'))
        return false;

    // Get the database
    const pokemonAll = utils.readFromJsonFile(pokemonJsonFile);

    // Get the pokemon
    const match = pokemonAll.find(pokemon => pokemon.name == originalName)

    // If the pokemon wasn't found, return false
    if (!match)
        return false;

    // Change the name and type if it's found
    match.name = newName;
    match.type = newType;

    utils.writeToJsonFile(pokemonJsonFile, pokemonAll);

    return true;
}

function deletePokemon(name){
    
}

module.exports= {
    addPokemon,
    addPokemonValid1,
    addPokemonValid2,
    findByName
}


