/*
En Square er et objekt. Som du kan se i sketch.js laver man en ny square, og giver den samtidig et koordinat den skal starte på. Ved at kalde funktionerne display(), update() og right(), skal vi sørge for at firkanten bevæger sig hen over skærmen. 
*/

function square(x, y) {
    this.x = x;
    this.y = y;
    this.col = [255,255,255];
        
    this.display = function(){
        fill(this.col);
        rect(this.x, this.y, 40, 40); 
    }
    
    this.update = function(){

    }
    
    this.right = function(volume){

    }

}

/*

Opgave 1

Lad os begynde med at lave firkanten til en lille sky i stedet for en firkant. Find en sky med transparent baggrund på nettet - eller tegn en selv. 


Lad os forestille os at der sidder en støvsuger i venstre side af skærmen, som hele tiden trækker square mod venstre. Jvf Newton skal vi bruge noget der trækker (støvsugeren) og en hastighed der kan trækkes med. 

Opret to variable: leftForce og velocity og sæt dem til hhv 0.5 og 0;

I metoden update() skal leftForce trækkes fra velocity og dernæst skal velocity påvirke firkantens x-koordinat. 

_ _ _ _ 

Nu skulle firkanten gerne blive suget hurtigere og hurtigere mod venstre. Desværre forsvinder den så også ud af billedet

Opgave 2

Lav en betingelse (if(){}), som sørger for at hverken firkantens x-værdi eller velocity, kan blive større end 0;

Nu bliver firkanten suget pænt ud i venstre side af skærmen. Lad os så sørge for at man kan puste til den med funktionen right(). Right modtager allerede mikrofonens styrke - 

Opgave 3
Kan du regne ud hvad du skal gøre, for at styrken kommer til at påvirke firkanten, så den bliver "pustet" mod højre?

Hvis du kan det vil du opdage, at firkanten pludselig kan blive pustet meget langt ud af skærmen til højre - den kommer tilbage, men der gør noget tid, for hastigheden vil være blevet så stor, at det tager lang tid før den kan blive suget tilbage af leftForce. 

Opgave 4
Lav en ny betingelse i update, der sørger for at firkantens x-værdi ikke bliver større end bredden på skærmen, og at velocity bliver nulstillet når det sker


_ _ _ _ 

Sværere opgave

Funktionen image() kan tegne et almindeligt billede på skærmen i stedet for alle de der firkanter, cirkler osv. Se om du kan loade et billede af en sky eller lignende ind i programmet, og vise det i stedet for firkanten:
https://p5js.org/reference/#/p5/loadImage

*/