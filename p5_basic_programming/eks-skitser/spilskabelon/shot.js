function Shot(x, y) {
  this.x = x;
  this.y = y;
  this.r = 16;
  this.toDelete = false;

  this.show = function() {
    noStroke();
    fill(150, 0, 255);
    ellipse(this.x, this.y, this.r, this.r);
  }

  this.disappear = function() {
    this.toDelete = true;
  }

  this.hits = function(balloon) {
    var d = dist(this.x, this.y, balloon.x, balloon.y);
    if (d < this.r/2 + balloon.r/2) {
      return true;
    } else {
      return false;
    }
  }

  this.move = function() {
    this.y = this.y - 5;
  }

}
