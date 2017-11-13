// P5 Skitseblok

var inp;
var btn;
var x=0;

function setup(){
    createCanvas(390, 240);

    inp = createElement('Input');
    inp.position(20, height + 5);
    btn = createElement('Button', 'Go');
    btn.position(inp.x + inp.width, height + 5);
    btn.mousePressed(setText);
    
    //video
    capture = createCapture(VIDEO);
    capture.size(320, 240);
    capture.hide();
}

function draw() {
    image(capture, 0, 0, 320, 240);
    filter('INVERT');
}

function setText(){
    x = inp.value();
}
