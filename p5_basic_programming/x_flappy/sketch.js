/* Daniel Shiffman http://codingtra.in http://patreon.com/codingtrain Code for: https://youtu.be/cXgA1d_E-jY&.
Modificeret til gymnasiebrug af Simon Moe*/


var bird;
var pipes = [];
var points = 0;
var end = false;

function setup() {
    createCanvas(400, 400);
    bird = new Bird();
    pipes.push(new Pipe());
    
    pointCounter = createElement('div', points);
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

Vi vil gerne lave spillet sådan, at det kan spilles på en mobiltelefon. Derfor er vi nødt til at have en knap, som kan få bolden til at hoppe. 

Se hvordan man laver en tryk-knap her: 
https://p5js.org/examples/dom-input-and-button.html

Lav en knap på et fornuftigt sted på skærmen (helst udenfor selve spillet), og få bolden til at hoppe når man klikker på den. 

Gå så ind i skitsens stylesheet og se om du kan få knappen til at være meget mere iøjnefaldende. Se fx 
https://www.w3schools.com/css/css3_buttons.asp
https://www.w3schools.com/css/css3_shadows.asp

_ _ _ _ _ _ _ _

Point. Vi vil gerne have pointtælleren øverst på skærmen til at vise nogle point. Der skal gives 20 point i sekundet, men trækkes 80 fra, hvis man rammer en væg.

Se først om du kan oprette en variabel: points, og skrive den i pointfeltet i stedet for teksten "nul".

Brug variablen frameCount og MODULO operatoren til at sørge for at der bliver uddelt nøjagtig 20 point i sekundet.

Kan du så også sørge for, at der bliver trukket 80 point fra, hver gang flappy støder ind i en bjælke?

_ _ _ _ _ _ _ _

Hvis pointene kommer under nul, skal spillet slutte. Lav først en funktion der hedder gameOver(), som du kalder, hvis points er mindre end nul. 

Lav derefter en variabel: gameOver - som du sætter til false fra spillets start. Alt inden i draw metoden skal KUN udføres hvis variablen gameOver er false! Det vil altså sige, at hvis gameOver bliver true - så sker der ingenting i draw() længere. 

Nu vil vi gerne have en tæller mere i øverste højre side af skærmen, som viser hvor mange sekunder man har klaret. 

Kan du oprette et felt mage til pointCounter, som i stedet hedder secCounter? 

Kan du give elementet en anden klasse end "points" og i stylesheetet sørge for at den kommer over i højre side?

Kan du bruge den faste variabel "frameCount" til at sætte html'en i secCounter til sekunderne?
(tip: frameCount skal divideres med 60 for at tælle sekunder - men resultatet skal transformeres med metoden parseInt(decimal) , for at blive til heltal)

_ _ _ _ _ _ _ _

Afsluttende, rimelig svær opgave

Kan du sørge for at spillet slutter enten hvis der går tyve sekunder - eller hvis man kommer under 0 i point. Og at der dermed kommer en stor tekst frem på skærmen, hvor der står hhv "Game Over" eller "The End"?

Kan du også sørge for, at der kommer en ny knap frem som viser hvor mange point man fik?

Og kan du sørge for at man kan klikke på knappen og begynde forfra? (tip: brug location.reload() - https://www.w3schools.com/jsref/met_loc_reload.asp )


*/
