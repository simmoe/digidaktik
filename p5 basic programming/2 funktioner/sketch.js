/*
https://vimeo.com/channels/learningp5js/139587733
*/

//Først laver vi et objekt vi kalder ball - en kugle som vi vil have til at hoppe rundt mellem skærmens hjørner. Vi giver kuglen nogle egenskaber: x og y koordinater samt to hastigheder.

var ball = {
  x: 300, 
  y: 200, 
  xspeed: 4, 
  yspeed: -3
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  move();
  bounce();
  display();
}

function move() {
    //Her skal vi sørge for at kuglen bevæger sig
    x = x + xspeed;
}

function bounce() {
    //Her skal vi sørge for at kuglen ikke hopper denfor skærmen
}

function display() {
  stroke(255);
  strokeWeight(4);
  fill(200, 0, 200);
  ellipse(ball.x, ball.y, 24, 24);
}


/*
OPGAVER

Start med funktionen move() - hvad skal der til for at kuglen kan bevæge sig? 

Tag derefter funktionen bounce() - hvad skal der til for at kuglen ikke bevæger sig udenfor skærmens højde og bredde?

*/