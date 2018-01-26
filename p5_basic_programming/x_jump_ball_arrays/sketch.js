/* Daniel Shiffman http://codingtra.in http://patreon.com/codingtrain Code for: https://youtu.be/cXgA1d_E-jY&.
Modificeret til gymnasiebrug af Simon Moe*/


var balls = [];

function setup() {
  createCanvas(400, 600);
    
  for(i=0; i < 20 ; i++){
    balls.push(new Ball(random(width), height/2,random(5, 50)));      
  }
}

function draw() {
    background(0);

    for(i=0; i < balls.length; i++){
        balls[i].update();
        balls[i].show();
    }

}

 function keyPressed() {
  if (key == ' ') {
    for(i=0; i < balls.length; i++){
        balls[i].up();
    }
    }
}


/*
Opgaver 

Vi har nu oprettet et objekt - en bold, som kan hoppe. Men det smukke ved objektorienteret programmering er, at vi relativt let kan oprette flere. Mange flere. 

For at gøre det, skal vi bruge et andet centralt fænomen indenfor programmering: lister - eller på engelsk: arrays.



*/