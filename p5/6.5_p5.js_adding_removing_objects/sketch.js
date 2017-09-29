/* 
6.5 p5.js Adding Removing Objects 
Code for https://vimeo.com/channels/learningp5js/141211392
Concepts introducing push(), splice() 1:30
*/

var bubbles = [];

function setup() {
  createCanvas(600, 400);
}

//Funktionen push hjælper os med at tilføje nye objekter til vores array
function mousePressed() {
  bubbles.push(new Bubble(mouseX, mouseY));
}

function draw() {
  background(0);
  //I begyndelsen er der slet ingen objekter i arrayet - men efterhånden som brugeren klikker, kommer der flere
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}

//Læg mærke til at constructor funktionen Bubble har fået to parametre: musens x og y koordinat. På den åde kan vi - når vi kalder new Bubble(x,y){} i mousePressed funktionen, sørge for at den bliver oprettet lige der hvor vi trykker. 
function Bubble(x, y) {
  this.x = x;
  this.y = y;

  this.display = function() {
    stroke(255);
    fill(255, 0, 150, 50);
    ellipse(this.x, this.y, 24, 24);
  }

  this.move = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);

  }
}

/*

OPGAVER

1 . skift sketch.js ud med sketch2.js i index.html og hop over til den fil for at se næste opgave.

*/