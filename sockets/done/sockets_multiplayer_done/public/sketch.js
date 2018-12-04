// Denne variabel indeholder vores socket connection
var socket;
let mySocketId;
let brugernavn_input, gaet_input, point_tavle, point_tavle_tekst, tid_taeller, tegne_ord;
let myTurn = false;

function setup() {
  // Start en socket connection til serveren
  // Hvis du engang flytter projektet ud på nettet, skal du sekive en ip i stedet for localhost 
  socket = io.connect('http://localhost:3000');
  createCanvas(400, 400);
  background(0);
  brugernavn_input = createInput('');
  gaet_input = createInput();
  gaet_input.hide();
  point_tavle = createDiv('Skriv dit brugernavn og tryk enter');
  tid_taeller = createDiv('20 sek');
  tid_taeller.position(30,30);
  tegne_ord = createDiv("Ord");
  tegne_ord.position(30, 60);
  let styles = "font-family:arial;font-size:25px;color:white;";
  tegne_ord.style(styles);
  tid_taeller.style(styles);

  brugernavn_input.changed(sendBrugernavn);
  function sendBrugernavn(){
    console.log('Sender brugernavn: ' + brugernavn_input.value());
    socket.emit('brugernavn', brugernavn_input.value());
  }

  socket.on('yourId', setId);
  function setId(id){
    mySocketId = id;
  }

  socket.on('beginRound', beginRound);
  function beginRound(players){
    console.log("Starter tur med spillere");
    console.log(players);
    myTurn = false;
    brugernavn_input.hide();
    point_tavle_tekst = "";
    players.forEach(handlePlayers);
    function handlePlayers(e){
      point_tavle_tekst += e.brugernavn + " ";
      point_tavle_tekst += "Tegner: " + e.turn + " ";
      point_tavle_tekst += "Point: " + e.point + "<br>";
      if(e.id == mySocketId && e.turn == true){
        myTurn = true;
        gaet_input.hide();
        tegne_ord.html(e.word);
      }else if (!myTurn){
        tegne_ord.html("Gæt tegningen");
        myTurn = false;
        gaet_input.show();
      }
    }
    point_tavle.html(point_tavle_tekst);
  }


  socket.on('drawingServer', drawScreen);
  function drawScreen(data){
    fill('green');
    ellipse(data.x, data.y, 10, 10);
  }
}

function mouseDragged(){
  let data = {
    x: mouseX,
    y: mouseY,
  }
  socket.emit('drawingClient', data);
}