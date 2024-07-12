"use strict";

let people = [
  "Cellar",
  "Flavor",
  "Cougar",
  "Chapter",
  "Mayor",
  "Anger",
  "Senator",
  "Passenger",
  "Major",
  "Popular",
  "Tractor",
  "Thunder",
  "Pillar",
  "Border",
  "Calendar",
  "Quarter",
  "Lunar",
  "Proper",
  "Elevator",
  "Bitter",
];

people = people.sort();

document.getElementById("peopleIKnow").innerHTML = people.valueOf();
