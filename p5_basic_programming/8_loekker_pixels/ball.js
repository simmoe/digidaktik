/* Udviklet af Daniel Shiffman - http://patreon.com/codingtrain
Videre modificeret og udviklet til gymnasiebrug af Simon Moe 
*/

function Ball(x, y, size, xspeed) {
    this.y = y;
    this.x = x;
    this.size = size;
    this.col = [0, 255, 0, 255];
    this.xspeed = xspeed;
    
    this.gravity = .6;
    this.velocity = 0;
    this.yfriction = .03;
    this.xfriction = .996;
    this.lift = 15;

  this.show = function() {
    fill(this.col);
    ellipse(this.x, this.y, this.size, this.size);
  }

  this.update = function() {      
      this.velocity += this.gravity;
      this.velocity *= (1 - this.yfriction);
      this.y += this.velocity;
      
      this.xspeed *= this.xfriction;
      this.x += this.xspeed;
            
      if(this.y > height - this.size/2){
          this.y = height - this.size/2;
          this.velocity = -this.velocity;
      }
      if(this.y <= this.size/2){
          this.y = this.size/2;
          this.velocity = - this.velocity;
      }
      if(this.x > width - this.size/2){
          this.x = width - this.size/2;
          this.xspeed = - this.xspeed;
      }
      if(this.x <= this.size/2){
          this.x = this.size/2;
          this.xspeed = -this.xspeed;
      }
      
  }

  this.up = function() {
      this.velocity -= this.lift;
  }
 
}

/*



*/
