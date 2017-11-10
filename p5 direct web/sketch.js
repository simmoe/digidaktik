var bubbles = [];
var can;

function setup() {
  can = createCanvas(jQuery(window).width(), 1000);     
}

function mouseDragged() {
  bubbles.push(new Bubble(mouseX, mouseY));
}

function draw() {
  //var pos = jQuery("#hitme" ).offset();
    
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();

    if (bubbles.length > 5) {
      bubbles.splice(0, 1);
    }

  }
}

function Bubble(x, y) {
  this.x = x;
  this.y = y;

  this.display = function() {
    stroke(255);
    strokeWeight(2);
    fill(255, 0, 150, 50);
    ellipse(this.x, this.y, 24, 24);
  }

  this.move = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);

  }
}


