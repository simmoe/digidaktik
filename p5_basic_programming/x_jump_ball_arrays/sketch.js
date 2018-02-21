/* Daniel Shiffman http://codingtra.in http://patreon.com/codingtrain Code for: https://youtu.be/cXgA1d_E-jY&.
Modificeret til gymnasiebrug af Simon Moe*/


var ball;

function setup() {
    createCanvas(400, 600);
    ball = new Ball(width/2, height/2, 32, 4);  
}

function draw() {
    background(0);
    ball.update();
    ball.show();    
}

 function keyPressed() {
  if (key == ' ') {
      ball.up();
  }
 }

/*
OPGAVER I PLENUM 

Vi har nu oprettet et objekt - en bold, som kan hoppe. Men det smukke ved objektorienteret programmering er, at vi relativt let kan oprette flere. Mange flere. 

For at gøre det, skal vi bruge et andet centralt fænomen indenfor programmering: lister - eller på engelsk: arrays.

Start med at oprette en variabel til dit array - det gøres med følgende syntaks:

var balls = [];

De firkantede paranteser fortæller programmet, at variablen er et array - det er ikke altid nødvendigt at udpensle i Javascript, men med arrays er det. 

I setup funktionen bliver der nu lavet en enkelt bold - men vi vil lave mange. Det kan vi for eksempel gøre ved at bruge en løkke. Du husker måske syntaksen:

for(i=0; i < 20; i++){
    balls[i] = new Ball(h, w, s, x);
}

Skriv for-loopet ind i setup med relevante parametre i parantesen. 

_ _ _ _ _ _ _ _

SELVSTÆNDIGE OPGAVER
Nu opretter vi ganske vist et array med bolde - men vi viser dem aldrig og vi opdaterer dem aldrig. Se om du kan lave en ny løkke i draw() som kalder metoderne update og show på alle de nye bolde

Nu er der en masse bolde - men de er allesammen ens. Se om du kan bruge metoden random() til at give dem forskellige parametre når du opretter dem i setup - 
https://p5js.org/reference/#/p5/random

-husk at du godt kan bruge random(neg,pos) hvis du vil have boldene ti at svinge i forskellige retninger på x-aksen 

Nu skulle der så gerne være en masse forskellige bolde, som har forskellige størrelser og forskellige startpunkter. 

Men de kan ikke hoppe! Lav en ny for-løkke i metoden up(), som får alle boldene til at hoppe når man trykker på mellemrumstasten

_ _ _ _ _ _ _ _

LIDT SVÆRERE OPGAVER

Lige nu hopper små og store bolde lige højt - sådan er det ikke i den virkelige verden. Se om du kan gøre boldens gravity afhængig af dens størrelse i ball.js filen. 

(The weight of an object is the force of gravity on the object and may be defined as the mass times the acceleration of gravity)

Kan du give boldene farver, så de er røde når de er store og grønne når de er små?




*/