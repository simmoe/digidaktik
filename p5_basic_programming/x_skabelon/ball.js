/* Udviklet af Daniel Shiffman - http://patreon.com/codingtrain
Videre modificeret og udviklet til gymnasiebrug af Simon Moe 
*/

function Ball() {
    this.y = height/2;
    this.x = width/2;
    this.size = 32;
    
    this.gravity = 1;
    this.velocity = 0;
    this.friction = .95;
    this.lift = 15;

  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, this.size, this.size);
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

/*



*/
