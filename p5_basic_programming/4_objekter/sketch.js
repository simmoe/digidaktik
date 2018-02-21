/*
Et objekt er en måde at samle variable på. Nedenfor ser du en variabel - square - som er skrevet som en funktion. 
*/

function square(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.display = function(){
        rect(this.x, this.y, this.w, this.h);        
    }
}

var square_1;

function setup() {
    createCanvas(600, 400);
    //Her oprettes så en såkaldt "instans" af objektet. Bemærk at instansen oprettes med de variable som sendes i parantes - derfor kaldes funktionen en "constructor"  
    square_1 = new square(300, 300, 60, 80);
}

function draw() {
    background(0);
    fill(255);
    square_1.display();
}



/*
OPGAVER

Firkant objekter er lidt kedelige - de kan kun vises. 

Opgave 1
Se først om du kan oprette en funktion mere i objektet square, som du kalder moveX(). Metoden skal sætte objektets x-værdi (this.x) til musens x-værdi (mouseX). 

Nu følger objektet horisontalt efter musen. Men det er lidt mekanisk.

Der er en formel som du kan bruge til at få firkanten til at følge efter musen på en mere "levende" måde. Tænk sådan her: hver gang moveX() bliver udført (og det gør den 60 gange i sekundet), skal objektets x-værdi blive liiidt mere ligesom musens x-værdi. 

Opgave 2
Sæt this.x = 5% af musens x-værdi plus 95% af sig selv hver gang moveX bliver kaldt. 

Opgave 3 - udvid funktionen, så den også gælder musens y-værdi

Opgave 4
Lav procentdelen hvormed objektet flytter sig i retning af musen til en variabel (ligesom this.x etc) - og tag variablen med i constructor funktionen. 

Opgave 5
Prøv at oprette tre ander instanser af objektet - square_2, square_3 og square_4
Opret dem på samme måde som square_1 i setup(), men giv dem forskellige værdier (x, y, h, w, p) i constructor funktionen

Opgave 6 
Giv objekterne forskellige farver ved at bruge fill(r, g, b) funktionen før display() - eller endnu bedre ved at 

Opgave 7
Prøv at lav dine squares endeposition til et logo..

*/