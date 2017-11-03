// P5 Skitseblok

var inp;
var btn;
var x=0;

function setup(){
    createCanvas(400,300);
    background(0);
    inp = createElement('Input');
    inp.position(20, height + 5);
    btn = createElement('Button', 'Go');
    btn.position(inp.x + inp.width, height + 5);
    btn.mousePressed(setText);
}

function draw() {
    fill(0,255,0);
    ellipse(x, 200,40,40);
}

function setText(){
    x = inp.value();
}
