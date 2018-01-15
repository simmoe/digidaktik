/*
Et objekt er en måde at samle variable på. Nedenfor ser du en variabel - square - som er skrevet som en funktion. 
*/

function square(x, y) {
    this.x = x;
    this.y = y;
    this.w = 40;
    this.h = 50;
    this.yspeed = 5;
    this.col = [255, 255, 255];
    
    this.display = function(){
        fill(this.col);
        rect(this.x, this.y, this.w, this.h);  
    }
    this.move = function(){
        this.y = this.y + this.yspeed;
    }
    this.bounce = function(){
        if(this.y > height || this.y < 0){
            this.yspeed = -this.yspeed;
        }
    }
    this.boeh = function (v){
        if(v > .1){
            this.col = [random(255),0,0];
        }
    }
}

var s;
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
    fill(255);

    s.display();
    s.move();
    s.bounce();
    
    var vol = mic.getLevel();
    s.boeh(vol);
}

/*
OPGAVER

Prøv at udskrive vol på skærmen så du kan følge med

Lav en ny funktion - boeh() i square, som får den til at skifte farve, hvis lyden er høj nok 


*/