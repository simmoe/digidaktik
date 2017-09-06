/*
Se en endnu bedre formidling af indholdet end min:
https://vimeo.com/channels/learningp5js/138327548
*/

//Setup() funktionen skal altid være i en p5.js sketch. Det er her alle forberedelsnerne til skitsen bliver  udført.  
function setup() {
  //createcanvas laver selve den skærm programmet kører i - her 600x400 pixels    
  createCanvas(600, 400);
  //background(rød,grøn,blå) tegner en baggrundsfarve på hele programskærmen. Prøv at ændre værdierne rød-grøn-blå fra 0-255 og tryk play for at se farven skifte 
  background(255, 100, 0);
}

//draw() funktionen er der hvor det hele sker - som udgangspunkt kører funktionen 60 gange hvert sekund. Det er derfor tegningen du laver med dette program er så sjov
function draw() {
  //fill(r,g,b) vælger hvilken fyldfarve figurer herefter skal have
  fill(100, 100, 100);
  //stroke(r,g,b)vælger hvilken kantfarve figurer herefter skal have - her er farven hvid (fordi RGB skalaen er additiv - jo mere farve, des mere hvid) 
  stroke(255,255,255);
  //Og ellipse(x,y,højde,bredde) tegner så en cirkel. Programmet her tegner altså en cirkel der hvor musen er, hvert 60/1 sekund. Men hvad er mouseX og mouseY? Det er faste variable i p5.js som du altid kan bruge til at returnere musens position - det er derfor programmet virker som det gør. 
  ellipse(mouseX, mouseY, 50, 50);
}

//funktionen mousePressed() kaldes i princippet 60 gange i sekundet i p5.js. Simpelthen for at tjekke OM der skulle være blevet trykket på musen. HVIS brugeren trykker på musen kan man altså gøre noget i den forbindelse
function mousePressed() {
  //Fordi vi aldrig kalder background() i draw() bliver programmet ved med at tegne cirkler oven i hinanden. I det øjeblik brugeren trykker på musen, prøver vi nu at kalde background() med en ny baggrundsfarve - hvad sker der i programmet?
  background(255, 100, 0);
}

/*
OPGAVER - stigende sværhedsgrad

Lige nu tegner vi cirkler med funktionen ellipse() - prøv at bruge andre former. Kig i referencen: https://p5js.org/reference/ 

1. rect()..

2. triangle()...

3. line()..

Ja.. 

4. ..men hvad med quad()?

5. ..arc()..? -og for de avancerede: kan du tegne flere arcs så de viser en "tredimensionel" firkant?

6. Kan man tegne flere former oven i hinanden i programmet?

7. Funktionen fill() kan faktisk tage en parameter mere end rød/grøn/blå. Find ud af hvilken i referencen - og prøv at ændre på den sidste værdi 

8. Når i skal dokumentere skitser fra jeres arbejde, er det praktisk hvis man kan gemme et screenshot dynamisk når man klikker på musen eller endnu bedre trykker på en tast. Prøv at se på funktionerne keyPressed() og save()  i referencen - og implementér en funktion som gemmer et billede af din skitse dynamisk 

9. En anden irriterende ting er, at programmet HELE tiden tegner. Prøv at se om du kan implementere skitsen, så du kan klikke med musen og pause din tegning, indtil du klikker igen

10. så kunne det jo være at man gerne ville skifte farve.  Prøv at implementere en slider() man kan skifte rød/grøn/blå fyldfarve med i figuren 

*/