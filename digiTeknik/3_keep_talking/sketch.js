/*
Med henvisning til R. Luke DuBois som har skrevet p5.speech.js

Bygger på W3C Web speech Recognition: 
https://w3c.github.io/speech-api/speechapi.html

Koden nedenfor er modificeret mhp at introducere talegenkendelse i teknikfaget på A-niveau i gymnasiet. 

Reference: http://ability.nyu.edu/p5.js-speech/

...*/

var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
	myRec.continuous = true; // do continuous recognition
	myRec.interimResults = true; // allow partial recognition (faster, less accurate)

	var x, y;
	var dx, dy;
    var speechBox, instructions, wordArray;

	function setup()
	{
		// graphics stuff:
		createCanvas(800, 600);
		background(255, 255, 255);
		fill(0, 0, 0, 255);
		x = width/2;
		y = height/2;
		dx = 0;
		dy = 0;

		// instructions:
		textSize(20);
		textAlign(LEFT);

		myRec.onResult = parseResult; // recognition callback
		myRec.start(); // start engine
        
        instructions = createElement("div", "draw: up, down, left, right, clear");
        speechBox = createElement("div", "Say something...");
        wordArray = createElement("div", "History: ");
        
	}

	function draw()
	{
		ellipse(x, y, 5, 5);
		x+=dx;
		y+=dy;
		if(x<0) x = width;
		if(y<0) y = height;
		if(x>width) x = 0;
		if(y>height) y = 0;
	}

	function parseResult()
	{
		// recognition system will often append words into phrases.
		// so hack here is to only use the last word:
		var mostrecentword = myRec.resultString.split(' ').pop();
		if(
            mostrecentword.indexOf("left")!==-1 ||
            mostrecentword.indexOf("venstre")!==-1
          ) 
           {             
           dx=-1;dy=0; 
        }
		else if(mostrecentword.indexOf("right")!==-1) { dx=1;dy=0; }
		else if(
            mostrecentword.indexOf("up")!==-1 ||
            mostrecentword.indexOf("OB")!==-1             
        ) 
        { 
            dx=0;dy=-1; 
        }
		else if(mostrecentword.toLowerCase().indexOf("down")!==-1) { dx=0;dy=1; }
		else if(mostrecentword.indexOf("clear")!==-1) { background(255); }
        
		speechBox.html(mostrecentword, false);
		wordArray.html(myRec.resultString, true);
	}

