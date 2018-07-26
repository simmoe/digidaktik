function vismig(sideId){
	var list = document.getElementsByClassName("content");
	for(i=0; i < list.length; i++){
		list[i].className = "content";
	}

	document.getElementById(sideId).className = "content visible";
}

function sejDato(){
	document.getElementById("datofelt").innerHTML = Date();
}

function baggrundsskifter(){
	document.getElementById("navi").style.backgroundColor = "red";
} 

var vis = true;
function visKnap(){
	if(vis){	
		// 1. Create the button.
		var button = document.createElement("button");
		button. innerHTML = "Jeg er den nye knap. Se mig!!";
		// 2. Append somewhere.
		document.getElementById("knap"). appendChild(button);
		// 3. Add event handler.
	}else{
		var knappen = document.getElementById("knap"); 
		knappen.removeChild(knappen.childNodes[0]);
 	}
 	vis = !vis;
}
function vis5(){
	var billede = document.createElement("IMG");
	billede.src="https://upload.wikimedia.org/wikipedia/commons/7/71/2010-kodiak-bear-1.jpg";
	billede.style.width = "100%";
	billedHolder = document.getElementById("billede");
	billedHolder.appendChild(billede);
	setTimeout(function(){ 
		billedHolder.removeChild(billedHolder.childNodes[0]); 
	}, 5000);
}


function formindsk(){
	var pageWidth = document.body.offsetWidth;	
	document.body.style.width = pageWidth - 30 + "px";
}

function forsvind(){
	document.getElementById("forsvind").style.transition = "all 4s";
	document.getElementById("forsvind").style.marginLeft = "-1000px";
}


var currentDate = new Date();
var tomorrow = currentDate.getDate() + 1;
var end = new Date('01/' + tomorrow + '/2017 12:0 AM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('countdown').innerHTML = days + 'dage ';
        document.getElementById('countdown').innerHTML += hours + 'timer ';
        document.getElementById('countdown').innerHTML += minutes + 'minutter ';
        document.getElementById('countdown').innerHTML += seconds + 'sekunder til dagen er SLUT';
    }

    timer = setInterval(showRemaining, 1000);




function nySide(){
		//Hent alle artikler på siden og gem deres antal i en variabel
		var artikler = document.getElementsByTagName("article");
		var max = artikler.length +1;

		//Lav en ny artikel på siden med et nyt id
		var nyArtikel = document.createElement("article");
		nyArtikel.id = "side" + max;
		nyArtikel.className = "content";
        //Lav en ny overskrift
        var nyOverskrift = document.createElement("H1");
        //var nyOverSkrift = "<h1></h1>"
        nyOverskrift.innerHTML = document.getElementById("overskrift").value;
        var indhold = document.createElement("P");
        indhold.innerHTML = document.getElementById("tekst");   
        //Sæt overskriften og indholdet ind i den nye artikel
        nyArtikel.appendChild(nyOverskrift);
        nyArtikel.appendChild(indhold);
        //Indsæt artiklen
        document.body.insertBefore(nyArtikel,document.body[0]);
        //Lav et nyt li element til menuen
        var menu = document.createElement("LI");
        var link = document.createElement("A");
        link.href="#";
        link.innerHTML = document.getElementById("titel");
        link.onclick = function(){
            vismig(nyArtikel.id);
        }
        menu.appendChild(link);
        document.getElementById("menu"). appendChild(li);
    }

function gemFarver(){
    var baggrundsfarve;
    var forgrundsfarve;
    if(document.getElementById("hvidsort").checked){
    	baggrundsfarve = "white";
    	forgrundsfarve = "black";
    }else if(document.getElementById("sorthvid").checked){
    	baggrundsfarve = "black";
    	forgrundsfarve = "white";
    }else if(document.getElementById("blaagul").checked){
    	baggrundsfarve = "blue";
    	forgrundsfarve = "yellow";
    }else if(document.getElementById("graa").checked){
    	baggrundsfarve = "darkgrey";
    	forgrundsfarve = "lightgrey";
    }
    document.body.style.backgroundColor = baggrundsfarve;
    document.body.style.color = forgrundsfarve;
	
	localStorage.setItem("forgrundsfarve", forgrundsfarve);
	localStorage.setItem("baggrundsfarve", baggrundsfarve);
}

window.addEventListener("DOMContentLoaded", function() {
	if(localStorage.getItem("baggrundsfarve") != null){
   	 document.body.style.backgroundColor = localStorage.getItem("baggrundsfarve");
   	 document.body.style.color = localStorage.getItem("forgrundsfarve");	
	}
}, false);

