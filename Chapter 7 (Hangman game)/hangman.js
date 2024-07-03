"use strict";

//array of words that wil be set for the round
let words = [
    "JavaScript",
    "Python",
    "Pancake",
    "Money",
    "Amazing"
];

//Picking random word from array for the round
let word = words[Math.floor(Math.random() * words.length)];

//Answer array
let answerArray = [];

//filling array with underscores
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

//remaining/outstanding letters
let remainingLetters = word.length;

while (remainingLetters > 0) {
    alert(answerArray.join(" "));
    let guess = prompt("Guess a letter, or click Cancel to stop playing.");

    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter!");
    } else {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}

alert(answerArray.join(" "));
alert("Good job! The answer was " + word);

