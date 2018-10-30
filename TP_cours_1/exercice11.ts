// Fini

interface Pet {
    nom: string,
    age: number,
    poids: number,
}

let tabPets: Array<Pet> = [];
let pet1 : Pet = {
    nom: 'cacahuete',
    age: 60,
    poids: 10
}

let pet2: Pet = {
    nom: 'patoche',
    age: 20,
    poids: 3
}

let pet3: Pet = {
    nom: 'poupi',
    age: 12,
    poids: 14
}

tabPets.push(pet1, pet2, pet3);

tabPets.sort((a, b) => a.age > b.age ? 1 : (a.age < b.age ? -1 : 0));

console.log(tabPets);