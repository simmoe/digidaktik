/* Daniel Shiffman http://codingtra.in http://patreon.com/codingtrain Code for: https://youtu.be/cXgA1d_E-jY&.
Modificeret til gymnasiebrug af Simon Moe*/


var ball;
var stones = [];
var end = false;

function setup() {
    createCanvas(800, 200);
    ball = new Ball();
    stones.push(new Stone()); 
}

function draw() {
    if(!end){
        background(0);
        ball.update();
        ball.show();
    
        for(i=0;i<stones.length;i++){
            stones[i].show();
            stones[i].update();
            stones[i].hitme(ball.x, ball.y );
            if(stones[i].x > width){
                if(stones[i].hit){
                    stones.splice(0,1);
                }else{
                    death();
                }
            }
        }
        if(frameCount % 60 == 0){
            stones.push(new Stone());
        }
    }
    print(stones.length);
}

function death(){
    end = true;
    textSize(100);
    text("Done!", width/2-140, height/2+40);
}
 function keyPressed() {
  if (key == ' ') {
    ball.up();
  }
}


/*
Opgaver 



*/