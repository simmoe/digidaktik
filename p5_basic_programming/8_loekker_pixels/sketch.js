/* Daniel Shiffman http://codingtra.in http://patreon.com/codingtrain Code for: https://youtu.be/cXgA1d_E-jY&.
Modificeret til gymnasiebrug af Simon Moe*/

function setup() {
    createCanvas(40, 40);
    background(0);
    background(255);
    for(var x = 0; x <= width; x++){
        for(var y = 0; y <= height; y++){
            console.log(x, y);
            col = returnColor(x, y);
            stroke(col);
            point(x, y);
        }
    }
}

function draw(){
}

function returnColor(x, y){
    //Udfyld beregning her og returner farvekode 0 eller 255 
}
/*

I PLENUM

Vi vil prøve at lave et program som laver skærmen sort-hvid ternet for hver pixel. 

Først har vi oprettet et loop i et loop; Det første loop løber alle punkter på x-aksen igennem - det næste alle punkter på y-aksen.

Vi skal nu tænke sådan, at for hvert punkt vi kommer til på x-aksen i den første løkke, skal vi løbe HELE y-aksen igennem i en ny løkke - og SÅ tegne hvert punkt. 

Dernæst skal vi lave en funktion som modtager to parametre: x og y; Den skal så returnere en farve afhængig af om begge tal er lige eller om det ene punkt er ulige. 

På den måde kan vi tegne et grid af ternede felter.

Referencer: 
for loop:   https://www.w3schools.com/js/js_loop_for.asp

_ _ _ _ _ _ _ _

SVÆR OPGAVE TIL DE HURTIGE:

Kan i oprette en variabel = 5 - og så tegne felterne sort/hvide i 5x5 pixels i stedet for 1x1? 
-altså bruge rect(x, y, h, w) i stedet for point

TIP: Du kan plusse med variablen i for-loopet:
for(x = 0; x < width; x += var)

Hvad hvis i sætter variablen til 10?

*/
