/*
Et objekt er en måde at samle variable på. Nedenfor ser du en variabel - square - som er skrevet som en funktion. 
*/

function square(x, y) {
    this.x = x;
    this.y = y;
    this.w = 40;
    this.h = 50;    
    
    this.display = function(){
        rect(this.x, this.y, this.w, this.h);        
    }
}

var s;
function setup() {
    createCanvas(600, 400);
    s = new square(300, 300);
}

function draw() {
  background(0);
  fill(255);

  s.display();
}






/*
OPGAVER


*/