/*
Et objekt er en måde at samle variable på. Nedenfor ser du en variabel - square - som er skrevet som en funktion. 
*/

function square() {
    this.x = 300;
    this.y = 200;
    this.w = 40;
    this.h = 50;    
    
    this.display = function(){
        rect(this.x, this.y, this.w, this.h);        
    }
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  var s = new square();
  s.display();
}






/*
OPGAVER

Start med funktionen display(). Hvad skal der til for at kuglen bliver vist? Du skal bruge funktionen ellipse() ligesom sidst, men husk at du skal bruge cirklens variable: ball.x, ball.y etc..
https://p5js.org/reference/#/p5/ellipse

Dernæst funktionen move() - hvad skal der til for at kuglen kan bevæge sig? Du skal tænke sadan, at funktionen draw() bliver kaldt hele tiden (60 gange hver sekund). Og hvad gør draw så 60 gange i sekundet? Jo, den kalder funtionerne display, move og bounce... Så hvis du i move() funktionen påvirker cirklens x- og y-værdier, så flytter den sig..

Tag til sidst funktionen bounce() - hvad skal der til for at kuglen ikke kommer til at bevæge sig udenfor skærmens højde og bredde? 

Tip: if(ball.x > width){...}

- - - -

lidt sværere opgaver

Prøv at lave en ny funktion: changeColor(){} som skal sætte cirklens farve. Se først om du kan få funktionen til at sættte cirklens farve med objektets variabel col[r, g, b]. Husk at du skal kalde din nye funktion fra draw() ligesom display, move og bounce.

Kan du skrive funktionen så den skifter mellem to forskellige farver hver gang cirklen rammer væggen?

- - - - 

Sværere opgaver

Funktionen fill(r, g, b) har en fjerde parameter - a - som sætter fyldfarvens transparens. Hvis du for eksempel skriver fill(255, 0, 0, 127), farver du noget helt rødt, med en transparens på 50%. 

Funktionen map() gør det muligt at flytte en variabels værdi fra én skala til en anden. Går variablen x for eksempel fra 0-600, kan du bruge map() til at omregne dens værdi til en skala fra 0-255. Se: https://p5js.org/reference/#/p5/map

*/