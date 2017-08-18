/*
https://vimeo.com/channels/learningp5js/138327559 
*/

//Okay, lad os starte med at lave et objekt som dybest set bare er en cirkel
//Vi kalder den spot, og vi giver den variablene x og y (som en cirkel skal have for at være et sted)

var spot = {
    x: 50,
    y: 50,
    d: 50
};

//Lad os så tage og lave et nyt objekt til farver, hvor vi gemmer variablene rød, grøn, blå og transparens i
var col = {
    r: 50,
    g: 50,  
    b: 50,
    t: 50
};

//Så initierer vi programmet med et canvas og en baggrundsfarve
function setup(){
    createCanvas(800,600);
    background(0);
} 

//Og så bruger vi variablene til at tegne en enkel cirkel på et bestemt sted 
function draw(){
    spot.x = random(0,500);
    spot.y = random(0,500);
    spot.d = random(0,50);
    col.r = random(0,255);
    col.t = random(0,200);
    fill(col.r,col.g,col.b,col.t);
    noStroke();
    ellipse(spot.x,spot.y,spot.d,60);
}
