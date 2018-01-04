/*
Først laver vi et objekt vi kalder ball - en kugle som vi vil have til at hoppe rundt mellem skærmens hjørner. Vi giver kuglen nogle egenskaber (variable): x og y koordinater samt to hastigheder.
*/

var ball = {
  x: 300, 
  y: 200, 
  xspeed: 2,
  yspeed: -3,
  col: [200,0,200],
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
    //Her skal vi sørge for at kuglen bliver vist
}
    
function move() {
    //Her skal vi sørge for at kuglen bevæger sig
}
    
function bounce () {
    //Her skal vi sørge for at kuglen ikke hopper denfor skærmen 
}






/*
OPGAVER

Start med funktionen display(). Hvad skal der til for at kuglen bliver vist? 

Dernæst funktionen move() - hvad skal der til for at kuglen kan bevæge sig? Du skal tænke sadan, at funktionen draw() bliver kaldt hele tiden (60 gange hver sekund). Og hvad gør draw så 60 gange i sekundet? Jo, den kalder funtionerne display, move og bounce...   

Tag til sidst funktionen bounce() - hvad skal der til for at kuglen ikke kommer til at bevæger sig udenfor skærmens højde og bredde? 

Tip: if(ball.x > width){...}

*/