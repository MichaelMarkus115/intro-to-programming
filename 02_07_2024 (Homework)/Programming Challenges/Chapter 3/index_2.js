let randomBodyParts = ["Face", "Nose", "Hair"];
let randomAnimalBodyParts = ["Tail", "Foot", "Fur"]
let randomAdjectives = ["Smelly", "Boring", "Stupid"];
let randomAnimals = ["Fly", "Marmot", "Monkey", "Rat"];

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
let randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random() * 3)];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
let randomAnimal = randomAnimals[Math.floor(Math.random() * 4)];

let randomInsult = "Your " + randomBodyPart + " is more " + randomAdjective + " than a " + randomAnimal + "'s " + randomAnimalBodyPart;
console.log(randomInsult);

