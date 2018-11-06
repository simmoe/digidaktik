function Ball(brugernavn, x, y) {
    this.x = x;
    this.y = y;
    this.size = 40;
    this.brugernavn = brugernavn;
    
    this.gravity = 1;
    this.velocity = 0;
    this.friction = .95;
    this.lift = 15;

  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, this.size, this.size);
    fill(0);
    stroke(0);
    textAlign(CENTER, CENTER);
    text(this.brugernavn, this.x, this.y);
  }

  this.update = function() {      
      this.velocity += this.gravity;
      this.velocity *= this.friction;
      this.y += this.velocity;
      
      if(this.y > height-this.size/2){
          this.y = height-this.size/2;
          this.velocity = -this.velocity;
      }
  }

  this.up = function() {
      this.velocity -= this.lift;
  }
 
}