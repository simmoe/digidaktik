/*
Et objekt er en måde at samle variable på. Nedenfor ser du et objekt ved navn objekt  
*/

function Objekt(parameter1, parameter2) {
    this.parameter1 = parameter1;
    this.parameter2 = parameter2;
    
    this.variabel1 = 50;
    this.variabel2 = 50;

    this.metode_1 = function(){
        fill(0,255,255);
        ellipse(this.parameter1, this.parameter2, this.variabel1, this.variabel2);        
    }
}

