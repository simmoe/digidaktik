var number = 1;

function nextQuestion(number){
    var str = "question-" + number;
    document.getElementById("main").innerHTML =     document.getElementById(str).innerHTML; 
}

function doTheMath(theNumber){
    if(theNumber==24){
        return 2;
    }else{
        return 99;
    }
}