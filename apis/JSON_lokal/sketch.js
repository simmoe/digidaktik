//Først opretter vi en variabel til alle vores data
var data;

function preload() {
    //Så henter vi hele vores JSON objekt ind i variablen
    data = loadJSON('birds_antarctica.json');
}

function setup() {
    console.log(data);
}

/*Opgaver

Lad os prøve at lave en liste med alle fuglefamilier    
Først laver vi en variabel der indeholder alle fuglene
var birds = data.birds;

Så løber vi igennem dem, og udskriver familienavnet

Prøv at udskrive familien "Penguins" og dens members

prøv at tilføje et link øverst, som henviser til kilden (source)

Find selv et JSON datasæt, fx her: https://github.com/dariusk/corpora/tree/master/data
Lav en overskuelig liste med indholdet

Prøv at skrive en JSON fil selv, som beskriver...
*/