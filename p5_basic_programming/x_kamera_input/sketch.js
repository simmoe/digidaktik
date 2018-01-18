function setup() {
  createCanvas(640, 480);
  // Lav capture objektet, der også fungerer lidt som et Image objekt
  capture = createCapture(VIDEO);
}

function draw() {
  // Bed p5js om at loade pixelsne, så vi kan kigge på dem
  capture.loadPixels();
  // Få fat i den pixel der er i midten af billedet
  var [r, g, b] = capture.get(capture.width/2, capture.height/2);

  background(r, g, b);
  fill(255);
  text("Farve midterst: " + r + " " + g + " " + b, 20, 380);
}


/*



*/