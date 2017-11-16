/* 
6.9 p5.js checking objects intersection part 1
Code for video https://vimeo.com/channels/learningp5js/141919521
*/

//To variable til at holde styr på de to bubble objekter
var b1;
var b2;
var points = 0;

function setup() {
  createCanvas(600, 400);
  //Bubble objekternes constructor funktion kaldes med x og y koordinater
  b1 = new Bubble(250, 200);
  b2 = new Bubble(350, 200);
}

function draw() {
  background(0);
  //update flytter boblerne rundt og display viser dem 
  b1.update();
  b2.update();
  b1.display();
  b2.display();
  
  //prøv at forklar hvordan intersects metoden er skruet sammen?
  if (b1.intersects(b2)) {
    b1.changeColor();
    b2.changeColor();
  }
}


/*
OPGAVER

1  Prøv at indsætte en tredje bubble i programmet
2  Kan i lave en tæller som giver "point" hver gang boblerne rammer hinanden?
3  Kan i sørge for at bobler forsvinder når de rører hinanden - og i stedet dukker op et nyt sted?
4  Kan i ved hjælp af musen skabe noget interaktion der gør skitsen til et lille spil-agtigt?

*/