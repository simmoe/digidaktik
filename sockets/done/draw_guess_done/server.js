//Serveren brger en pakke der hedder express. Express gør det hurtigt og nemt at lave en webserver på en bestemt port.
var express = require('express');
//app er en instans af express objektet.  
var app = express();
//Nu opretter vi så en server og siger hvilken port den skal lytte på. 
var server = app.listen(3000);
//Serveren får besked om at vise (statiske) filer i mappen public hvis der kommer en interesseret klient 
app.use(express.static('public'));
//Importer pakken socket ind i variablen socket
var socket = require('socket.io');
// Lav en instans af socket objektet, som bruger den server vi lavede tidligere 
var io = socket(server);
//Fortæl konsollen at serveren kører
console.log("Socket server kører på port 3000");

let players = [];
let words = ['ged', 'myresluger', 'ko', 'undulat', 'citron', 'flødebolle', 'hjernedød', 'hammerslag', 'øgenavn', 'fregner', 'pippi'];
const noOfPlayers = 3;
const turnSeconds = 30;
const prepareSeconds = 8;
let timer;
let currentTurn = 0;
let state = 'prepare';
let seconds;
let currentWord;

// Når eventet connection sker, kald funktionen nySocket
io.sockets.on('connection', nySocket);

function nySocket(socket) {
  console.log('Ny forbindelse med socket.id: ' + socket.id);
  socket.emit('yourId', socket.id);

  //Når klienter sender et brugernavn
  socket.on('username', addPlayer);

  function addPlayer(username) {
    if (noOfPlayers > players.length) {
      console.log("Lægger ny spiller til: " + username);
      players.push({
        username: username,
        id: socket.id,
        point: 0,
      });
      socket.emit('stateMessage', 'Venter på andre spillere..');
    }
    //Når der er nok spillere
    if (noOfPlayers == players.length) {
      console.dir(players);
      playersReady();
    }
  }

  socket.on('guess', guess);

  function guess(guess) {
    console.log('Gæt: ' + guess + ' ' + currentWord + ' ' + socket.id);
    if (guess == currentWord) {
      players[currentTurn].point += 5;
      players.forEach(function (p, i) {
        if (p.id == socket.id) {
          players[i].point += 5;
          console.log('Ord gættet af ' + players[i].username);
        }
      });
      playersReady();
    }
  }

  function playersReady() {
    currentTurn++;
    if (currentTurn == noOfPlayers) {
      currentTurn = 0;
    }
    clearInterval(timer);
    io.sockets.emit('playersReady', players);
    io.to(players[currentTurn].id).emit('yourTurn', words[0]);
    state = 'prepare';
    currentWord = words[0];
    words.splice(0, 1);
    seconds = prepareSeconds;
    timer = setInterval(tick, 1000);
    console.log('starter playersReady - ord: ' + currentWord + ' tur: ' + currentTurn);
  }

  //Kører hvert sekund...
  function tick() {
    if (state == 'prepare' && seconds <= 0) {
      state = 'playing';
      seconds = turnSeconds;
    }
    if (state == 'playing' && seconds <= 0) {
      playersReady();
    }
    let stateMessage = {
      state: state,
      seconds: seconds,
    }
    io.sockets.emit('gameControl', stateMessage);
    console.log(stateMessage);
    seconds--;
  }

  //Når serveren modtager beskeden 'disconnect', kald funktionen disConnect()
  socket.on('disconnect', disConnect);

  function disConnect() {
    console.log('Bruger har afbrudt forbindelsen: ' + socket.id);
    players.forEach(function (p, i) {
      if (p.id == socket.id) {
        players.splice(i, 1);
      }
    });
    clearInterval(timer);
    io.sockets.emit('stateWaiting');
  }

  //Modtag og videresend tegninger
  socket.on('drawingClient', sendDrawing);

  function sendDrawing(data) {
    io.sockets.emit('drawingServer', data);
  }
}