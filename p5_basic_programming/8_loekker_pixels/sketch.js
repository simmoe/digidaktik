/* Daniel Shiffman http://codingtra.in http://patreon.com/codingtrain Code for: https://youtu.be/cXgA1d_E-jY&.
Modificeret til gymnasiebrug af Simon Moe*/


function setup() {
    createCanvas(400, 600);
    background(0);
}

function draw() {
    for (i = 0; i < width; i++) {
        stroke(i % 2 == 0 ? 255 : 0);
        point(i, 0);
    }
}


/*
OPGAVER

Vi har nu oprettet en løkke som løber alle pixels i første række af skitsen igennem og giver dem en tilfældig farve hver.

Gennemgå koden og kommenter hver der sker i hver linje af draw.

Se om i kan finde ud af at løbe alle pixels i hele skitsen igennem og gøre det samme.  


*/
