"Use strict";

let myFirstName;
let favoriteFood;
let birthday;
let timeOfDay;


let book;
book = "JavaScript for dummies";
console.log(book);

book = "Call of the Wild!";
console.log(book);

//////////////////////////////////DATA TYPES///////////////////////////////////////
//STRINGS
console.log("");
let string = "I am a string"; 
console.log(string.length);
console.log(string.indexOf("am"));


//NUMBERS
console.log("");
console.log("10" + 10);
console.log("10" * 10);

//BOOLEANS
console.log("");
console.log(1 < 10);
console.log(100 > 2000);
console.log(2 === 2);
console.log(false === false);
console.log(40 >= 40);
console.log("");
console.log(Boolean (0));
console.log(Boolean (false)); // What is the Boolean value of false?
console.log("apples" === "oranges"); // Is "apples" exactly equal to "oranges"?
console.log("apples" === "apples"); // Is "apples" exactly equal to "apples"?

//PROMPTS//
// let myName = prompt("Whats your name?: ");

// function sayHello(myName) {
//     return `Hi there, ${myName}`;
// }

// alert(sayHello(myName));
// console.log(sayHello(myName));

//DOCUMENT.WRITE//
// document.write("How are you?<br>");
// document.write("I'm great! Thanks!<br>");
// document.write("That's awesome!");

//COMBINING INPUT AND OUTPUT//
let toName = "Michael van den Berg";
let fromName = "The Grammy Awards";
let letterBody = "We are pleased to inform you that your song, 'Can\'t Stop Coding!,' has been voted the Best Song of All Time by the awarding committee.";
document.write("Dear " + toName + ",<br><br>");
document.write(letterBody + "<br><br>");
document.write("Sincerely,<br>");
document.write(fromName);