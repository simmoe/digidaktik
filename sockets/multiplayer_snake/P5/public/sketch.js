// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/AaGK-fj-BAM

var s;
var socket;
var snakes = [];
var scl = 20;
var food = {};
var points;
var txt = "";
var mySnake = false;
var mySnakeIndex;

function setup() {
  createCanvas(300, 300);
  frameRate(10);
  points = createElement('div', '<h2>Point</h2>');
  // Start en socket til en server (HUSK hvis du vil gøre det over et netværk til en anden computer, skal du skive DENS IP før :3000)
  socket = io.connect('http://localhost:3000');
  // Kald connect for at få dit socket.id
  socket.on('connect', function () {
    //Hver gang serveren får en ny forbindelse, sender den et array med id'er på de aktive sockets  
    socket.on("newPlayer", function (data) {
      //Der er nye spillere -  tøm snake arrayet 
      snakes = [];
      //Løb det nye array igennem 
      data.players.forEach(function (p, i) {
        console.log(i);
        //Hvis id'et er klientens eget id, sæt mysnake = true
        if(p == socket.id){
          mySnake = true;
          mySnakeIndex = i;
        }
        snakes.push(new Snake(p, mySnake));
       });
    });
    //Fjern snake
    socket.on("removePlayer", function (id) {
      for (i = 0; i < snakes.length; i++) {
        if (snakes[i].id == id) {
          console.log("Fjerner snake: " + id);
          snakes.splice(i, 1);
        }
      }
    });
    socket.on("setFood", function(foodPos){
      setFood(foodPos);
    });
    //Modtag bevægelser frs spillere
    socket.on("movePlayers", function (moveData) {
      keyCode = moveData.keyCode;
      snakes.forEach(function (s) {
        if (s.id == moveData.id) {
          console.log("Modtager data: " + moveData.keyCode + " fra id: " + moveData.id);
          if (keyCode === UP_ARROW) {
            s.dir(0, -1);
          } else if (keyCode === DOWN_ARROW) {
            s.dir(0, 1);
          } else if (keyCode === RIGHT_ARROW) {
            s.dir(1, 0);
          } else if (keyCode === LEFT_ARROW) {
            s.dir(-1, 0);
          }
        }
      });
    });
  });
}



function mousePressed() {
  //s.total++;
}

function draw() {
  background(51);
  txt = "<h2>Point</h2>"
  snakes.forEach(function (s) {
    if (s.eat(food)) {
        socket.emit("getFood");
    } 
    //s.death();
    s.update();
    s.show();
    var me = s.mySnake?"You":"Other";
    txt += "<h5>" + me + "  " + s.total + 1 + " (" + s.x + ", " + s.y + " id: " + s.id + ")</h5>";
  });
  points.html(txt);

  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function setFood(foodPos){
  var cols = Math.floor(width / scl);
  var rows = Math.floor(height / scl);
  food = createVector(foodPos.x, foodPos.y);
  food.mult(scl);
}


//Send alle bevægelser fra brugeren til serveren i stedet for at flytte slangen
function keyPressed() {
  console.log(mySnakeIndex);
  socket.emit("move", keyCode);
}