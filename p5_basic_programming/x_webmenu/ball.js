/* Udviklet af Daniel Shiffman - http://patreon.com/codingtrain
Videre modificeret og udviklet til gymnasiebrug af Simon Moe 
*/

function Ball(x, y, size, xspeed, names, urls) {
    this.y = y;
    this.x = x;
    this.size = size;
    this.col = [0, random(255), 100, 180];
    this.xspeed = xspeed;
    this.names = names;
    this.urls = urls;
    
    this.gravity = .6;
    this.velocity = 0;
    this.yfriction = .03;
    this.xfriction = .996;
    this.lift = 15;

  this.show = function() {
    fill(this.col);
      noStroke();
    ellipse(this.x, this.y, this.size, this.size);
      textSize(20);
      fill(220);
    text(this.names, this.x - 35, this.y + 6);
  }
  
  this.click = function(){
      if(dist(this.x, this.y, mouseX, mouseY) < this.size){
          window.location.href = this.urls;
      }
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
      this.xspeed = random(-4,4);
  }
 
}

/*



*/
