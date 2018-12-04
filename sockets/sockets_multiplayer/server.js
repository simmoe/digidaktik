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

/* 
OPGAVER

Lad os først teste applikationen i en lokal browser. 
Vi kan se at server konsollen registrerer at der kommer nye forbindelser og klienten forbinder 

Lad os først sørge for at klienter får deres eget socket.id at vide, når de forbinder sig:
Send beskeden "yourId" fra serveren så snart en klient har forbundet:
socket.emit('yourId', socket.id);

Modtag beskeden hos klienten og gem den i en variabel
socket.on('yourId', setId);
function setId(id){
  myId = id;
}

Lad os så sætte noget spilmekanik op på serveren. Vi kunne sige at vi vil lave et spil tegn og gæt, bare som eksempel.
Vi skal bruge minimum tre klienter, et array med ord, et antal sekunder hver tur skal tage, 
og så skal vi holde styr på hvis tur det er til at tegne og hvis tur det er til at gætte

Vi kan dele opgaverne op som følger:

OPRET VARIABLE PÅ SERVEREN
players
words
turnSeconds
whosTurn
noOfPlayers

OPRET VARIABLE PÅ KLIENTEN
På klienten har vi først brug for at vide om spillet er gået i gang (og om vi er med) 
Vi kunne vise et input felt til brugernavn og prøve at sende det for at se om serveren har plads til os 
Senere skal vi vise spillere og deres point samt noget tid der tæller ned
til sidst skal vi også kunne vise enten det ord man skal tegne eller et felt til at indtaste gæt i

let myTurn, brugernavn_input, gaet_input, point_tavle, tid_taeller;

Lad os oprette felterne i setup(), fx:
brugernavn_input = createInput();
etc...

SEND BRUGERNAVN FRA KLIENT(ERNE)
Det næste vi skal gøre er at oprette en funktion på klienten der sender et brugernavn (og dermed forsøger at deltage i spillet):

brugernavn_input.changed(sendBrugernavn);
function sendBrugernavn(){
  socket.emit('brugernavn', brugernavn_input.value());
}

MODTAG BRUGERNAVNE PÅ SERVEREN 
Serveren skal nu have en funktion der venter på brugernavne. 
Hver gang der kommer et brugernavn skal den selvfølgelig 
-tjekke om der er plads til flere spillere 
-lægge spillerne til i spiller arrayet
-vi kan bygge arrayet sådan her: 

players.push(
          {
            id: socket.id,
            brugernavn: brugernavn,
            point: 0,
            turn: false,
            word: "",
          }

-tjekke om der er 3 spillere - altså nok til at starte et spil
-og hvis det er tilfældet sende et startsignal til spillerne

START SPIL FRA SERVEREN 
Serveren skal nu vælge en spiller der skal tegne og et ord der skal gættes. 
Vi kunne nøjes med at sende ordet til den spiller der skal tegne, men vi antager at folk ikke kan kode javascript
Så vi sender bare alt til alle - et JSON array med alle spillerne, som både indeholder info om tur, navn, ord osv

MODTAG RUNDE PÅ KLIENTERNE
Nu skal klienterne så starte en runde. 
De får altså beskeden beginRound, som indeholder alle de oplysninger de skal bruge
Undtagen sekunderne, men dem ordner vi lidt senere
Lad os starte med at gøre de nødvendige ting klar
Klienten sætter
-myturn = false (så vi ikek risikerer en eller anden gammel variabel)
-fjern brugernavn_input (den skal vi aldrig bruge mere)
-visk pointtavlen ud (så den er klar til at blive udfyldt)
-visk ordet væk 

Klienten skal så løbe spiller arrayet igennem og
-skrive brugernavn, tur og point for hver spiller i feltet med pointtavlen
-tjekke om det er spillerens egen tur, og hvis det er det
 -fjerne gættefeltet
 -sætte flag myTurn = true
 -vise ordet

Og hvis det ikke er spillerens tur skal den 

-fjerne tegnefunktionen
-vise gætte input
-sende gæt til serveren... 

MODTAG GÆT PÅ SERVEREN 
Nu laver vi så funktionen på serveren der modtager gæt - hvis det rigtige ord er gættet, skal funktionen..






















*/