/* 
6.4 p5.js The Constructor Function 
Code for https://vimeo.com/channels/learningp5js/141211393
*/

//Array som skal bruge til at opbevare bubble objekter
var bubbles = [];

//Som i kan se bliver setup og draw metoderne voldsomt forenklede af at skrive kode med objekter på denne måde. Det nye her, er keywordet "new". Her fortæller du programmet at det skal lave 4 nye Bubble objekter. Hvordan ved den overhovedet at der er noget der hedder Bubble objekter? Jo, den leder efter en constructor funktion - en funktion, som indeholder et helt nyt og interessant, Bubble objekt. 

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 4; i++) {
    bubbles[i] = new Bubble();
  }
}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}

//det er så her det hele sker. function Bubble(){} konstruerer bubble objekter. Der er et par ting i syntaksen som kan være forvirrende - brugen af this. hele tiden, hvad kommer det af? Jo, når objektet refererer til this.x så VED objektet at det er dens egen variabel. Objektet KUNNE nemlig også bruge variabler udefra (GLOBALE variabler), vi kunne for eksempel have defineret nogle variable før setup(){} som vi ville bruge i objektet. Men dette lille eksempel-objekt, har kun LOKALE variable. Derfor skriver vi this. foran. (læs det som min.x) 

function Bubble() {
  this.x = random(0, width);
  this.y = random(0, height);
  
  //Det samme gælder for funktioner i objektet. Derfor er syntaksen ændret en lille smule i forhold til hvad i har set tidligere. 
  this.display = function() {
    stroke(255);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  }

  this.move = function() {
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);

  }  
}

/*
OPGAVER 

1  Prøv at instantiere 20 bubbles i stedet for 4
2  Prøv at få objekterne til at bevæge sig lige så langsomt ned i højre hjørne af skærmen
3  Prøv at implementere en bounce() funktion, så objekterne vender om når de rammer kanten 
4  Prøv at give musemarkøren indflydelse på objekternes hastighed 
5  Prøv at implementere et nyt objekt - squares  
6 Prøv at instantiere 10 squares  og hundrede bubbles
7 Prøv at flytte hele Bubble(){} koden over i en ny fil du kalder for Bubbles.js. Gå så ind i index.hml og se godt efter hvordan de andre filer er blevet linket til. Se om du kan få koden til at virke med Bubble i en selvstændig fil. 
8 Prøv at give musemarkøren indflydelse på objekternes retning (Hint: prøv at bruge map funktionen til det, så du får en værdi mellem -1 og 1) 

*/