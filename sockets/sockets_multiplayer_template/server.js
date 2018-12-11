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
//Fortæl konsollen at servern kører
console.log("Socket server kører på port 3000");

// Når eventet connection sker, kald funktionen nySocket
io.sockets.on('connection', nySocket);
//Funktionen nySocket er primært event-baseret - der reageres og svares på beskeder med socket.on og socket.emit
function nySocket(socket) {
    console.log('Ny forbindelse med socket.id: ' + socket.id);

    //Når serveren modtager beskeden 'disconnect', kald funktionen disConnect()
    socket.on('disconnect', disConnect);
    function disConnect() {
        console.log('Bruger har afbrudt forbindelsen: ' + socket.id);
    }

    socket.on('drawingClient', sendDrawing);
    function sendDrawing(data){
      io.sockets.emit('drawingServer', data);
    }
}
