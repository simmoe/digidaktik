

// Start variable
var counter = 0,
    score = 0;

// Quiz data array 

var content = [
    {"quote":"The man has very strong control over a country,","answer":"trump"},
    {"quote":"Sometimes it is necessary to be lonely in order to prove that you are right","answer":"putin"}];

// assigning the commonly accessed dom elements to variables

var $quote = $('.quote'),
    $generate = $('.generate'),
    $result = $('.results'),
    $score = $('.score'),
    $thanks = $('.thanks'),
    $options = $('.options');

var quizApp = {};

// the initial state of the quiz:
// starts off by showing the "quote" value in the first item in the data object
// hides the 'next' button, results, score and 'thanks for playing' html as a default

quizApp.init = function() {
  var selection = content[counter];
  type = selection["answer"];
  $quote.html(selection["quote"]);
  $generate.hide();
  $result.hide();
  $score.hide();
  $thanks.hide();
}

// the function for moving through the quiz

quizApp.generate = function() {

  // if there are still questions remaining, show the next one
  
  if (counter < content.length) {
    var selection = content[counter];
    $quote.html(selection["quote"]);
    type = selection["answer"];  

    $result.hide();
    $score.hide();
    $quote.show();
    $options.show();

  // if there are no more questions, thank the user for playing and give the option to tweet the score
  
  } else {
    $thanks.show().append(" <a href='http://twitter.com/home?status=Tag Trump vs Putin quizzen! Jeg scorede " + score + " ud af " + counter + " target='_blank'>Tweet din score</a>.");
  }

  $generate.hide();
}

// the event handler that determines whether the user's selection was right

$('.choice').click(function(e) {
  var chosenAnswer = e.target.id;  
  $result.show();
  $score.show();
  $quote.hide();
  $options.hide();

  // setting up "full sentence" values for each type -- add else if statements if you have more than two possibilities
  
  if (type == "trump") {
    fullAnswer = "Donald Trump";
  } else {
    fullAnswer = "Vladimir Putin";
  }
   
  // tell the user whether they're right or wrong, and add a point to the score if they're right

  if (chosenAnswer == type) {
    $result.html("<span class='right'>Affirmative, kaptajn!</span> Det er et citat af " + fullAnswer + ".");
    score++;
  } else {
    $result.html("<span class='wrong'>Dammit, Jim!</span> Det er et " + fullAnswer + " citat.");
  }
  counter++;
  $score.html("You're " + score + " for " + counter + ".");
  $generate.show();
  
});

$(document).ready(function() {
  quizApp.init();
});

$generate.on('click', function() {
  quizApp.generate();
});