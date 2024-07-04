let rightEye = document.getElementById("righteye");
let leftEye = document.getElementById("lefteye");
let leftArm = document.getElementById("leftarm");

rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);
leftArm.addEventListener("click", moveRightLeft);

function moveUpDown(e) {
  let robotPart = e.target;
  let top = 0;

  let id = setInterval(frame, 10); // draw every 10ms

  function frame() {
    robotPart.style.top = top + "%";
    top++;
    if (top === 20) {
      clearInterval(id);
    }
  }
}

function moveRightLeft(e) {
  let robotPart = e.target;
  let left = 0;
  let id = setInterval(frame, 10); // draw every 10ms
  function frame() {
    robotPart.style.left = left + "%";
    left++;
    if (left === 70) {
      clearInterval(id);
    }
  }
}

let head = document.getElementById("head");
let wobbleTimer;

// Function to make the head wobble
function wobbleHead() {
  let rotation = 345;
  let wobbleDirection = 1;
  let wobbleDuration = 5000; // 5000ms (5 seconds) wobbling duration

  let id = setInterval(frame, 10);

  function frame() {
    head.style.transform = "rotate(" + rotation + "deg)";
    rotation += 5 * wobbleDirection;

    if (rotation >= 360 || rotation <= 330) {
      wobbleDirection *= -1;
    }
  }

  // Stop wobbling after the specified duration
  wobbleTimer = setTimeout(() => {
    clearInterval(id);
    head.style.transform = "rotate(345deg)"; // Reset head rotation after wobbling stops
  }, wobbleDuration);
}

// Call the wobbleHead function when the head is clicked
head.addEventListener("click", () => {
  clearTimeout(wobbleTimer); // Clear any existing timers before starting a new one
  wobbleHead();
});

document.getElementById("lefteye").style.backgroundColor = "purple";

document.getElementById("head").style.transform = "rotate(15deg)";

// Put a 2‐pixel‐wide, solid black border around his body.
document.getElementById("body").style.border = "2px black solid";
// Round the corners of his mouth.
document.getElementById("mouth").style.borderRadius = "4px";
// Put yellow dots around his right eye.
document.getElementById("righteye").style.border = "4px yellow dotted";
// Change his left arm’s color.
document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
// Change the text color.
document.getElementById("body").style.color = "#FF0000";
// Give Douglas hair.
document.getElementById("head").style.borderTop = "5px black solid";
//rotate to other side
document.getElementById("head").style.transform = "rotate(345deg)"
