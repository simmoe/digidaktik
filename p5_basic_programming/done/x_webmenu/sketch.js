/* Daniel Shiffman http://codingtra.in http://patreon.com/codingtrain Code for: https://youtu.be/cXgA1d_E-jY&.
Modificeret til gymnasiebrug af Simon Moe*/

var count = 0;
var balls = [];

var names = [];
var links = [];

function setup() {
    createCanvas(600, 200);
}

function draw() {    
    background(255);

    for(i=0; i < balls.length; i++){
        balls[i].update();
        balls[i].show();      
    }
    
    if(frameCount % 100 == 0  && count < 4)
    {
        balls.push(
            new Ball(
                0, 
                height/2, 
                40, 
                4, 
            )
        );
        count++;
    }
}

function mousePressed(){
    for(i=0; i< balls.length;i++){    
        balls[i].click();
    }
}

function mouseClicked(){
}

function keyPressed(){
    for(i=0; i< balls.length;i++){    
        if(key = ' '){
            balls[i].up();
        }
    }
}


/*
OPGAVER I PLENUM 

I denne skitse oprettes der et array af bolde (ball.js), som fyldes hverm gang frameCount % 100 giver nul. Vi skal forsøge at give boldende nogle egenskaber - et navn og en url - og sørge for at når man klikker på dem kommer man hen til forskellige sider i menuen. 



*/