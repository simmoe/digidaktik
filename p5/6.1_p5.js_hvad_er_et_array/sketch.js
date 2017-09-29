/* 

1. Code below is for https://vimeo.com/channels/learningp5js/141211396
2. Video reference at 0:20 seconds on Objects > https://vimeo.com/channels/learningp5js/138327558

*/

var numbers = [23,7,72,56];
var num = 23;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  ellipse(100,200, num, num);    
  ellipse(200,200, numbers[2], numbers[2]);
}

/*

Opgaver

Prøv at udskifte værdierne i ellipsen med andre værdier fra arrayet numbers[]  

Prøv nu at gøre arrayet meget længere - altså indsæt nogle flere tal 

Prøv så at lave et for() loop, der tegner en masse cirkler og løbende bruger værdier fra dit array. For loopet skal løbe lige så mange gange som dit arrays længde: numbers.length; Eller skal det?
Se javascript referencen her: https://www.w3schools.com/js/js_loop_for.asp

Man kan også lave et tomt array ved at bruge var numbers = []; Og så fylde arrayet op med for eksempel 100 forskellige tal ved at bruge et for loop og random funktionen i setup() - prøv det

Prøv nu at udskrive dit array i et nyt for loop, hvor du bruger de tilfældige tal i dit array - sørg for at tegningen det danner, kommer til at fylde hele x-aksen på skærmen (brug for eksempel map funktionen)

Prøv nu at lægge en lille smule til eller trække en lille smule fra størrelsen på værdierne i dit array hver gang du løber det igennem i dit for() loop - se om du kan få tegningen til at bevæge sig og "leve" 

*/