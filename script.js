let persoon = {
  naam: "Saskia",
  leeftijd: 48,
  cijfers: [7, 10, 9]
}

console.log(persoon);

console.log(persoon.naam);
console.log(persoon.leeftijd);

persoon['naam'] = "Jeannette";
console.log(persoon.naam);

console.log(persoon.cijfers);

let kleuren = ["groen", "blauw", "rood"];
console.log(kleuren);
console.log(kleuren.length);
console.log(kleuren[0]);
console.log(kleuren[kleuren.length - 1]);

kleuren.push("geel");
console.log(kleuren);

kleuren.push(5);
console.log(kleuren);

kleuren.push({groeten: "Hoi ik ben een object"});
console.log(kleuren);
console.log(kleuren[kleuren.length - 1]);


const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {
        favourite_food: "fish",
        medium_liked_food: "dried fruits",
        disliked_food: "walnuts"
    }
},
{
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
        favourite_food: "tuna",
        medium_liked_food: "canned food",
        disliked_food: "all fruits"
    }
},
{
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: ["Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
        favourite_food: "meaty things",
        medium_liked_food: "tuna",
        disliked_food: "canned food"
    }
}
]

let laatsteKat = catBreeds[catBreeds.length - 1];
console.log("Naam kattensoort 3:", laatsteKat.name);

let eersteKat = catBreeds[0];
console.log("Energylevel kattensoort 1:", eersteKat.energy_level);

let tweedeKat = catBreeds[1];
console.log("Eerste temperament kat 2:", tweedeKat.temperament[0]);

console.log("Laatste temperament kat 3:", catBreeds[catBreeds.length - 1].temperament[catBreeds[catBreeds.length - 1].temperament.length - 1]);
let derdeKat = catBreeds[2];
console.log("Laatste temperament kat 3:", derdeKat.temperament[derdeKat.temperament.length - 1]);
let lengteTemperamentKatDrie = catBreeds[2].temperament.length;
console.log("Laatste temperament kat 3:", catBreeds[2].temperament[lengteTemperamentKatDrie-1])

console.log("Favo voedsel van kat 3:", derdeKat.food.favourite_food);
