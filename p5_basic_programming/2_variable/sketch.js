/*
Koderne her er skrevet med henblik på undervisning i programmering på C niveau i gymnasiefaget Informatik

Programmet opretter først en variabel: circleX som sættes til 50. I funktionen draw() tegnes en ellipse, hvor variablen bruges til at definere cirklens x-værdi
*/

var circleX = 50;

//I setup() oprettes lærredets størrelse og baggrundsfarve
function setup() {
  createCanvas(500, 400);
  background(200, 0, 200);
}

//draw() kaldes 60 gange i sekundet
function draw() {
  
  noStroke();        
  fill(0, 200, 00);
  ellipse(circleX, 200, 80, 80);
    

  //Koden nedenfor er bare til for at vise hvad variablen er sat til    
  fill(255);
  textSize(12);    
  text("circleX: " + circleX, 20, 360, 200, 200);
}

/*
Opgaver

Prøv først at sætte variablen circleX til noget andet - fx 80, og tryk gem (ctrl-s || cmd-s). Nu flytter cirklen sig - selvfølgelig - fordi variablen jo definerer dens x-værdi. 

Prøv at lav en ny variabel - circleY - og brug den til at sætte cirklens y-værdi.

Se om du kan skrive en tekst med circleY på skærmen - på samme måde som circleX skrives.

Lad os prøve at få cirklen til at bevæge sig hen over skærmen. Husk på at metoden draw() udføres 60. gange hvert sekund. Prøv at plusse variablen circleX med 1 hver gang..

Nu ser det lidt mærkeligt ud. Cirklen bliver ved med at blive tegnet, og teksten skriver tallene oven i hinanden. 

Kald metoden background() med en eller anden baggrundsfarve lige før du tegner med fill() og ellipse(); Se https://p5js.org/reference/#/p5/background

Ok?

Som du kan se fortsætter circleX - selvfølgelig - med at blive større i det uendelige. Det ville være sjovere hvis den skiftede retning når den rammer siden af skærmen. 

For at gøre det, er det nemmest at bruge en variabel - speed - som du kan sætte til for eksempel 1 eller -1; Start derfor med at oprette en variabel - præcis ligesom circleX i toppen af koden - som du kalder for speed:

var speed = 1; 

Husk så at bruge variablen speed, når du sætter circleX i draw();

Nu skal du så fortælle maskinen hvilken logik den skal bruge: hvis circleX er blevet større end sidens bredde - så sæt speed til -1. 

Du kan se hvordan man laver et if() {} else(){} statement her: https://www.w3schools.com/js/js_if_else.asp. 

Hvis du kan det, vil du se, at cirklen nu vender pænt når den rammer højre side - men ikke venstre. 

Kan du lave et nyt if() statement som vender speed til plus igen, når circleX er mindre end 0?

- - - - 

Lidt sværere opgaver

Lige nu bruges funktionen fill() til at sætte cirklens farve til noget grønt. Kan du oprette en variabel - fx green - som styrer cirklens farve vha variablen circleX?

Musens x-position hedder altid mouseX i dette program. Se om du kan bruge mouseX til at styre speed?

- - - - 

Svær opgave 

Kan du oprette en variabel som styrer baggrundsfarven, så den får præcis den modsatte andel grøn end cirklen? Altså hvis cirklen er grøn = 255, skal baggrundsfarven være grøn = 0 - og omvendt. 

I begge tilfælde skal du bruge funktionen map(), som kan omsætte variablen circleX' værdi til en værdi mellem 0 og 255;

Se her: https://p5js.org/reference/#/p5/map

*/