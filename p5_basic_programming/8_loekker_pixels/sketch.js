/* Daniel Shiffman http://codingtra.in http://patreon.com/codingtrain Code for: https://youtu.be/cXgA1d_E-jY&.
Modificeret til gymnasiebrug af Simon Moe*/

var col;
var s = 25;

function setup() {
    createCanvas(400, 400);
    background(0);
}


/*

I PLENUM

Først skal vi oprette et loop i et loop; Det første loop løber alle punkter på x-aksen igennem - det næste alle punkter på y-aksen.

Vi skal nu tænke sådan, at for hvert punkt vi kommer til på x-aksen i den første løkke, skal vi løbe HELE y-aksen igennem i en ny løkke - og SÅ tegne hvert punkt. 

Dernæst skal vi lave en funktion som modtager to parametre: x og y; Den skal så returnere en farve afhængig af om begge tal er lige eller om det ene punkt er ulige. 

På den måde kan vi tegne et grid af ternede felter.

Referencer: 
for loop:   https://www.w3schools.com/js/js_loop_for.asp

_ _ _ _ _ _ _ _

SVÆR OPGAVE TIL DE HURTIGE:

Kan i oprette en variabel = 5 - og så tegne felterne sort/hvide i 5x5 pixels i stedet for 1x1? 
-altså bruge rect(x, y, h, w) i stedet for point

TIP: Du kan plusse med variablen i for loopet:
for(x = 0; x < width; x += var)

Hvad hvis i sætter variablen til 10?

*/
