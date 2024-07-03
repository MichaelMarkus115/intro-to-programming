"use strict";

// let myFirstFunction = function () {
//     console.log("Hello World");
// }

// myFirstFunction();

// let sayHelloTo = function (name) {
//     console.log("Hello " + name + "!");
//     };

// sayHelloTo("Michael");

// let drawCats = function (howManyTimes) {
//     for (var i = 0; i < howManyTimes; i++) {
//     console.log(i + " =^.^=");
//     }
//   };

// drawCats(2);

// let double = function(number) {
//     return number * 2;
// };

// console.log(double(2) + double(5));
// console.log(double(double(5)));

// function pickRandomWord(words) {
//     return words[Math.floor(Math.random() * words.length)];
// }

// console.log(pickRandomWord(randomWords));

// let randomBodyParts = ["Face", "Nose", "Hair"];
// let randomAnimalBodyParts = ["Tail", "Foot", "Fur"]
// let randomAdjectives = ["Smelly", "Boring", "Stupid"];
// let randomAnimals = ["Fly", "Marmot", "Monkey", "Rat"];

// function pickBodyPart(BodyPart) {
//     return randomAnimalBodyParts(Math.floor(Math.random() * 3)); 
// };

// function pickAnimalPart(AnimalPart) {
//     return randomAnimalBodyParts(Math.floor(Math.random() * 3)); 
// };

// function pickAdjective(Adjective) {
//     return randomAdjectives(Math.floor(Math.random() * 3));
// };

// function pickAnimals(Animals) {
//     return randomAnimals(Math.floor(Math.random() * 4));
// };

// console.log("Your " + pickBodyPart(randomBodyParts) + " looks like the " + pickAnimalPart(randomAnimalBodyParts) + " of a " + pickAnimals(randomAnimals) + " and is " + pickAdjective(randomAdjectives));


// function fithletter(userName) {
//     if (userName.length < 5) {
//         return;
//     }

//     return "The fith letter of your name is: " + userName[4] + ".";
// }

// console.log(fithletter("Michael"));
let numbers = [1,2,3,4,5,6,7,8,9,10];

//pick random score
numbers = numbers[Math.floor(Math.random() * 10)];

function medalScore(Score) {
    if (Score < 3) {
        return "Bronze";
    }

    if (Score < 7) {
        return "Silver";
    }

    return "Gold";
};

console.log(medalScore(numbers));