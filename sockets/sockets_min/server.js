console.log("Jeg lever og jeg er i færd med at blive en webserver");

//Servern brger en pakke der hedder express. Express gør det hurtigt og nemt at lave en webserver på en bestemt port.
var express = require('express');

//app er en instans af express objektet.  
var app = express();

//Nu opretter vi så en server og siger hvilken port den skal lytte på. 
var server = app.listen(3000);

//Vis disse statiske filer i mappen public hvis der kommer en interesseret klient 
app.use(express.static('public'));

// Importer pakken socket ind i variablen socket
var socket = require('socket.io');

// Lav en instans af socket objektet, som bruger den server vi lavede tidligere 
var io = socket(server);

// Når eventet connection sker, kald funktionen newConnection
io.sockets.on('connection', newConnection);

//Implementér funktionen newConnection  
function newConnection(socket) {
    console.log('Ny forbindelse!!' + socket.id);
    socket.on('mus', mouseMsg);

    function mouseMsg(data) {
        console.log(data);
        socket.broadcast.emit('mus', data);
    }

}
