var square;

function setup() {    
    createCanvas(600, 400);
    square = new square(width/2, 100);
}

function draw() {
    background(0);    

    square.display();
    square.update();
    square.right();
        
}

/*
OPGAVER

Denne sketch skal oprette forbindelse til mikrofonen og gemme input volumen i variablen vol; 

I PLENUM

Lad os først kigge på p5 referencen under libraries/audio Audio in. Som man kan se skal vi oprette et p5.AudioIn() objekt - det er allerede skrevet for os, gud ske lov. Prøv at lkigge til venstre i brackets under libraries/p5.sound.js - små 13.000 linjer kode, der bl.a gør det meganemt at optage lyd. Men altså heldigvis ikke noget vi skal skrive selv. 

mic = new p5.AudioIn();

Bagefter kan vi kalde metoden start() på mic objektet:

mic.start();

Lad os så oprette en variabel til at holde mikrofonens lydstyrke:

var vol;

Og senere i draw() kan vi så kalde en række metoder på objektet - fx mic.getLevel() som åbenlyst nok returnerer den nuværende volumen:

vol = mic.getLevel() * 10;  

Lad os lave en tekst nederst til venstre der viser den aktuelle lydstyrke

fill(255);
text("Volume: " + parseFloat(vol*10).toFixed(2), 20, 380);

Opgave 1
Se om du kan bruge ellipse(x, y, w, h) til at lave en rød volumecirkel lige ved siden af teksten, som (med sin størrelse) viser hvor høj lydstyrken er. 

Firkanten finder du i filen square.js. Lige nu har en square tre funktioner: display(), update() og right(). Gå over til filen square.js for at løse opgaverne;

*/