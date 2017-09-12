function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.col = color(255, 100);

  this.display = function() {
    stroke(255);
    fill(this.col);
    ellipse(this.x, this.y, 48, 48);
  }

  this.move = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);

  }
  //Objektet bliver hele tiden bedt om at tjekke om det er blevet klikket på. Det finder det ud af - som man kan se nedenfor - ved at spørge om afstanden mellem musens x,y koordinater og dets egne, er mindre en dets diameter. 
  this.clicked = function() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < 24) {
      this.col = color(255, 0, 200);
    }
  }
}