function nextQ(number){
    var str = "question-" + number;
    if(document.getElementById(str)){
        document.getElementById("main").innerHTML = document.getElementById(str).innerHTML; 
        number = this.number;
    }else{
        alert("Kan ikke finde et element med dette id: " + str);
    }
}

function doTheMath(theNumber){
    if(theNumber==24){
        return 2;
    }else{
        return 99;
    }
}