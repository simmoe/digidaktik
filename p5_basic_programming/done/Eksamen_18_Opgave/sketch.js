/*
Koderne her er skrevet med henblik på eksamen 2018 på Slotshaven Gymnasium

Programmet opretter først en variabel: circleX som sættes til 50. I funktionen draw() tegnes en ellipse, hvor variablen bruges til at definere cirklens x-værdi

Hvad der yderligere skal ske med programmet, defineres i den tilhørende eksamensopgave, som offentliggøres når eksamen skal afvikles
*/

var circleX = 50;

function setup() {
  createCanvas(500, 400);
  background(0, 0, 0);
}

function draw() {  
  noStroke();        
  fill(255, 255, 255);
  ellipse(circleX, 200, 80, 80);
}