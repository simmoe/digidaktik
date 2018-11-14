//Først opretter vi en variabel til alle vores data
var data;

function preload() {
    //Så henter vi hele vores JSON objekt ind i variablen
    data = loadJSON('birds_antarctica.json');
}

function setup() {
    noCanvas();
    //Hent titlen på datafilen
    createElement('h1', data.description);
    //Hent en fugl
    var bird = data.birds[1].members[2];
    createP(bird);

    //Lad os prøve at lave en liste med alle fuglefamilier    
    //Først laver vi en variabel der indeholder alle fuglene
    var birds = data.birds;
    //Så løber vi igennem dem, og udskriver familienavnet
    birds.forEach(element => {
        createElement('h1', element.family);
        //Og hvis vi også vil udskrive fuglene i hver familie, laver vi en ny variabel med selve fuglene i - og?
    });
}

/*Opgaver

Prøv at udskrive familien "Penguins" og dens members

prøv at tilføje et link øverst, som henviser til kilden (source)

Find selv et JSON datasæt, fx her: https://github.com/dariusk/corpora/tree/master/data
Lav en overskuelig liste med indholdet

*/