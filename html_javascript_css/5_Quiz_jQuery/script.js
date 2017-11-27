var countFrom = 30;
var counter = countFrom;
var question = 0;

$('#start').click(
    function(){
        evaluate(true);
    }
);

$('p').click(
    function(){
        alert($(this).text());
    }
);

function evaluate(answer){
    if(answer){
        question++;
        counter = countFrom;
        $('#content').html($("#qs" + question).html());
    }else{
        $('#content').load("questions.html #lose");
    }
}

//tid
setCounter();
function setCounter(){
    $('#counter').html(counter);
    counter --;
    setTimeout(setCounter, 1000);
}



/*
OPGAVER




Funktionen setCounter tæller tiden ned fra 20 - hvis man når 0 har man tabt. Kan du sørge for at funktionen lose() bliver kaldt når timeren når 0?



*/

