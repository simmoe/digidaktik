//Vi har set noget lignende før, men som du ser er der kommet en funktion "ind" i objektet - move, som kan flytte objektet. 

var bubble = {
  x: 300,
  y: 200,
  //funktionen display sørger for at vise boblen
  display: function() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  },
  //funktionen move bruger objektets egne x og y variable til at flytte lidt rundt på objektet  
  move: function() {
    this.x = this.x + random(-1,1);
    this.y = this.y + random(-1,1);
  }
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  bubble.move();
  bubble.display();
}



/*
OPGAVER 

Prøv at lave to parametre i display funktionen, som sætter  farver på cirklen 

Prøv at implementere en funktion mere i cirkelobjektet som gør at cirklens position bliver påvirket af musens x-position


*/