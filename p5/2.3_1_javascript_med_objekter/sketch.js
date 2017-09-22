/*
Mine skriblerier baseret på Dani Shiffman - always better:
https://vimeo.com/channels/learningp5js/138327558
*/

//Med et objekt - circle - kan vi SAMLE variable så de fremover hører til circle, og kun circle. x, y og diameter hører for det meste alligevel sammen. Men når vi danner dem som nedenstående i et objekt, så BOR de i circle.

var circle = {
  x: 0,
  y: 200, 
  diameter: 50,
  xSpeed: 15,
  ySpeed: 12
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
    
  circle.x = circle.x + circle.xSpeed;
  circle.y = circle.y + circle.ySpeed;
    
  //Her tjekker vi for om cirklen rammer siden af programmet og sørger for at den vender om    
  if(circle.x > width || circle.x < 0){
      circle.xSpeed *= -1;
  }    

  //Her tjekker vi for om cirklen rammer toppen eller bunden af programmet og sørger for at den vender om    
  if(circle.y > height || circle.y < 0){
      circle.ySpeed *= -1;
  }    

}   

/*
OPGAVER

1  Cirklen forsvinder og kommer aldrig tilbage - prøv at få den til at vende om når den når siden af skærmen og vende om igen. 

Hints: 
Skærmens bredde kan tilgås med: width
I får brug for at objektet circle har en variabel mere, fx kan i kalde den: speed

2  Prøv at lave flere objekter - fx square, crazyCircle eller andet - 

3  Nu bliver det lidt svært. I referencen finder i ud af hvordan man opretter et image og bruger det i sin skitse. Start med at få oprettet et billede og vist det i programmet

4  Prøv nu at lave billedet så det er en del af et objekt 

5  og få det så til at bevæge sig sammen med, eller på tværs af cirklen
*/