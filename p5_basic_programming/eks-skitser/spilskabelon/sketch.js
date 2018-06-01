var ship;
var balloon;
var shots = [];
var points = 0;

function setup() {
    createCanvas(600, 400);
    ship = new Ship();
    balloon = new Balloon(width/2, 0);
    
    pointCounter = createElement('div', "0");
    pointCounter.addClass("points");

}

function draw() {
    background(51);
    pointCounter.html("Points " + points);
    

    ship.show();
    balloon.show();
    balloon.move();

    for (var i = 0; i < shots.length; i++) {
        shots[i].show();
        shots[i].move();
    
        if (shots[i].hits(balloon)) {
            balloon.grow();
            shots[i].disappear();
        }
    }

    for (var i = shots.length-1; i >= 0; i--) {
        if (shots[i].toDelete) {
            shots.splice(i, 1);
        }
    }
}

function keyPressed() {
    if (key === ' ') {
        var shot = new Shot(ship.x, height);
        shots.push(shot);
    }

    if (keyCode === RIGHT_ARROW) {
        ship.moveX(10);
    } 
    
    if (keyCode === LEFT_ARROW) {
        ship.moveX(-10);
    }
}
