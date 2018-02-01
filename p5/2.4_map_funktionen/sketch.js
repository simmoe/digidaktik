/*
https://vimeo.com/channels/learningp5js/138331801
*/
var r = 0;
var g = 255;

function setup() {
  createCanvas(600, 400);  
}

function draw() {
  //map funktionen har fem parametre: Først og fremmest en værdi - her mouseX. Det er det tal som skal "re-mappes". Dernæst et minimum og et masksimum for den talrække værdien er i - her er mouseX altid mellem nul og sidens bredde. Til sidst en minimum og maksimum for den række værdien skal re-mappes til. Her farveskalaen: fra o til 255.  
  r = map(mouseX, 0, width, 0, 255);
  g = map(mouseX, 0, width, 255, 0);
  background(r, g, 0);
  
  // ellipse
  noStroke();
  fill(250, 118, 222);
  ellipse(mouseX, 200, 64, 64);
}

/*
OPGAVER 

1  Prøv at indsætte en anden cirkel som går op og ned i stedet for på langs

2  Den nye cirkel ryger lidt ud af skærmen - kan du sørge for at den stopper ved kanten ligesom den første?

3  Prøv at gøre så den nye cirkel styrer den blå farve

4 På linket herunder kan du se en skitse i p5 referencen, hvor der optages lyd. Se om du kan implementere en lydoptagelse i din skitse, og mappe volumen niveauet til cirklens størrelse. 


*/
