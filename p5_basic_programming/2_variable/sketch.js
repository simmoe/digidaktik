/*
Koderne her er skrevet med henblik på undervisning i programmering på C niveau i gymnasiefaget Informatik

Programmet opretter først en variabel: circleX som sættes til 50. I funktionen draw() tegnes en ellipse, hvor variablen bruges til at definere cirklens x-værdi
*/

var circleX = 50;

//I setup() oprettes lærredets størrelse og baggrundsfarve
function setup() {
  createCanvas(600, 400);
  background(100, 250, 100);
}

//draw() kaldes 60 gange i sekundet
function draw() {
  fill(100, 200, 200);

  ellipse(circleX, 200, 80, 80);
    
  text("circleX: " + circleX, 20,360);
}

/*
Opgaver

Prøv først at sætte variablen til noget andet - fx 80, og tryk gem (ctrl-s || cmd-s). Nu flytter cirklen sig - selvfølgelig - fordi variablen jo definerer dens x-værdi. 




*/