/*Koden nedenfor er skrevet mhp at introducere programmeringsbegreber i Informatik på C-niveau i gymnasiet. Her løkker...*/


function setup() {
    createCanvas(640, 360);
    background(255,204,0);
}

function draw() {
    fill('green');
    noStroke();
    textSize(20);
    
    for(i=1; i<21; i++){
        text(i, i*30, 100);
    }
}