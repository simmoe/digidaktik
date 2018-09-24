/*
Et objekt er en måde at samle variable på. Nedenfor ser du en variabel - square - som er skrevet som en funktion. 
*/

var branches;
var oldX;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);
    stroke(255);
    noFill();
    ellipse(300, 300, 300);
}



/*
OPGAVER

--Lav en funktion - drawCircle - som tegner ellipsen i stedet for draw

--Giv funktionen drawCircle parametrene x, y og diameter (dvs send dem med i parentesen)

--Kald så funktionen drawCircle som den sidste linje i draw. Hvad sker? Det samme som før!

--Prøv engang - for eksperimentets skyld - at udvide funktionen drawCircle, så den efter at have tegnet ellipsen, kalder sig selv med parametrene: x+20, y diam

--Det her ser fint nok ud. Men det lugter lidt af et uendeligt loop! Vi har brug for noget ligesom i et for eller while loop - der ligesom stopper koden før den løber løbsk. Du kan i øvrigt også kigge i konsollen og se at den ellers flotte form giver en fejl..

--Prøv at lav en betingelse (if) som spørger om x er større end width - og kun udfører funktionskaldet til drawCircle HVIS x er mindre end width

Lad os nu sige at vi både vil bevæge os på x-aksen og blive mindre. Hvordan sætter vi cirklen til at blive halvt så stor hver gang?

Prøv så at gøre x-aksen afhængig af diameteren - gang x med d*0.5 hver gangi stedet for at sætte den til +20..

Fint nok - men upS!! Der var fejlen i konsollen igen - udfør også kun funktionskaldet, hvis d også er > 2..

Så lad os prøve at tænke. Her er en cirkel som tegnes til højre for sig selv igen og igen. 

Hvad hvis vi også gerne vil have den til at tegnes til venstre?

Og ja.. hvad hvis vi i det hele taget vil lave selve definitionen af en cirkel om: så en cirkel er en cirkel med en cirkel til højre og venstre for midten af sig selv?

Så vil vi skabe en fraktal. En figur der når vi zoomer ind på dens mindste bestanddel, udfolder præcis det samme mønster som alle andre dele...

Mange organismer i naturen har fraktale egenskab - lyn, planter, træer...

lad os prøve at bede funktionen om - ikke bare at tgne en cirkel til højre - men også en til venstre. Indsæt et ellipse statement lige efter det første (og træk den halve diameter fra i stedet)..


Prøv at tenge en enkelt ellipse på y aksen også...

Det her er en sierpinski triangle - en trekant lavet af næsten uendelige cirkelformer

Så - nu tegner vi en masse frktaler - men gør ingenting for at animere det. 

Prøv fx..

At give den oprindelige størrelse til mouseX

Prøv så at udvide setup med funktionen noLoop();



























*/
