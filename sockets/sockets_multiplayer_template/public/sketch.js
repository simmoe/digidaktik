// Denne variabel indeholder vores socket connection
var socket;

function setup() {
  // Start en socket connection til serveren
  // Hvis du engang flytter projektet ud på nettet, skal du skrive en ip i stedet for localhost 
  socket = io.connect('http://localhost:3000');
  createCanvas(400, 400);
  background(0);
  let input = createInput().attribute('placeholder', 'Indtast brugernavn');

  //Når serveren sender besked om at tegne
  socket.on('drawingServer', drawScreen);
  function drawScreen(data){
    fill(255);
    noStroke();
    ellipse(data.x, data.y, 10, 10);
  }
}

//Når klienten tegner og sender besked
function mouseDragged(){
  let data = {
    x: mouseX,
    y: mouseY,
  }
  socket.emit('drawingClient', data);
}