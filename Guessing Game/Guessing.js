"use strict";

// Generate a random number between 1 and 10
const targetNumber = Math.floor(Math.random() * 10) + 1;

// Initialize variables
let guess;
let attempts = 0;
let guessedCorrectly = false;

// Game loop
while (!guessedCorrectly) {
    // Prompt the user for a guess
    guess = parseInt(prompt("Guess a number between 1 and 10:"));

    // Validate the input
    while (isNaN(guess) || guess < 1 || guess > 10) {
        guess = parseInt(prompt("Invalid input. Please enter a number between 1 and 10:"));
    }

    // Increment the number of attempts
    attempts++;

    // Check if the guess is correct
    if (guess === targetNumber) {
        guessedCorrectly = true;
    } else if (guess < targetNumber) {
        alert("Too low. Try again!");
    } else {
        alert("Too high. Try again!");
    }
}

// Congratulate the user and display the number of attempts
alert(`Congratulations! You guessed the number ${targetNumber} correctly in ${attempts} attempts.`);
