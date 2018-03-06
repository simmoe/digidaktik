
function Stone() {
    this.y = random(height/2);
    this.x = 0;
    this.size = 32;
    this.col = [255,255,255];
    this.hit = false;
    
    this.gravity = 0.02;
    this.velocity = 0;

  this.show = function() {
    fill(this.col);
    rect(this.x, this.y, this.size, this.size);
  }

  this.update = function() {      
      this.velocity += this.gravity;
      this.x += this.velocity;
  } 
  
  this.hitme = function(x,y){
      if(dist(this.x, this.y, x, y) < this.size){
          this.col = [255,0,100];
          this.hit = true;
      }
  }
}