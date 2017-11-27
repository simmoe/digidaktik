/*
Du sidder nu med et script foran dig som nogen andre har skrevet. Det er helt okay, der er ikke copyright på og bagmanden har selv lagt dokumentationen ud på nettet: https://medium.com/@kerrywall/building-a-simple-quiz-with-jquery-eb76c6062806.Det er stadig god stil at sørge for at citere ophavet et eller andet sted.

OPGAVER 

For det første skal du have din quiz til at passe til dit tema. Find et godt baggrundsbillede derude og skift det ud. 
https://www.w3schools.com/cssref/pr_background-image.asp

Så er der skrifttyper. Øverst i index.html kan du se hvordan der bruges integrerede skrifttyper fra google - hent dine egne og brug dem i stedet (ved at modificere i style.css)
https://fonts.google.com/

Men nu er der farveerne - tilpas stylesheetet så det passer til dit tema.

Så er der alle teksterne som ikke er på dansk og som er lavet til det mærkelige nail-polish vs star trek tema. Find dem i index.html og lav dem om.  

Nu til spørgesmålene. Nedenfor finder du et array : content. Det er opdelt i navne (som kan være enten star-trek episoder eller neglelak-navne). Indsæt dine egne quiz-spørgsmål - og tjek om koden stadig virker hvis du har flere eller færre..

Nu er spørgsmålene måske rigtige - men hvad med svarene? Søg efter noget med nail eller trek i filerne og få svarene til at passe.  

Quizzens afslutning håndteres i metoden trekApp.generate - se om du kan få teksten lavet om til noget der passer til din quiz.  

- - - - - - - -
Lidt sværere opgave 

Til sidst kunne der godt være en knap, der gør det muligt at begynde forfra. Kan du lave sådan en?
https://www.w3schools.com/jsref/met_loc_reload.asp

Det kunne også være fint hvis forsiden fylder hele skærmen - og man så scroller til quizzen, som gør det samme. Se fx her:
https://j.eremy.net/set-element-height-to-viewport/



*/



// some standard initializations; don't mess with these
var counter = 0,
score = 0;

// your quiz data should go into this variable in object form -- one object per item. sample format below:

/* 

{
  "name": "Nomad's Dream",
  "type": "trek"
}

*/

var content = [
    {"name":"Nomad's Dream","answer":"polish"},
    {"name":"Obsession","answer":"trek"},{"name":"Meet Me On The Star Ferry","answer":"polish"},
    {"name":"Dangerous Liasion","answer":"polish"},
    {"name":"What Are Little Girls Made Of?","answer":"trek"},
    {"name":"In My Back Pocket","answer":"polish"},
    {"name":"Tomorrow Is Yesterday","answer":"trek"},
    {"name":"Black Onyx","answer":"polish"},
    {"name":"Lights of Emerald City","answer":"polish"},
    {"name":"The Man Trap","answer":"trek"},
    {"name":"The Naked Time","answer":"trek"},
    {"name":"What Wizardry Is This?","answer":"polish"},
    {"name":"This Side Of Paradise","answer":"trek"},
    {"name":"Eternal Flame","answer":"polish"},
    {"name":"I Feel The Earth Move","answer":"polish"},
    {"name":"Day Of The Dove","answer":"trek"},
    {"name":"The Way To Eden","answer":"trek"},
    {"name":"Garden of Eden","answer":"polish"},
    {"name":"Friday's Child","answer":"trek"},
    {"name":"Days of Wine and Roses","answer":"polish"},
    {"name":"The Apple","answer":"trek"},
    {"name":"Thunder Road","answer":"polish"},
    {"name":"All Our Yesterdays","answer":"trek"},
    {"name":"Is There No Truth In Beauty?","answer":"trek"}];

// assigning the commonly accessed dom elements to variables

var $name = $('.name'),
    $generate = $('.generate'),
    $result = $('.results'),
    $score = $('.score'),
    $thanks = $('.thanks'),
    $options = $('.options');

var trekApp = {};

// the initial state of the quiz:
// starts off by showing the "name" value in the first item in the data object
// hides the 'next' button, results, score and 'thanks for playing' html as a default

trekApp.init = function() {
  var selection = content[counter];
  type = selection["answer"];
  $name.html(selection["name"]);
  $generate.hide();
  $result.hide();
  $score.hide();
  $thanks.hide();
}

// the function for moving through the quiz

trekApp.generate = function() {

  // if there are still questions remaining, show the next one
  
  if (counter < content.length) {
    var selection = content[counter];
    $name.html(selection["name"]);
    type = selection["answer"];  

    $result.hide();
    $score.hide();
    $name.show();
    $options.show();

  // if there are no more questions, thank the user for playing and give the option to tweet the score
  
  } else {
    $thanks.show().append(" <a href='http://twitter.com/home?status=Take the Star Trek Episode vs. Nail Polish Colour quiz! I scored " + score + " out of " + counter + " http://kerrywall.com/trek-polish' target='_blank'>Tweet your score</a>.");
  }

  $generate.hide();
}

// the event handler that determines whether the user's selection was right

$('.choice').click(function(e) {
  var chosenAnswer = e.target.id;  
  $result.show();
  $score.show();
  $name.hide();
  $options.hide();

  // setting up "full sentence" values for each type -- add else if statements if you have more than two possibilities
  
  if (type == "trek") {
    fullAnswer = "Star Trek episode";
  } else {
    fullAnswer = "nail polish shade";
  }
   
  // tell the user whether they're right or wrong, and add a point to the score if they're right

  if (chosenAnswer == type) {
    $result.html("<span class='right'>Affirmative, captain!</span> It's a " + fullAnswer + ".");
    score++;
  } else {
    $result.html("<span class='wrong'>Dammit, Jim!</span> It's a " + fullAnswer + ".");
  }
  counter++;
  $score.html("You're " + score + " for " + counter + ".");
  $generate.show();
  
});

$(document).ready(function() {
  trekApp.init();
});

$generate.on('click', function() {
  trekApp.generate();
});