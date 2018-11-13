//Først opretter vi en variabel til alle vores data
var data;

function preload() {
    //Så henter vi hele vores JSON objekt ind i variablen
    data = loadJSON('birds_antarctica.json');
}

function setup() {
    noCanvas();
    //Hent en fugl
    var bird = data.birds[1].members[2];
    createP(bird);

    //Lad os prøve at lave en liste med alle fuglefamilier    
    //Først laver vi en variabel der indeholder alle fuglene
    var birds = data.birds;
    //Så løber vi igennem dem, og udskriver familienavnet
    birds.forEach(element => {
        createElement('h1', element.family);
        //Og hvis vi også vil udskive fuglene i hver familie
        var theBirds = element.members;
        theBirds.forEach(element => {
            createElement('p', element);
        });
    });
}