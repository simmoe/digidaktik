var s;
var scl = 20;
var food;
var forward = "";
function setup(){
    createCanvas(400,400);
    frameRate(10);
    pickFoodLocation();
    s = new Snake();
}

function draw(){
    background(51);
    s.death();
    s.update();
    s.show();
    //Tegn food vektoren
    fill(255,0,100);
    rect(food.x,food.y,scl,scl);
    if(s.eat(food)){
        pickFoodLocation();   
    }
}

function pickFoodLocation(){
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)),floor(random(rows)));
    food.mult(scl);
}
function keyPressed(){
    if(keyCode == UP_ARROW){
        s.dir(0,-1);
       }else if(keyCode == DOWN_ARROW){
        s.dir(0,1);
       }else if(keyCode == RIGHT_ARROW){
        s.dir(1,0);
       }else if(keyCode == LEFT_ARROW){
        s.dir(-1,0);
       }
}


