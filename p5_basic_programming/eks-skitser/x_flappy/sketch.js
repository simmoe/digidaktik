/* Daniel Shiffman http://codingtra.in http://patreon.com/codingtrain Code for: https://youtu.be/cXgA1d_E-jY&.
Modificeret til gymnasiebrug af Simon Moe*/


var bird;
var pipes = [];
var end = false;
var points = 0;

function setup() {
    createCanvas(400, 400);
    bird = new Bird();
    pipes.push(new Pipe());
    
    pointCounter = createElement('div', "0");
    pointCounter.addClass("points");
}

function up(){
    bird.up();
}

function draw() {
    background(0);
    
    
  pointCounter.html(points);

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
        if(!pipes[i].hit){
            pipes[i].hit = true;
            console.log("Bad points"); 
        }
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();

  if (frameCount % 100  == 0) {
    pipes.push(new Pipe());
  }
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
  }
}

/*
Opgaver

Vi vil gerne lave spillet sådan, at det kan spilles på en mobiltelefon. Derfor må vi have en knap, som kan få bolden til at hoppe. 

Se hvordan man laver en tryk-knap her: 
https://p5js.org/examples/dom-input-and-button.html

Lav en knap og få bolden til at hoppe når man klikker på den. 

Giv knappen en klasse - på samme måde som pointCounter ovenfor. 

Gå så ind i skitsens stylesheet og se om du kan få knappen til at være meget mere iøjnefaldende. Se fx 
https://www.w3schools.com/css/css3_buttons.asp
https://www.w3schools.com/css/css3_shadows.asp

_ _ _ _ _ _ _ _

Point. Vi vil gerne have pointtælleren øverst på skærmen til at vise nogle point. Der kan for eksempel gives 20 point i sekundet, og trækkes 50 fra, hvis man rammer en væg. Eller lignende. 

Se først om du kan oprette en variabel: points, og skrive den i pointfeltet i stedet for teksten "nul".

Brug variablen frameCount og MODULO operatoren til at sørge for at der bliver uddelt nøjagtig 20 point i sekundet.

Tip: du lave en betingelse som spørger om frameCount % 20 == 0. Inden i betingelsen skal du så lægge 20 til points variablen "points". 

Kan du så også sørge for, at der bliver trukket nogle point fra, hver gang flappy støder ind i en bjælke?

Tip: Se i koden hvor der står:             
console.log("Bad points"); 

_ _ _ _ _ _ _ _

Hvis pointene kommer under nul, skal spillet slutte. Lav først en funktion der hedder gameOver().

Tip - sådan skriver man en ny funktion:

function gameOver(){

}

Nu skal den nye funktion kaldes fra draw(), hvis "points" er blevet mindre end nul. Her skal du tænke sådan, at ALT det der sker inde i draw() skal kun ske, hvis "points > 0". 

Det kan løses med en if(){}else{} betingelse. 

Tip: Lav en betingelse som spørger om points er mindre end nul..

if(points < 0){
    //Kald funktionen gameOver
}else{
    //Gør alt det der skal ske inde i draw();
}


Nu vil vi gerne have en tæller mere i øverste højre side af skærmen, som viser hvor mange sekunder man har spillet. 

Kan du oprette et felt mage til pointCounter, som i stedet hedder secCounter? 

Kan du give elementet en anden klasse end "points" og i stylesheetet sørge for at den kommer over i højre side?

Kan du bruge den faste variabel "frameCount" til at sætte html'en i secCounter til sekunderne?

(tip: frameCount kan divideres med 60 for at tælle sekunder - men resultatet skal transformeres med metoden parseInt(decimal) , for at blive til heltal). Du kan også bruge modulo operatoren igen. 

_ _ _ _ _ _ _ _

Afsluttende, lidt sværere opgave

Kan du sørge for at spillet slutter enten hvis der går tyve sekunder - eller hvis man kommer under 0 i point. Og at der dermed kommer en stor tekst frem på skærmen, hvor der står hhv "Game Over" eller "The End"?

Kan du også så sørge for, at der kommer en ny knap frem som viser hvor mange point man fik?

Og kan du sørge for at man kan klikke på knappen og begynde forfra? (tip: brug location.reload() - https://www.w3schools.com/jsref/met_loc_reload.asp )

_ _ _ _ _ _ _ _

Når du har nået ovenstående, kan du begynde at tage stilling til hvordan dit spil ser ud. 

Først kan du bruge de såkaldte "Gestaltlove" til at vurdere den visuelle brugergrænseflade

Læs her og vurder dit eget design: http://www.nielsgamborg.dk/?p=gestaltlovene

Er der noget du skal lave om?

Læs dernæst dette kapitel i i-bogen informatik, giver en introduktino til hvordan man kan tænke fagligt over hvilke valg man træffer i et design:

https://informatik.systime.dk/index.php?id=1100

Lever dit spil op til kravene om et "brugervenligt it-system"?

Tegn et flow-diagram over spillet...



*/
