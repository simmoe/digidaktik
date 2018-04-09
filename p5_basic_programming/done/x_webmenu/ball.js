/* Udviklet af Daniel Shiffman - http://patreon.com/codingtrain
Videre modificeret og udviklet til gymnasiebrug af Simon Moe 
*/

function Ball(x, y, size, xspeed, url, title) {
    this.y = y;
    this.x = x;
    this.size = size;
    this.col = [0, 255, 100, 150];
    this.xspeed = xspeed;
    this.url = url;
    this.title = title;
    
    this.gravity = .6;
    this.velocity = 0;
    this.yfriction = this.size * 0.0015;
    this.xfriction = .996;
    this.lift =  15;

  this.show = function() {
    fill(this.col);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
    fill(255);
    textSize(20);
    text(this.title, this.x-33, this.y+7);
  }
  
  this.click = function(){
      if(dist(this.x, this.y, mouseX, mouseY) < this.size){
          window.open(this.url, "_top");
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

OPGAVER 

Her har vi så objektet bold. Lige nu tager det fire parametre i constructoren: x, y, size, xspeed. Tilføj to mere: titel og url - og husk at gøre dem lokale nedenfor, ex:

this.titel = titel; 

Brug funktionen text(string, x, y) til at skrive sidetitlen på bolden;

*/
