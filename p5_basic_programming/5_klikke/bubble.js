function Bubble(x, y, s) {
  this.x = x;
  this.y = y;
  this.size = s;
  this.col = color(255, 100);

  this.display = function() {
    stroke(255);
    fill(this.col);
    ellipse(this.x, this.y, this.size, this.size);
  }

  this.move = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);

  }
  
  this.clicked = function() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < this.size) {
      this.col = [255, 0, 200];
    }
  }
}


/*

Opgaver

Objektet bliver hele tiden bedt om at tjekke om det er blevet klikket på - fordi metoden this.clicked bliver kaldt fra draw(). 

Det skal vi finde ud af ved at bruge metoden:
dist(x1, y1, x2, y2) 
https://p5js.org/reference/#/p5/dist

- altså ved at spørge om afstanden mellem musens x,y koordinater og dets egne, er mindre en dets diameter. 



















*/