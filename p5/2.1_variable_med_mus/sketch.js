/*
Se en bedre formidling af indholdet end min:
https://vimeo.com/channels/learningp5js/138327548
*/


function setup() {
  createCanvas(600, 400);
  background(255, 100, 0);}

function draw() {
  // ellipse
  fill(100, 100, 100);
    stroke(255);
  ellipse(mouseX, mouseY, 50, 50);
}

// try mousePressed function 
function mousePressed() {
  background(255, 100, 0);
}