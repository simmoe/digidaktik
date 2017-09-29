/* 
6.7 p5.js clicking on objects
Code for video https://vimeo.com/channels/learningp5js/141919520
*/

var bubbles = [];
var texter = 0;

function setup() {
  createCanvas(600, 400);
  makeBubbles();
}

function mousePressed() {
  for (var i = 0; i < bubbles.length; i++) {
       bubbles[i].clicked();
  }
}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}

function makeBubbles(){
  for (var i = 0; i < 10; i++) {
    var x = random(width);
    var y = random(height);
    bubbles.push(new Bubble(x, y));
  }
}

/*
OPGAVER

1  Lav et point system, så man får et point for at klikke på en bubble - brug funktionen text() til at skrive pointene på skærmen

2  Kan i sørge for at man ikke kan få flere point for at klikke på den samme bubble?

3  Kan i gøre så boblerne hopper mere tilfældigt rundt så de er sværere at klikke på?

4  Kan i sørge for at boblerne bliver væk når man har klikket på dem?

5  Kan i sørge for at man "vinder spillet" fx med en tekstmeddelelse når alle boblerne er væk?

6  Og at der kommer en "genstart knap" så spillet starter forfra? 

*/