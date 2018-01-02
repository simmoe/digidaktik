/*
Først laver vi et objekt vi kalder ball - en kugle som vi vil have til at hoppe rundt mellem skærmens hjørner. Vi giver kuglen nogle egenskaber: x og y koordinater samt to hastigheder.
*/

var ball = {
  x: 300, 
  y: 200, 
  xspeed: 2,
  yspeed: -3,
  col1: [200,0,200]
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  display();
  move();
  bounce();
}

function display() {
    stroke(255);
    strokeWeight(4);
    fill(ball.col1);
    ellipse(ball.x, ball.y, 24, 24);
}
    
function move() {
    //Her skal vi sørge for at kuglen bevæger sig
}
    
function bounce () {
    //Her skal vi sørge for at kuglen ikke hopper denfor skærmen 
}






/*
OPGAVER

Start med funktionen move() - hvad skal der til for at kuglen kan bevæge sig? Du skal tænke sadan, at funktionen move() bliver kaldt hele tiden (60 gange hver sekund). Det gør funktionen display() også - men eftersom kuglens x og y værdier altid er de samme, flytter den sig ikke.  

Tag derefter funktionen bounce() - hvad skal der til for at kuglen ikke bevæger sig udenfor skærmens højde og bredde? 

Se om du kan lave en ny funktion - switch - 

*/