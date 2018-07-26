/* Udviklet af Daniel Shiffman - http://patreon.com/codingtrain
Videre modificeret og udviklet til gymnasiebrug af Simon Moe 
*/

function Ball() {
    this.y = height/2;
    this.x = width/2;
    this.size = 180;

  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, this.size, this.size);
    rect(0, this.y + this.size/2,width,10);
  }

  this.update = function() {      

  }

  this.up = function() {

  }
 
}

/*

Gennemgås i plenum

For det første har vi et objekt her - en bold - som vi gerne vil have til at opføre sig som en bold. 

Metoderne show() og update() bliver kaldt hele tiden, mens up() kun bliver kaldt, hvis brugeren trykker på mellemrumstasten.

Og lad os bare starte med metoden update(); Hvad skal der til for at bolden falder til jorden?

Jo, så må vi tilføje noget til boldens y-værdi. Og for at gøre det rigtigt, kan vi lige så godt starte med at lave en variabel. Lad os kalde den gravity. 

Opgave 1: Lav en variabel this.gravity = 0.6, på samme måde som x og y variablene er defineret. Brug variablen til at sætte boldens y-værdi i funktionen update();

Men for at følge Newton bare en lille smule, hvor vi husker at der både er tyngdekraft og hastighed, laver vi en variabel til - velocity (hastighed). Som vi så hele tiden lægger sammen med med gravity, hvorefter vi lægger VELOCITY til y-værdien. (tyngdekraften gør at boldens hastighed bliver større jo længere den falder) 

Opgave 2: lav en ny variabel, this.velocity = 0, som først adderes med gravity og derefter opskriver boldens y-værdi (i stedet for gravity).

Nu forsvinder bolden pænt nedad, MEN når den rammer bunden, forsvinder den ud af skærmen. Vi må hellere lave en betingelse i funktionen update() som sætter en grænse for hvad boldens y-værdi kan være. 

Opgave 3: Lav en betingelse (if(){}) i update(), som sørger for at bolden ikke kan ryge ud af skærmens bund. Brug operatoren >= så du spørger om boldens y-værdi er blevet større end eller lig med højden  

Nu mangler vi ligesom noget vi kan skubbe til bolden med. Lad os lave en ny variabel, lift, som vi kan bruge til hele tiden at få bolden til at hoppe opad, når brugeren trykker på mellemrumstasten. 

Opgave 4: lav en variabel, lift, og brug den til at sende bolden opad i update(); Husk ikke at påvirke boldens y-værdi direkte - brug velocity!

Vi har lidt glemt noget luftmodstand. Luftmodstand vil påvirke boldens hastighed i negativ retning med en eller anden konstant. Hastighed * luftmodstand. 

Opgave 5: Kan du oprette en variabel, friction, som hele tiden påvirker hastigheden lidt? (gang velocity med en eller anden friction < 1, før du lægger den til boldens y-værdi)

Det sidste der er lidt kedeligt er at bolden ikke hopper når den rammer bunden. Kan du bruge hvad du har lært indtil nu, for at få den til det?

tip: Du skal se på den betingelse hvor bolden rammer bunden. Hidtil har vi sat boldens y værdi til 0 hvis den er større end eller lig med højden. Bum. Det er lidt primitivt. Prøv samtidig at påvirke boldens hastighed til at være negativ.  

_ _ _ _ _ _ _ _

Lidt sværere opgaver

Hvad hvis vi skal lave flere bolde med forskellig størrelse og startpunkt?

Prøv at se om du kan lave funktionen Ball() således, at den får nogle variable med i parantesen: x, y, og diameter. 

Nu skal du så huske at sætt dem internt i objektet, fx:

this.x = x; 

Osv..

Så kan du bagefter oprette to bolde i setup() (sketch.js) - fx:

ball1 = new Ball(200, 200, 24); 
ball2 = new Ball(300, 200, 12);

..nu skal du bare sørge for at begge bolde bliver vist og opdateret i draw();

_ _ _ _ _ _ _ _

Halvsvær opgave

Hvis vi antager at boldene er lavet af samme materiale, vil størrelsen påvirke den friktion der møder dem. Kan du lave boldens friktion til en afhængig variabel af størrelsen?





*/
