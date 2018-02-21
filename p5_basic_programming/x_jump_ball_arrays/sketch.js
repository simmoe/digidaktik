/* Daniel Shiffman http://codingtra.in http://patreon.com/codingtrain Code for: https://youtu.be/cXgA1d_E-jY&.
Modificeret til gymnasiebrug af Simon Moe*/


var balls = [];
var ball;

function setup() {
    createCanvas(400, 600);
    ball = new Ball(width/2, height/2, 32, 4);    
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

Vi har nu oprettet et objekt - en bold, som kan hoppe. Men det smukke ved objektorienteret programmering er, at vi relativt let kan oprette flere. Mange flere. 

For at gøre det, skal vi bruge et andet centralt fænomen indenfor programmering: lister - eller på engelsk: arrays.



*/