//Animation med p5.js og play.js

//Først opretter vi to variable, som vi vil lægge vores animerede objekter ind i 

//Det er tilrådeligt at lægge billedbehandlingen i en preload funktion - her kan man evt håndtere loading med en anden animation eller lignende
function preload() {
    //Lav en animation fra en serie af nummererede billeder

    //Giv funktionen loadAnimation en url til det første og sidste billede, så regner den selv resten ud. Sæt din variabel - ghost - til at instantiere objektet 

    //Eller du kan liste alle de filer du vil skifte mellem specifikt
}

function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(255, 255, 255);
    //Brug funktionen animation til at vise din instans og dens x,y position
    //animation(instans, x, y) 

}

/*
_ _ _ _ _ _ _ _ _ _ _ _ 

OPGAVER 

Først udfolder vi pseudokoden.

Prøv at skifte mellem forskellige billedsekvenser - kig i assets mappen

Prøv at tegne din egen animation - start med en selvvalgt figur

Prøv at lade figuren komme ind til midten i en glidende bevægelse- lav en variabel - endX - og lad animationens x-værdi komme langsomt derhen.

Lad os sige vi først vil begynde spillet når vi har vist animationen i tre sekunder - se om du kan lave en boolean - startgame - som først bliver sat til true når animationen er færdig. Brug den så til at begynde en ny scene -  

*/
