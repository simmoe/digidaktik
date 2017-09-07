/*
Mine skriblerier baseret på Dani Shiffman - always better:
https://vimeo.com/channels/learningp5js/138327558
*/

//Med et objekt - circle - kan vi SAMLE variable så de fremover hører til circle, og kun circle. x, y og diameter hører for det meste alligevel sammen. Men når vi danner dem som nedenstående i et objekt, så BOR de i circle.

var circle = {
  x: 0,
  y: 200, 
  diameter: 50
};


//Mens almindelige variable skal oprettes sådan her, og er meget sværere at holde styr på:
var r = 218;
var g = 160;
var b = 221;

function setup() {
  createCanvas(600, 400);  
}

function draw() {
  // background
  background(r, g, b);
  // ellipse
  fill(250, 200, 200);
  //Fordi vi har oprettet OBJEKTET circle kan vi tilgå dets indre variable med dot-notation (circle.x) 
  ellipse(circle.x, circle.y, circle.diameter, circle.diameter);
  
  circle.x = circle.x + 1;
}

/*
OPGAVER

1  Cirklen forsvinder og kommer aldrig tilbage - prøv at få den til at vende om når den når siden af skærmen og vende om igen. 

Hints: 
Skærmens bredde kan tilgås med: width
I får brug for at objektet circle har en variabel mere, fx kan i kalde den: speed





*/