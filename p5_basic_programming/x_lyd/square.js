/*
En Square er et objekt. Som du kan se i sketch.js laver man en ny square, og giver den samtidig et koordinat den skal starte på. Ved at kalde funktionerne display(), move() og bounce() sørger man for at firkanten bevæger sig rundt. 
*/


function square(x, y) {
    this.x = x;
    this.y = y;
    this.velocity = 0;
    this.gravity = 0.6;
    
    this.display = function(){
        fill(this.col);
        rect(this.x, this.y, 40, 40); 
        stroke(255);
    }
    
    

    this.up = function(){
        this.y = height - vol * 100;
        print(height - (vol * 100));
    }

}

