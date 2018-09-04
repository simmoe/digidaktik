/*
https://vimeo.com/channels/learningp5js/139013336
*/

var rand;
var x = 0;

function setup() {
    createCanvas(400, 400);
    rand = random(200,300);
    background(0);
    stroke(255);
    fill('deeppink');
}

function draw() {
    while(x < rand){
        ellipse(x, rand, 40, 40); 
        x+=3;
    }
}
