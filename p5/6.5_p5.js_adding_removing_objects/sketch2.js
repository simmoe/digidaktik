/* 
6.5 p5.js Adding Removing Objects 
Code for https://vimeo.com/channels/learningp5js/141211392
Concepts introducing push(), splice() 1:30
*/

var bubbles = [];

function setup() {
  createCanvas(600, 400);
}

function mouseDragged() {
  bubbles.push(new Bubble(mouseX, mouseY));
}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();

    if (bubbles.length > 50) {
      bubbles.splice(0, 1);
    }

  }
}

function Bubble(x, y) {
  this.x = x;
  this.y = y;

  this.display = function() {
    stroke(255);
    strokeWeight(2);
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

1 . Kig koden igennem og prøv at forklar hvordan den fungerer. 
2 . Prøv at gøre slangen kortere eller længere
3 . Det ville være fedt, hvis slangens objekter efterhånden fadede ud. Lige nu sættes der en fast alpha værdi på fill i display() funktionen - kan den gøres dynamisk, så den sættes med en parameter der følger objektets plads i arrayet?


*/