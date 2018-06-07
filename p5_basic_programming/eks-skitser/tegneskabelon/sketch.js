var diam = 20;
var drawing = false;
var color_1 = [100,100,100];
var color_2 = [76,187,23];
var the_color = color_1;
var button_1;

function setup() {
    createCanvas(600, 400);
    background(255, 100, 0);

    button_1 = createButton("grøn");
    button_1.position(0, height);
    button_1.mousePressed(changeColorToGreen);

    button_2 = createButton("tilfældig");
    button_2.position(button_1.width + 10, height);
    button_2.mousePressed(changeColorToRandom);
}

function draw() {
    if(drawing){
        fill(the_color);
        stroke(255,255,255);
        ellipse(mouseX, mouseY, diam, diam);
    }
}

function mouseClicked() {
    if(mouseY < height){
        drawing = !drawing;
    }
}

function changeColorToGreen(){
    the_color = color_2;
}

function changeColorToRandom(){
    var randomColors = [];
    for(i=0; i<3; i++){
        randomColors[i] = random(0, 255);
    }
    the_color = randomColors;
}