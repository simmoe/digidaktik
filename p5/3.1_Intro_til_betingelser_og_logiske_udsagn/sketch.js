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
  
  //stroke bestemmer farven på den næste streg der tegnes
  stroke(255);
  //strokeweight bestemmer hvor tyk den skal være
  strokeWeight(4);
  //Navnet noFill() taler for sig selv - ingen baggrundsfarve til at starte med 
  noFill();
    
  ellipse(300, 200, 100, 100);
        
}

/*

OPGAVE - PLENUM
Programmet tegner en cirkel uden farve. Vi skal nu indføre et logisk statement, som gør at cirklen får en farve, hvis man kører musen over midten af programmet. 

Koordinatet for musens markør hedder altid: mouseX, mouseY.

Et if(){} statement er opbygget som et spørgsmål og et svar. 

Lad os prøve at ændre baggrundsfarven også. 

_ _ _ _ _ _ _ _

OPGAVER - SELVSTÆNDIGT

Prøv at få programmet til at tegne en anden baggrundsfarve (udskift noFill() med fill(r,g,b)) på cirklen hvis X er mindre end 300..

Få programmet til at skifte mellem tre forskellige farver i cirklen. Når musens X er hhv før, på og efter cirklen på x-aksen

Få programmet til at lave baggrunden helt blå når musen er præcis over punktet (200,200) og ikke ellers (tip: brug operatoren ==)

Få programmet til at tegne en rød cirkel et sted hvis x er større end 400 OG y er mindre end 100 (tip: brug operatoren &&)


Lidt sværere..

frameCount er en variabel som indeholder det antal frames der er gået siden programmet startede. Der er tres frames i sekundet. Kan du skifte baggrundsfarve på hele skitsen når der er gået tre sekunder?  tip: if(frameCount > ...)

Lav to variabler xPos og speed - og få cirklen til at bevæge sig til venstre når musen er til venstre for midten - og omvendt  

Prøv at lave en if() betingelse inden i en anden if betingelse. Prøv at tegne en streg gennem midten af skitsen 

line(mouseX, 0, mouseX, height);

Hvis x er større end 200 og y er mindre end 100


*/