/*Koden nedenfor er skrevet mhp at introducere programmeringsbegreber i Informatik på C-niveau i gymnasiet. Her løkker...*/


//I setup() laver man programmets skærm
function setup() {
    createCanvas(640, 360);
}

//Draw bliver kaldt hele tiden mens programmet kører
function draw() {
    background(255,204,0);
    fill("green");
    noStroke();
    textSize(12);

    //Her er så en løkke. Den skriver tallene fra 0-19 på skærmen - men den skriver dem alle sammen i koordinatet (20,40)
    for(var i = 0; i < 30; i++){
        text(i, 20 * i, 20);
    }
}

/*
OPGAVER 

Det er lidt irriterende at tallene bliver skrevet oven i hinanden. Det skyldes funktionen text(). Denne funktion fungerer sådan at man giver den tre parametre: hvad den skal skrive, samt et x-koordinat og et y-koordnat, som bestemmer hvor på skærmen det bliver skrevet. 

Kan du bruge variablen i til at gøre x-koordinatet lidt større hver gang, så tallene bliver skrevet hver for sig? 

Funktionen ellipse(x, y, width, height) tegner en cirkel på skærmen. Kan du bruge funktionen til at tegne en rund cirkel under hver af tallene?
https://p5js.org/reference/#/p5/ellipse

Funktionen fill(r, g, b) sætter den farve man tegner med på skærmen. Måske kan du skiftevis sætte farven hver gang der tegnes enten et tal eller en cirkel, så tal og cirkler får forskellig farve?

Kan du få tallene til at stå inde i cirklerne?

Funktionen rect(x, y, width, height) tegner en firkant på skærmen. Kan du bruge funktionen til at tegne en firkant rundt om hver cirkel? 

Funktionen fill(r, g, b) har faktisk en parameter til - alpha. Som er et tal mellem 0 og 255 som sætter hvor transparent farven skal være. Kan du sætte tallenes farve, så de gradvist bliver tydeligere, når int nærmer sig 20? 

- - - - 

Sværere opgaver 

Man kan sagtens lave en for-løkke inden i en anden for løkke. Altså fx:
for(var e=0; e < 20; e++){...}

Se om du kan skrive tallene fra 0-30 hen ad skærmen og tallene fra 0-20 ned ad skærmen med to for løkker

Kan du gøre det omvendt så de langsomt fader ud? Det er lidt vanskeligt, for her skal du bruge variablen int (som jo tæller fra 0 til 19) til at producere et tal som begynder med 255 og gradvist kommer nærmere nul.

Her kan du bruge en smart funktion som hedder map(var, startskala_nul, startskala_top, slutskala_nul, slutskala_top). 
Læs mere her: https://p5js.org/reference/#/p5/map


*/