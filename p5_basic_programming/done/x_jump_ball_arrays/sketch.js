/* Daniel Shiffman http://codingtra.in http://patreon.com/codingtrain Code for: https://youtu.be/cXgA1d_E-jY&.
Modificeret til gymnasiebrug af Simon Moe*/


var balls = [];

function setup() {
  createCanvas(400, 600);
  for(i=0; i < 20; i++)
    balls.push(new Ball(random(width),0,random(5, 50)));
}

function draw() {
    background(0);

    for(i=0; i < balls.length; i++){
        balls[i].update();
        balls[i].show();
    }

}

 function keyPressed() {
  if (key == ' ') {
    balls[1].up();
  }
}


/*
Opgaver 

Vi har nu oprettet et objekt - en bold

*/