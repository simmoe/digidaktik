function setup() {
  createCanvas(600, 400);
  // Lav capture objektet, der også fungerer lidt som et Image objekt
  capture = createCapture(VIDEO);
  // Gem DOM-elementet, den laver, så vi ikke behøver kigge på det
  capture.hide()
}

function draw() {
  // Bed p5js om at loade pixelsne, så vi kan kigge på dem
  capture.loadPixels();
  // Get pixelen i midten
  var [r, g, b] = capture.get(capture.width/2, capture.height/2);

  background(r, g, b);
}