/* Daniel Shiffman http://codingtra.in http://patreon.com/codingtrain Code for: https://youtu.be/cXgA1d_E-jY&.
Modificeret til gymnasiebrug af Simon Moe*/

var ball;


function setup() {
    createCanvas(600, 200);
    ball = new Ball(0, height/2, 32, 4);
}

function draw() {    
    background(255);

    ball.update();
    ball.show();      

}

function mousePressed(){
        ball.click();
}

function mouseClicked(){
}

function keyPressed(){
    if(key = ' '){
        ball.up();
    }
}


/*
OPGAVER I PLENUM 

I denne skitse oprettes der en instans af objektet bold (ball.js)

Vi vil gerne give bolden nogle flere egenskaber - en titel og en url, oms man kommer hen til når man klikker på den. 

Opret først to nye variable øverst: 

var titel = "Din sidetitel";
var url = link til din side.

Send nu de to nye variable med i objektets constructor - den bruger dem ikke endnu men det kan den komme til.

Gå ind i ball.js og løs opgaverne der. 


*/