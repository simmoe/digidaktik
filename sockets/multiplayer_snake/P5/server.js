//Spillere gemmes i et javascript dictionary objekt. Også kaldet et object med et JSON array i. 
//Det skal indeholde en liste med de unikke spillere. 
var maxPlayers = 3;
var minPlayers = 3;
var nofPlayers = 0;
var playing = false;
var nowPlaying;
var scl = 20;
var width = 300;
var height = 300;
var food = {};

console.log("Jeg lever og jeg er i færd med at blive en multiplayer webserver");
//Vælg et sted til maden
pickLocation();


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

// Når eventet connection sker, kald funktionen nySocket
io.sockets.on('connection', function (socket) {
    console.log('Ny forbindelse!' + socket.id);
    //Hent array med aktive socket.id'er
    var players = Object.keys(io.sockets.clients().connected);
    console.log("Alle sockets: " + players);
    //Send arrayet til alle klienter, så de ved hvor mange der er med
    data = {
        players: players,
    }
    io.sockets.emit("newPlayer", data);

    io.sockets.emit("setFood", food);
    //Når klienter sender tastetryk...
    socket.on('move', function (keyCode) {
        var moveData = {
            id: socket.id,
            keyCode: keyCode,
        }
        io.sockets.emit("movePlayers", moveData);
    })

    socket.on("disconnect", function () {
        console.log("Disconnect: " + socket.id);
        io.sockets.emit("removePlayer", socket.id);
    });

    //Når maden skal flyttes 
    socket.on("getFood", function(){
        pickLocation();        
        io.sockets.emit("setFood", food);
    });
    // Når serveren modtager beskeder ved navn 'brugernavn', kald funktionen nyBruger
    socket.on('brugernavn', nyBruger);

    function nyBruger(brugernavn) {
        console.log('Modtager brugernavn fra ' + socket.id);

        //Send id'et tilbage som reference
        socket.emit("id", socket.id);

        //Hvis der er plads til flere spillere...
        if (nofPlayers < maxPlayers) {
            //Læg en spiller til i players
            nofPlayers++;
            console.log('Lægger ny spiller til, der er nu ' + nofPlayers);
            players[socket.id] = {
                brugernavn: brugernavn,
                x: 0,
                y: 0,
            };
            //Send bedsked 'ny bruger' til alle - også den nye bruger
            io.sockets.emit('ny spiller', players);
        } else {
            //Ellers - send besked til den nye bruger om at prøve igen senere...
            socket.emit('kø');
        }
        //Hvis spillet er klar til at gå i gang
        if (nofPlayers >= minPlayers && !playing) {
            console.log('Starter spil med ' + nofPlayers + " spillere...");
            playing = true;
            io.sockets.emit('start', players);

        }
    }

    //Når serveren modtager beskeden 'disconnect', kald funktionen disConnect()
    socket.on('disconnect', disConnect);

    function disConnect() {
        if (socket.id in players) {
            nofPlayers--;
        }
        console.log('Bruger har afbrudt forbindelsen: ' + socket.id);
        delete players[socket.id];
        console.log('Har fjernet spiller, der er nu ' + nofPlayers);
        if (playing && nofPlayers < minPlayers) {
            console.log('Ikke nok spillere - sender besked');
            io.sockets.emit('ikke nok');
            playing = false;
        }
    }

    //Når serveren modtager beskeden 'disconnect', kald funktionen disConnect()
    socket.on('space', jump);

    function jump(brugernavn) {
        console.log(brugernavn + ' har trykket space...');
        io.sockets.emit('space', brugernavn);
    }
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function pickLocation() {
    var cols = Math.floor(width / scl);
    var rows = Math.floor(height / scl);
    food.x = getRandomInt(cols);
    food.y = getRandomInt(rows);
}