function Balloon(x, y) {
  this.x = x;
  this.y = y;
  this.r = 30;

  this.ydir = .1;

  this.grow = function() {
    this.r = this.r + 2;
  }

  this.move = function() {
    this.y = this.y + this.ydir;
    this.x += random(-2,2);
  }

  this.show = function() {
    noStroke();
    fill(255, 0, 200, 150);
    ellipse(this.x, this.y, this.r, this.r);
  }

}
