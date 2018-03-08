/* Daniel Shiffman http://codingtra.in http://patreon.com/codingtrain Code for: https://youtu.be/cXgA1d_E-jY&.
Modificeret til gymnasiebrug af Simon Moe*/

var count = 0;
var balls = [];

var names = [
    "Forside",
    "Portfolio"
];
var links = [
    "http://moe.it.nextkbh.dk",
    "http://moe.it.nextkbh.dk/portfolio" 
];

function setup() {
    createCanvas(600, 200);
}

function draw() {    
    background(255);
    for(i=0; i < balls.length; i++){
        balls[i].update();
        balls[i].show();      
    }
    
    if(
        frameCount % 100 == 0 && 
        balls.length < names.length
        )
    {
        balls.push(
            new Ball(
                0, 
                height/2, 
                random(80,120), 
                random(2, 8), 
                names[count], 
                links[count]
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

Vi har nu oprettet et objekt - en bold, som kan hoppe. Men det smukke ved objektorienteret programmering er, at vi relativt let kan oprette flere. Mange flere. 

For at gøre det, skal vi bruge et andet centralt fænomen indenfor programmering: lister - eller på engelsk: arrays.

Start med at oprette en variabel til dit array - det gøres med følgende syntaks:

var balls = [];

De firkantede paranteser fortæller programmet, at variablen er et array - det er ikke altid nødvendigt at udpensle i Javascript, men med arrays er det. 

I setup funktionen bliver der nu lavet en enkelt bold - men vi vil lave mange. Og vi vil gemme dem i vores array: balls.  

Når vi skal oprette nye elementer i et Array kan vi bruge metoden push:

balls.push(new Ball(random(width), 40, 24, random(-2,2)));

Lad os skrive det ind i setup. 

Nu opretter vi ganske vist et array med foreløbig en enkelt bold i - men vi viser dem aldrig og vi opdaterer dem aldrig. Lad os lave en ny løkke i draw() som kalder metoderne update og show på alle de bolde der måtte være i vores Array:

for(i=0; i < balls.lentgh; i++){
    balls[i].update();
    balls[i].show();
}

Skriv for-loopet ind i draw()

_ _ _ _ _ _ _ _

SELVSTÆNDIGE OPGAVER

I koden er de en tom funktion: mouseClicked - den bliver kaldt når musen klikker. Kan du bruge metoden til at pushe nye objekter ind i Arrayet?

Måske kan du også bruge mouseX og mouseY til at oprette dem lige der hvor der klikkes? 

Se om du kan bruge metoden random() til at give dem flere forskellige parametre når du opretter dem i setup - 
https://p5js.org/reference/#/p5/random

-husk at du godt kan bruge random(neg,pos) hvis du vil have boldene til at svinge i forskellige retninger på x-aksen 

Nu skulle der så gerne være en masse forskellige bolde, som har forskellige størrelser og forskellige startpunkter. 

Men de kan ikke hoppe! Lav en ny for-løkke i metoden up(), som får alle boldene til at hoppe når man trykker på mellemrumstasten

_ _ _ _ _ _ _ _

LIDT SVÆRERE OPGAVER

Lige nu hopper små og store bolde lige højt - sådan er det ikke i den virkelige verden. 

Se om du  - ligesom sidst - kan gøre boldens friktion afhængig af dens størrelse i ball.js filen. 

Kan du give boldene farver, så de er blå når de er store og grønne når de er små?

Tip: du kan bruge map() funktionen.

Kan du skrive en for løkke, så der starter med at blive oprettet 100 objekter?

_ _ _ _ _ _ _ _


*/