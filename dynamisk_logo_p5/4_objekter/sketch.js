/*
Et objekt er en måde at samle variable på. Nedenfor ser du en variabel - square - som er skrevet som en funktion. 
*/

function square(url, x, y, p, margin) {
    this.x = x;
    this.y = y;
    this.img = loadImage(url);
    this.p = p;
    this.margin = margin;
    
    this.display = function(){
        image(this.img,this.x, this.y);        
    }
    this.move = function(){
        this.x = this.x * (1-this.p) + (mouseX) * this.p ;
        this.y = this.y * (1-this.p) + mouseY * this.p;
    }
}

var square_1;
var square_2;
var square_3;
var square_4;

function setup() {
    createCanvas(800, 200);
    square_1 = new square("s.png", 100, 120, 0.1);
    square_2 = new square("l.png", 200, 50, 0.04);
    square_3 = new square("o.png",100, 100, 0.05);
    square_4 = new square("t.png",800, 0, 0.08);
}

function draw() {
    background(0);

    fill(0,140,80);
    square_1.display();
    square_1.move();
    
    fill(255,0,100);
    square_2.display();
    square_2.move();

    fill(255,40,40);
    square_3.display();
    square_3.move();

    fill(0,140,200);
    square_4.display();
    square_4.move();
}



/*
OPGAVER

*/