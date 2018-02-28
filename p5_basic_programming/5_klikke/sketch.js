/* 
Modificeret til gymnasiebriug efter Shiffmann: https://vimeo.com/channels/learningp5js/141919520
-af Simon Moe. 
*/

var bubble;

function setup() {
  createCanvas(600, 400);
  bubble = new Bubble(height/2, width/2, 24);
}

function draw() {
    background(0);
    bubble.move();
    bubble.display();

    textSize(40);
    fill(255);
    if(frameCount < 200){
        text(frameCount, 40,40);
    }else{
        text("Game Over", 40,40);
    }
}


function mousePressed() {
    bubble.clicked();
}


/*
OPGAVER

1  Lav et point system, så man får et point for at klikke på en bubble - brug funktionen text() til at skrive pointene på skærmen

2  Kan i sørge for at man ikke kan få flere point for at klikke på den samme bubble?

3  Kan i gøre så boblerne hopper mere tilfældigt rundt så de er sværere at klikke på?

4  Kan i sørge for at boblerne bliver væk når man har klikket på dem?

5  Kan i sørge for at man "vinder spillet" fx med en tekstmeddelelse når alle boblerne er væk?

6  Og at der kommer en "genstart knap" så spillet starter forfra? 

*/