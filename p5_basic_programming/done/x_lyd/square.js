/*
En Square er et objekt. Som du kan se i sketch.js laver man en ny square, og giver den samtidig et koordinat den skal starte på. Ved at kalde funktionerne display(), move() og bounce() sørger man for at firkanten bevæger sig rundt. 
*/


function square(x, y) {
    this.x = x;
    this.y = y;
    this.velocity = 0;
    this.leftish = 0.2;
    this.velocity = 0;
    this.col = [255,255,255];
    
    this.display = function(){
        fill(this.col);
        rect(this.x, this.y, 40, 40); 
        stroke(255);
    }
    
    this.update = function(){
        this.velocity -= this.leftish;
        this.x += this.velocity;
        if(this.x < 0){
            this.velocity = 0;
            this.x = 0;
        }
        if(this.x > width - 40){
            this.x = width - 40;
            this.velocity = 0;
        }
    }
    
    this.right = function(intensity){
        this.velocity += intensity;
    }

}

