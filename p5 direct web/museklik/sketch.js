var i;
var fade = false;
function setup() {
  createCanvas(600, 400);
  background(255, 100, 0);
  i = 100;
}

function draw() {
    if(fade) fadeBubble();
}

function mouseClicked() {
    fade = true;
}

function fadeBubble(){
    stroke(255,i);
    noFill();
    ellipse(mouseX, mouseY, i, i);
    i--;    
    if(i < 1) {
        fade = false;
        i = 100;
    }
}