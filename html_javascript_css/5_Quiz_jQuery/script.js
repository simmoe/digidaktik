/**
Herunder ser du en relativt simpel quiz, opbygget i jQuery.
Opgaven er at modificere quizzen med dit eget tema og dine egne spørgsmål - og så give den så meget udseende, animationer og funktionalitet som du kan..
**/

var questions = [{
    question: "In 1950 there were fewer than one billion children (aged 0-14) in the world. By 2000 there were almost two billion. How many do UN experts think there will be in 2100?",
    choices: ["Two billion", "Three billion", "Almost 4 billion"],
    correctAnswer: 1
}, {
    question: "What is 27*14?",
    choices: ["485", "634", "408", "528"],
    correctAnswer: 2
}, {
    question: "What is the busiest train station in the world?",
    choices: ["Grand Central, NY", "Shibuya, Tokyo", "Beijing Central, Chine", "Gard du Nord, Paris"],
    correctAnswer: 1
}, {
    question: "What is the longest river?",
    choices: ["Nile", "Amazon", "Mississippi", "Yangtze"],
    correctAnswer: 0
}, {
    question: "What is the busiest tube station in London?",
    choices: ["Waterloo", "Baker Street", "Kings Cross", "Victoria"],
    correctAnswer: 0
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;


//document.ready er en jQuery funktion der kaldes umiddelbart efter at siden er færdig med at loade
$(document).ready(function () {

    // Vis første spørgsmål 
    displayCurrentQuestion();

    // Når man klikker på next, tjek om 1) quizzen er slut 2) der er valgt et svar og ellers 3) gå videre... 
    $("#nextButton").click(function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $("#quizMessage").text("Please select an answer");
            } else {
                $("#quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; 

                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    // Change the text in the next button to ask if user wants to play again
                    $(document).find("#nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else { 
            // quiz er slut, lav teksten på next knappen om til 'Play Again?'
            quizOver = false;
            $("#nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});

// Her vises spørgsmålene 
function displayCurrentQuestion() {
    
    var question = questions[currentQuestion].question;
    var choiceList = $("#choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Sæt spørgsmålet ind i div'en med id question
    $("#question").text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $("#result").text("You scored: " + correctAnswers + " out of: " + questions.length);
}

function hideScore() {
    $("#result").hide();
}