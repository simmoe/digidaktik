/*

I denne lille skitse, skal du lære at sætte og læse cookies - nåja, og så laver vi programmet, så det samtidig viser brugeren præcis hvilke oplysninger vi har sat. Reference på W3C: https://www.w3schools.com/js/js_cookies.asp

*/

var location; //Lad os finde ud af noget om brugeren

function setup() {
    createCanvas(400, 400);
    navigator.geolocation.getCurrentPosition(savePos);
    background(0);
    fill(255);
    textSize(24);
    text("Klik for at sætte Cookie", 20, 40);
}

function draw() {
}

function display() {
    //Her skal vi sørge for at kuglen bliver vist
}
    
function move() {
    //Her skal vi sørge for at kuglen bevæger sig
}
    
function bounce () {
    //Her skal vi sørge for at kuglen ikke hopper denfor skærmen 
}

function mouseClicked(){
    setCookie("Cookie fra mig", location, 1);
    text("Cookie indsat på din computer.", 20, 80);
    btn = createButton("Klik for at vise dens indhold...");
    btn.mousePressed(visCookie);
}

function visCookie(){
    var indhold = getCookie("Cookie fra mig");
    alert(indhold);
}

function savePos(position){
    location = ("Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude);
    console.log(location);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "No cookie";
}


/*
OPGAVER



*/