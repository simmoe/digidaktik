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

Start med funktionen display(). Hvad skal der til for at kuglen bliver vist? Du skal bruge funktionen ellipse ligesom sidst, men husk at du skal bruge cirklens variable: ball.x, ball.y etc..

Dernæst funktionen move() - hvad skal der til for at kuglen kan bevæge sig? Du skal tænke sadan, at funktionen draw() bliver kaldt hele tiden (60 gange hver sekund). Og hvad gør draw så 60 gange i sekundet? Jo, den kalder funtionerne display, move og bounce... Så hvis du i move() funktionen påvirker cirklens x- og y-værdier, så flytter den sig..

Tag til sidst funktionen bounce() - hvad skal der til for at kuglen ikke kommer til at bevæger sig udenfor skærmens højde og bredde? 

Tip: if(ball.x > width){...}

- - - -

Sværere opgaver

Se om du kan bruge funktionen map() til at sætte cirklens alpha værdi. Funktionen fill(r, g, b) har en fjerde parameter - a - som sætter fyldfarvens transparens. Hvis du for eksempel skriver fill(255, 0, 0, 127), farver du noget helt rødt, med en transparens på 50%. Funktionen map() gør det muligt at flutte en variabels værdi fra én skala til en anden. Går variablen x for eksempel fra 0-600, kan du bruge map() til at omregne dens værdi til en skala fra 0-255. Se: https://p5js.org/reference/#/p5/map

*/