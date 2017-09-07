/*
https://vimeo.com/channels/learningp5js/139587733
*/

//ørst laver vi et objekt vi kalder ball - en kugle som vi vil have til at hoppe rundt mellem skærmens hjørner. 

var ball = {
  x: 300, 
  y: 200, 
  xspeed: 4, 
  yspeed: 0,
  dimension: 24
}

function setup() {
  createCanvas(600, 200);
}

function draw() {
  //Det første vi gør er at tegne bolden - det kan altsammen puttes ind i en funktion, se opgaverne - det kunne vi kalde display()
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(ball.x, ball.y, ball.dimension, ball.dimension);
  
  //så skal vi sørge for at bolden vender retning hvis den rammer ind i siden af skærmen..
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  } 
  //eller toppen af skærmen.. - det kunne vi kalde bounce()
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }
  
  //til sidst skal vi flytte bolden - move()
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}

/*
OPGAVER

1  Prøv at lægge alle de ting der har med at vise bolden at gøre, ind i en funktion. Funktionen skal ligge UDENFOR draw() 

display(){
  background(0);
  stroke etc..
}

Nu kan du KALDE din funktion fra draw(), som dermed bliver meget nemmere at overskue

2  Prøv at lægge alt hvad der har med at bolden hopper at gøre i en anden funktion: bounce()

3  Prøv at lægge alt hvad der har med at flytte bolden i en tredje funktion: move()

*/