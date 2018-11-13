/*
Med henvisning til R. Luke DuBois som har skrevet p5.speech.js

Bygger på W3C Web speech Recognition: 
https://w3c.github.io/speech-api/speechapi.html

Koden nedenfor er modificeret mhp at introducere talegenkendelse i teknikfaget på A-niveau i gymnasiet. 

Reference: http://ability.nyu.edu/p5.js-speech/

...*/


	var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
    var words;
    var igenKnap;
    var sentence = "";
    var leftDiv;
    var counter;


	function setup()
    {
		createCanvas(400, 300);

        igenKnap = createElement('button', 'Prøv igen');
        igenKnap.addClass("hidden");
        igenKnap.mousePressed(doItAgain);

        
        words = createElement('div', "<h2>Sig noget</h2>");
        words.addClass("words");
        words.attribute('id', 'words');

        myRec.onResult = showResult;
		myRec.start();
	}  

	function draw()
	{
		// why draw when you can talk || why talk when you can draw??
        if(sentence.includes("cirkel")||sentence.includes("cirkler"))
           {
               stroke(173,216,230);
               ellipse(width/2,height/2,200,200);
           
           }
            if(sentence.includes("gul"))
                document.body.style.backgroundColor = "yellow";
            if(sentence.includes("rød"))
                document.body.style.backgroundColor = "red";
            if(sentence.includes("orange"))
               document.body.style.backgroundColor = "orange";
            if(sentence.includes("grøn"))
               document.body.style.backgroundColor = "green";  
            //det sortner for mine øjne
            if(sentence.includes("sort"))
               document.body.style.backgroundColor = "black";  
	}

	function showResult()
	{
		if(myRec.resultValue==true) {
            $("#words").fadeOut(10000);
            sentence = myRec.resultString;
			words.html("<p>" + sentence + "</p>", true);
            igenKnap.addClass("shown");
            setTimeout(function(){ location.reload(); }, 3000);
		}
	}

    function doItAgain(){
        location.reload();
    }

