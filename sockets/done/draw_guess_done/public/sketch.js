// Denne variabel indeholder vores socket connection
var socket;
let mySocketId = "";
let state, usernameInput, guessInput, scoreboard, timeCounter, guessWord, prepareMessage, stateMessage;
let myTurn = false;

function setup() {
  // Start en socket connection til serveren
  // Hvis du engang flytter projektet ud på nettet, skal du sekive en ip i stedet for localhost 
  socket = io.connect('http://localhost:3000');
  createCanvas(500, 400);
  background('#F5F5F5');
  usernameInput = createInput().attribute('placeholder', 'Skriv dit brugernavn og tryk ENTER').changed(sendUsername);
  guessInput = createInput().attribute('placeholder', 'Skriv dine gæt og tryk ENTER').hide().changed(sendGuess);
  stateMessage = createElement('div');
  scoreboard = createElement('div');
  timeCounter = createElement('div', 'Sec').position(40, 30).style('color:#BDBDBD;font-size:25px;').hide();
  guessWord = createElement('div', 'Word').style('color:#757575;font-size:25px;').position(40, 55).hide();
  prepareMessage = createElement('div', 'Tegn og gæt om...').attribute('id', 'prepareMessage').hide();

  //Når brugeren trykker enter i input feltet sendes brugernavnet til serveren
  function sendUsername() {
    console.log('Sender mit brugernavn: ' + usernameInput.value());
    socket.emit('username', usernameInput.value());
    usernameInput.hide();
  }

  //Serveren sender socket.id tilbage
  socket.on('yourId', setId);

  function setId(myId) {
    console.log('Modtager mit id fra serveren ' + myId);
    mySocketId = myId;
  }

  //Modtag notifikationer fra serveren til spillerne og sæt stateMessage
  socket.on('stateMessage', stateMsg);
  function stateMsg(msg) {
    stateMessage.show().html(msg);
  }

  //Når der ikke er spillere nok, eller serveren sender ventesignal
  socket.on('stateWaiting', waiting);
  function waiting(){
    console.log('venter');
    guessInput.hide();
    guessWord.hide();
    prepareMessage.hide();
    timeCounter.hide();
    stateMessage.html('Spiller disconnected - venter på nye spilere..').show();
  }

  //Funktion der kaldes når der trykkes enter i gættefeltet
  function sendGuess() {
    if (state == 'playing') {
      socket.emit('guess', guessInput.value());
      guessInput.value('');
      guessInput.attribute('placeholder', 'Gæt sendt - prøv igen..');
    } else {
      guessInput.value('');
      guessInput.attribute('placeholder', 'Tyvstart - vent lidt..');
    }
  }

  //Når der skal tegnes 
  socket.on('drawingServer', drawScreen);
  function drawScreen(data) {
    fill(0);
    stroke(10);
    ellipse(data.x, data.y, 5, 5);
  }

  //Besked fra erveren om at spillere er klar
  socket.on('playersReady', playersReady);
  function playersReady(players) {
    console.log('Gør klar til spil - playersReady');
    //Ryd tegninger
    background('#F5F5F5');
    myTurn = false;
    stateMessage.hide();
    guessWord.hide();
    guessInput.attribute('placeholder', 'Skriv dine gæt og tryk ENTER').show();
    scoreboard.html('<h3>Scoreboard</h3>');
    players.forEach(function (p, i) {
      if (p.id == mySocketId) {
        scoreboard.html('<p><b>' + p.username + ' ' + p.point + '</b></p>', true);
      } else {
        scoreboard.html('<p>' + p.username + ' ' + p.point + '</p>', true);
      }
    });
  }

  //Når serveren sender os et tegneord
  socket.on('yourTurn', myTurnFunc);
  function myTurnFunc(word) {
    myTurn = true;
    guessInput.hide();
    guessWord.show();
    guessWord.html(word);
  }

  //Når serveren sender sekundtæller
  socket.on('gameControl', updateGame);
  function updateGame(stateMessage) {
    if (stateMessage.state == 'prepare') {
      state = 'prepare';
      timeCounter.hide();
      prepareMessage.show();
      prepareMessage.html('Tegn og gæt om...' + stateMessage.seconds);
    } else {
      state = 'playing';
      timeCounter.show();
      prepareMessage.hide();
      timeCounter.html(stateMessage.seconds).show();
    }
  }
}

//Når klienten skal tegne
function mouseDragged() {
  if (myTurn && state == 'playing') {
    let data = {
      x: mouseX,
      y: mouseY,
    }
    socket.emit('drawingClient', data);
  }
}