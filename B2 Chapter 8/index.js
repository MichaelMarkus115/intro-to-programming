"use strict";

let dreamCar = {
    make: "Oldsmobile",
    model: "98",
    color: "brown",
    year: 1983,
    bodyStyle: "Luxury Car",
    price: 4500
};

// alert("The type of dreamCar is: " + typeof dreamCar);

document.getElementById("priceTag").innerHTML = dreamCar.price;

document.getElementById("modelYear").innerHTML = dreamCar.year;

document.getElementById("body").style.backgroundColor = dreamCar.color;

document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;