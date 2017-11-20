

$('header').click(
    function(){
        $('#title').fadeOut();   
    }
);

$("#klik").click(
    function(){
        $('.hidden').toggle();
    }
); 

$("#skift").click(
    function(){
        var r = Math.floor((Math.random() * 255) + 1);
        var g = Math.floor((Math.random() * 255) + 1);
        var b = Math.floor((Math.random() * 255) + 1);
        
        $('p').css("color", "rgb(" + r + ", " + g + ", " + b + ")");
    }
); 

$("#tekst").click(
    function(){
        alert($('#secret').html());
    }
); 

$("#foot").click(
    function(){
        $('#panel').slideToggle();
    }
); 

$("#margin").click(
    function(){
        $('body').css({"width":"80%", "margin":"auto"});
    }
); 

$("#inp").click(
    function(){
        alert($('#email').val());
    }
); 

$("#udefra").click(
    function(){
        $('#external').load("tekst.txt");
    }
); 

$("#udefra").click(
    function(){
        $('#external').load("tekst.txt");
    }
); 


$("#select").change(
    function(){
        alert($("#select").val());
    }
);


/*
OPGAVER

Brug funktionen $('header').click() til at fade overskriften ("jQuery") ud på samme måde som den anden
https://www.w3schools.com/jquery/jquery_fade.asp

Prøv at gøre sådan så afsnittet <p class="hidden"> bliver vist, når man klikker på knappen
https://www.w3schools.com/jquery/eff_show.asp

Kan du også sørger for at den fader langsom ind?

Det ville være bedre hvis den blev skjult når man klikker igen. Kan du ordne det?
https://www.w3schools.com/jquery/eff_toggle.asp

Kan du få hele siden til at fade ud når man klikker på knappen?

Kan du få skriftfarven på alle p-elementer til at skifte når man klikker på knappen "Skift farve"? 
https://www.w3schools.com/jquery/jquery_css.asp

- - - - - - - - 

Lidt sværere opgaver...

Måske kan du også gøre sådan så der skiftes til en tilfældig farve når man klikker på knappen farve? Her skal du bruge rgb(20,30,40) og så kam du oprette et tilfældigt nummer mellem 0 og 255 med metoden Math.random
https://www.w3schools.com/jsref/jsref_random.asp

Kan du lave en knap som får dokumentets body til at have width:80% og margin:auto?

Lav en anden knap, "input", som laver en alert med teksten i input-feltet, når man klikker på den
https://www.w3schools.com/jquery/html_val.asp

Kan du lave en funktion, som laver en alert når man har valgt noget i dropdown boksen?
https://api.jquery.com/change/

- - - - - - - -

Halvsvære opgaver...

Lad os så prøve at gå et skridt videre. Med jQuery og AJAX kan man hente data ind udefra. 
Se om du kan loade teksten fra dokumentet tekst.txt ind i <p id="external">
https://www.w3schools.com/jquery/jquery_ajax_load.asp



*/

