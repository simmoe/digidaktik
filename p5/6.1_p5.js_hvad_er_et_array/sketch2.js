
/* 

1. Code below is for https://vimeo.com/channels/learningp5js/141211396
2. Video reference at 0:20 seconds on Objects > https://vimeo.com/channels/learningp5js/138327558
3. This sketch is from 8:00 minute of the video covering words in arrays and the arrays.length function

*/

var words = ["rainbow", "heart", "purple", "friendship", "love"];

var index = 0;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(0);
  fill(255);
  textSize(12);
    text("Klik for at skifte mellem ord i arrayet",12,100);

  fill(255);
  textSize(32);
  text(words[index], 12, 200);
}

function mousePressed() {
  index = index + 1;

  if (index == words.length) {
    index = 0;
  }
}

/*
OPGAVER 

Prøv at indsætte nogle flere værdier i arrayet. Skal det være enkeltord?

Lav et nyt array som indeholder gråtoner fra 0-255 - brug det array til at skifte fyldfarve på teksten hver gang den skrives

Lav et nyt array som du fylder med objekter af typen "color". Se om du kan få teksten til at skifte mellem farver hver gang man klikker 


*/