/*Koden nedenfor er skrevet mhp at introducere programmeringsbegreber i Informatik på C-niveau i gymnasiet. Her løkker...*/


function setup() {
    createCanvas(400, 400);
    noStroke();
    colorMode(HSB);    
    
    //lilla baggrund
    background(330, 54, 36);
    
    //lille brun firkant
    fill(0, 46, 34);
    rect(width/2-40, 60, 80, 80);
    
    //brun baggrund
    fill(23, 66, 31);
    rect(0, height/2, width, height/2);
    
    //lilla firkant
    fill(0, 46, 34);
    rect(width/2-40, 260, 80, 80);
    
    setTimeout(removeThem, 3000); 
}



function removeThem(){
    //alert("Ja?");
    background(255);
}

/*
OPGAVER

Skriv en funktion der kaldes i setup() og som fjerne baggrundene så der kun er de to midterste firkanter tilbage efter fem sekunder

-brug settimeout: 
setTimeout(function(){ alert("Hello"); }, 3000); 



*/