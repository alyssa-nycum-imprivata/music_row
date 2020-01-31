const createCountryArtist = (name, age) =>{
    return {
        "name": name,
        "genre": "Country",
        "age": age
    }
}

const createPopArtist = (name, age) =>{
    return {
        "name": name,
        "genre": "Pop",
        "age": age
    }
}
const createFunkArtist = (name, age) =>{
    return {
        "name": name,
        "genre": "Funk",
        "age": age
    }
}

const createRapArtist = (name, age) =>{
    return {
        "name": name,
        "genre": "Rap",
        "age": age
    }
}

const createBluegrassArtist = (name, age) =>{
    return {
        "name": name,
        "genre": "Bluegrass",
        "age": age
    }
}

const jumpStopRecords = [
    createFunkArtist("Dre Funkz", 25),
    createRapArtist("Dusta Grimes", 21),
    createRapArtist("Loyonce Branis", 27)
];

const chattenRecords = [
    createCountryArtist("Bruce Atikins", 23),
    createBluegrassArtist("Bartholomew Danielson", 23),
    createCountryArtist("Avilee Dall", 19)
];

const polarRecords = [
    createPopArtist("Jensen Brown", 20),
    createPopArtist("Austin Kinkaid", 22)
];


console.log("JumpStop Records", jumpStopRecords);
console.log("Chatten Records", chattenRecords);
console.log("Polor Records", polarRecords);