/* Udvikliet af Coding Rainbow, Daniel Shiffman. http://patreon.com/codingtrain. Code for: https://youtu.be/0jjeOYMjmDU. Modificeret til gymnasiebrug af Simon Moe*/

var angle = 0;
var slider;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw() {
  background(51);
  angle = slider.value();
  
  //Translate sætter et nyt (0,0)
  translate(200,400);
  stroke(255);
  branch(100);
}

function branch(len) {
    line(0, 0, 0, -len);
    if(len > 4){
        push();
        //Gå tilbage til toppen af grenen
        translate(0, -len);
        //Roter det antal grader som slideren viser
        rotate(angle);
        //Kald funktionen igen med halvdelen af grenens længde
        branch(len * 0.67);
        pop();
        push();
        translate(0, -len);
        //Roter negativt
        rotate(-angle);
        //Kald funktionen igen
        branch(len * 0.67);
        pop();
    }
}
