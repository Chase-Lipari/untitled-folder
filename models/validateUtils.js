const pokeTypes = ["Normal", "Grass", "Fire", "Water", "Electric", "Psychic"];


function isValid1(name, type){
    let typeTrue = false;
    for(let i = 0; i < pokeTypes.length; i++){
        if(type.toLowerCase() == pokeTypes[i].toLowerCase()){
            typeTrue = true;
        }
    }

    if(name && typeTrue){
        return true;
    }
}

module.exports= {
    isValid1
}
