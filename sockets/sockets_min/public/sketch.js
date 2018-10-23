var socket;

function setup() {
    createCanvas(400, 400);
    background(100, 200, 0);
    stroke(200, 200, 200);

    // Start en socket til en server (HUSK hvis du vil gøre det over et netværk til en anden computer, skal du skive dens IP)
    socket = io.connect('http://localhost:3000');
    // Når der kommer beskeder på din socket, ved navn 'mus': kald funktionen newDrawing()
    socket.on('mus', newDrawing);
    // Og brug funktionen til at tegne nye cirkler
    function newDrawing(data) {
        console.log("Fik: " + data.x + " " + data.y);
        // Fx blå
        fill(0, 140, 255);
        ellipse(data.x, data.y, 40, 40);
    }
}

function draw() {
    // Do something
}


function mouseDragged() {
    fill('yellow');
    ellipse(mouseX, mouseY, 40, 40);
    //Og send så besked til serveren om hvor musen var henne...
    var data = {
        x: mouseX,
        y: mouseY
    }
    //Send skidtet afsted med navnet "mus" (valgfrit, men beskeden skal have et navn)
    socket.emit('mus', data);
    console.log("Sender besked: " + mouseX + ", " + mouseY);
}
