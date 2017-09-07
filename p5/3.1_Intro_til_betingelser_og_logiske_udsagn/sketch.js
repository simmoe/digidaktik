/*
https://vimeo.com/channels/learningp5js/138935676

Det du lærer: Betingelser; (conditional statements) - hvis dit, så dat!! Hvordan laver et program beslutninger mens det kører? Ved at spørge om den og den variabel er sådan og sådan. 

Hvoradan kan et program gå af forskellige veje undervejs? Indtil nu har vi kun set hvordan et program kører gennem funktionerne setup og draw. MEN nu skal vi se på hvordan et program kan køre på FORSKELLIGE måder, afhængig af hvad brugeren gør. 

For at gøre det, skal vi lære om BETINGET logik: hvis dit, så dat. BOOLSK logik: sandt eller falsk. 

Dermed kan vi skrive et program som gør noget HVIS noget er sandt, ellers gør det noget andet.

Skriv et program som gør brug af betingede udsagn!

Der er i øvrigt flere:

>= (større end eller lig med)
<= (mindre end eller..)
== (lig med)

*/

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  
  stroke(255);
  strokeWeight(4);
  noFill();
  
  if (mouseX > 300) {
    fill(255, 0, 200);
  }
  
  ellipse(300, 200, 100, 100);
}

/*

OPGAVER 

1  Prøv at få programmet til at tegne en anden baggrundsfarve hvis X er mindre end 300

2  Få programmet til at skifte mellem tre forskellige farver i cirklen. Når musens X er hhv før, på og efter cirklen 

*/