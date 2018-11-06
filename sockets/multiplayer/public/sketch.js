var socket;
var mySocketId = "";
var deltager, spiller = false;
var besked, brugernavn_input, brugernavn_button;
var bg_color = [100, 200, 0];
var spillere = [];
var brugernavn = "";

function setup() {
    createCanvas(400, 400);
    background(bg_color);
    besked = createDiv("besked");


    //Hvis brugernavn ikke er indtastet
    if (!deltager) {
        indtastBrugernavn();
        besked.html("Skriv venligst dit brugernavn");
    }

    // Start en socket til en server (HUSK hvis du vil gøre det over et netværk til en anden computer, skal du skive DENS IP før :3000)
    socket = io.connect('http://localhost:3000');

    //Modtager besked fra serveren ved navn 'id' - sæt dit socketID 
    socket.on("id", setId);

    function setId(id) {
        mySocketId = id;
    }

    //Modtager besked fra serveren ved navn 'ny spiller', kald funktionen nySpiller
    socket.on('ny spiller', nySpiller);

    //Vis alle spillere
    function nySpiller(players) {
        console.log("Modtager spillere...");
        var i = 1;
        var msg = "";
        for (var id in players) {
            var player = players[id];
            msg = msg + '<p>Spiller ' + i + ': ' + player.brugernavn + '</p>';
            if (id == mySocketId) {
                deltager = true;
                brugernavn = player.brugernavn;
            }
            i++;
        }
        if (deltager) {
            console.log('Deltager...');
            fjernInput();
            besked.html(msg);
        } 
    }

    //Hvis vi modtager beskeden 'kø' fra serveren
    socket.on('kø', vent);
    function vent() {
        besked.html('Der er ikke flere pladser i dette spil - prøv senere...');
    }

    //Lad spillet begynde
    socket.on('start', begynd);

    function begynd(players) {
        console.log('Starter spil...');
        spiller = true;
        for (var id in players) {
            var player = players[id];
            console.log(player.brugernavn + '(' + player.x + ', ' + player.y + '):' + id);
            spillere.push(new Ball(player.brugernavn, player.x, player.y));
        }
    }

    //Hvis vi modtager beskeden 'ikke nok spillere' fra serveren
    socket.on('ikke nok', ikkeNok);

    function ikkeNok() {
        console.log('Ikke nok spillere...');
        spiller = false;
        spillere = [];
        besked.html('Der er længere spillere nok til dette spil - vent og se om nogen dukker op...');
    }

    //Hvis vi modtager beskeden 'space' fra serveren
    socket.on('space', jump);

    function jump(brugernavn) {
        console.log(brugernavn + ' har trykket space');
        spillere.forEach(element => {
            if(element.brugernavn == brugernavn){
                console.log('vi har fundet en bruger');
                element.up();
            }
        });
    }

}

function draw() {
    if (spiller) {
        background(bg_color);
        spillere.forEach(element => {
            element.show();
            element.update();
        });
    }
}

function keyPressed(){
    if(key==' ' && brugernavn!=""){
        console.log('pressed: ' + brugernavn);
        socket.emit('space', brugernavn);
    }
}

function indtastBrugernavn() {
    console.log('Indtast brugernavn');
    brugernavn_input = createInput();
    brugernavn_input.position(width / 2, height / 2);

    brugernavn_button = createButton('send');
    brugernavn_button.position(width / 2, height / 2 + 32);
    brugernavn_button.mousePressed(sendBrugernavn);
}

function sendBrugernavn() {
    //Send brugernavn til serveren og fjern input og knap elementer
    socket.emit('brugernavn', brugernavn_input.value());
}

function fjernInput() {
    console.log('Fjerner inputs');
    brugernavn_input.hide();
    brugernavn_button.hide();
}