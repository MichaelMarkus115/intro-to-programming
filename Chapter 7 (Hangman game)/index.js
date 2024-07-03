"use strict";
const words = ["JAVASCRIPT", "HTML", "CSS", "PYTHON", "JAVA", "PHP", "RUBY"];
let selectedWord = "";
let guessedLetters = [];
const maxTries = 6;
let currentTry = 0;

// DOM elements
const hangmanImg = document.getElementById("hangman-img");
const wordElement = document.getElementById("word");
const clueElement = document.getElementById("clue");
const lettersContainer = document.getElementById("letters");
const replayBtn = document.getElementById("replay-btn");

// Initialize the game
function init() {
    // Reset variables
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    currentTry = 0;

    // Reset UI elements
    hangmanImg.src = `hangman.png`;
    wordElement.textContent = "";
    clueElement.textContent = "Category: Programming Languages";
    lettersContainer.innerHTML = "";
    replayBtn.style.display = "none";

    // Create letter buttons
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let letter of alphabet) {
        const letterBtn = document.createElement("button");
        letterBtn.textContent = letter;
        letterBtn.addEventListener("click", () => handleGuess(letter));
        lettersContainer.appendChild(letterBtn);
    }

    // Initialize word display
    displayWord();
}

// Display the current state of the word
function displayWord() {
    let displayText = "";
    for (let char of selectedWord) {
        if (guessedLetters.includes(char)) {
            displayText += char + " ";
        } else {
            displayText += "_ ";
        }
    }
    wordElement.textContent = displayText.trim();

    // Check if the player has won
    if (!displayText.includes("_")) {
        setTimeout(() => {
            alert("Congratulations! You guessed the word.");
            replayBtn.style.display = "block";
        }, 100);
    }
}

// Handle a letter guess
function handleGuess(letter) {
    if (guessedLetters.includes(letter)) return; // Already guessed this letter

    guessedLetters.push(letter);

    if (!selectedWord.includes(letter)) {
        currentTry++;
        hangmanImg.src = `hangman${currentTry}.png`; 

        // Check if the player has lost
        if (currentTry >= maxTries) {
            setTimeout(() => {
                alert(`You lost! The word was "${selectedWord}".`);
                replayBtn.style.display = "block";
            }, 100);
        }
    }

    displayWord();
}

// Initialize the game when the page loads
document.addEventListener("DOMContentLoaded", init);
