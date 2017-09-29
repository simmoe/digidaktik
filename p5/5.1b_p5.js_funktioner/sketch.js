/*
https://vimeo.com/channels/learningp5js/139587733
*/

//ørst laver vi et objekt vi kalder ball - en kugle som vi vil have til at hoppe rundt mellem skærmens hjørner. 

var input, greeting, button;

var ball = {
  x: 300, 
  y: 200, 
  xspeed: 4, 
  yspeed: 0,
  dimension: 24
}

function setup() {
  createCanvas(600, 200);
  //lav et input felt i skitsen og giv det en position
  input = createInput();
  input.position(20, 65);

  //lav en knap ved siden af input feltet     
  button = createButton('Tryk');
  button.position(input.x + input.width, 65);
  //Når der bliver trykket på knappen, så kald funktionen greet
  button.mousePressed(greet);

  greeting = createElement('h2', 'what is your name?');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
  
}

function draw() {
  display();    
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

function display(){
//Det første vi gør er at tegne bolden - det kan altsammen puttes ind i en funktion, se opgaverne - det kunne vi kalde display()
  //background(0);
  stroke(0);
  strokeWeight(4);
  noFill();
  ellipse(ball.x, ball.y, ball.dimension, ball.dimension);    
}

function greet() {
  var name = input.value();
  greeting.html('hello '+name+'!');
  input.value('');

  for (var i=0; i<200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2*PI));
    text(name, 0, 0);
    pop();
  }
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

4  Prøv at oprette en input form, så man kan skrive cirklens variable dynamisk ind i programmet

*/