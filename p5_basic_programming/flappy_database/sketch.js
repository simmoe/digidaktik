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

    button = createButton('HOP');
    button.position(9, height + 20, 65);
    button.mousePressed(up);
    
    pointCounter = createElement('div', points);
    pointCounter.addClass("points");
    secCounter = createElement('div', frameCount);
    secCounter.addClass("seconds");
}

function up(){
    bird.up();
}
function draw() {
    if(!end){
    background(0);
    if(frameCount % 10 == 0){
       points = points + 1;
    }
    pointCounter.html(points);
    secCounter.html(parseInt(frameCount / 60));

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();
    if (pipes[i].hits(bird)) {
        if(!pipes[i].hit){
            pipes[i].hit = true;
            console.log("Bad points"); 
            points -= 80;
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
    if(points < 0){
        gameOver("Game Over");
    }
        if( frameCount > 600){
            gameOver("Time's up");
           }
    }        
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
  }
}

function gameOver(txt){
    end = true;
    gameOverText = createElement('div', "<h1>" + txt + "</h1><p>Points: " + points + "</p><button class='small' onclick='location.reload()'>Prøv igen</button>");
    gameOverText.addClass("gameOverText");
}
/*
Opgaver

Vi vil gerne lave spillet sådan, at det kan spilles på en mpbiltelefon. Derfor er vi nødt til at have en knap, som kan få boleden til at hoppe. 

Se hvordan man laver en tryk-knap her: 
https://p5js.org/examples/dom-input-and-button.html

Lav en knap på et fornuftigt sted på skærmen (helst udenfor selve spillet), og få bolden til at hoppe når man klikker på den. 

Gå så ind i skitsens stylesheet og se om du kan få knappen til at være meget mere iøjnefaldende. Se fx 
https://www.w3schools.com/css/css3_buttons.asp
https://www.w3schools.com/css/css3_shadows.asp

_ _ _ _ _ _ _ _

Point. Vi vil gerne have pointtælleren øverst på skærmen til at vise nogle point. Der skal gives 20 point i sekundet, men trækkes 80 fra, hvis man rammer en væg.

Se først om du kan oprette en variabel: points, og skrive den i pointfeltet i setedet for teksten "nul".

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

Kan du sørge for at spillet slutter enten hvis der går ti sekunder - eller hvis man kommer under 0 i point. Og at der dermed kommer en stor tekst frem på skærmen, hvor der står "Game Over"?


*/
