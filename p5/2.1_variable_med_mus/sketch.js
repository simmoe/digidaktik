/*
https://vimeo.com/channels/learningp5js/138327548
*/


function setup() {
  createCanvas(600, 400);
  background(255, 80, 80);
}

function draw() {
  // ellipse
  fill(200, 200, 200);
    stroke(255);
  ellipse(mouseX, mouseY, 50, 50);
}

// try mousePressed function 
function mousePressed() {
  background(255, 100, 0);
}