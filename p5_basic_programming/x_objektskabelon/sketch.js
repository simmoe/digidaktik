
var object_1;

function setup() {
    createCanvas(400, 400);
    //Her oprettes så en såkaldt "instans" af objektet. Bemærk at instansen oprettes med de variable som sendes i parantes - derfor kaldes funktionen en "constructor"  
    object_1 = new Objekt(200, 200);
}

function draw() {
    background(255);
    object_1.metode_1();
}


