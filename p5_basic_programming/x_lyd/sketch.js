/**/


var s;
var vol;

function setup() {
    createCanvas(600, 400);
    s = new square(300, 300);
    // Opret et Audio input
    mic = new p5.AudioIn();
    // Start Audio Input.
    mic.start();
}

function draw() {
    background(0);
    
    vol = mic.getLevel();  
    size = map(vol, 0, 1, 5, 500);
    ellipse(100, 375, size, size);
    
    s.display();
    s.up(vol);
    
    
    //Koden nedenfor skriver teksten på skærmen
    fill(255);
    text("Volume: " + parseFloat(vol).toFixed(2), 20, 380);
}

/*
OPGAVER

square finder du i filen square.js. Lige nu har en square tre funktioner: display, move og bounce. 

Se om du kan lave en ny funktion i square - boeh(). Funktionen skal få square til at skifte farve, hvis vol > 0.1

Se så om du kan få firkanten til at skifte retning


*/