/* Daniel Shiffman http://codingtra.in http://patreon.com/codingtrain Code for: https://youtu.be/cXgA1d_E-jY&.
Modificeret til gymnasiebrug af Simon Moe*/


var ball;

function setup() {
  createCanvas(400, 600);
  ball = new Ball();
}

function draw() {
    background(0);

    ball.update();
    ball.show();

}

 function keyPressed() {
  if (key == ' ') {
    ball.up();
  }
}


/*
Opgaver 

Se opgaverne i ball.js. 

*/