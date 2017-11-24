

$('h1').click(
    function(){
        $('h1').fadeOut();   
    }
);

$("#knap1").click(
    function(){

    }
); 

$("#knap2").click(
    function(){

    }
); 


$("#knap3").click(
    function(){

    }
); 


/*
OPGAVER

Bemærk hvordan funktionen $('h1').click() fader overskrifter ud i dokumentet - altså: når man klikker på et (hvilket som helst) h1 element, kaldes funktionen.  
https://www.w3schools.com/jquery/jquery_fade.asp

Lad os prøve at sørge for at det kun er den øverste overskrift man kan klikke på og fade ud. Brug dens id: #title

Kan du i stedet få alle p-elementer til at fade ud, når man klikker på overskriften?

Brug metoden .css() til at sætte farven på overskriften, når man klikker på den
https://www.w3schools.com/jquery/jquery_css.asp

Lad os prøve at animere elementet. Brug metoden animate til at sætte en ny højde på overskrifter:
https://www.w3schools.com/jquery/jquery_animate.asp

Se alle animationer her:
https://www.w3schools.com/jquery/eff_animate.asp

- - - - - - - -

Prøv at gøre sådan så afsnittet <p class="hidden"> bliver vist, når man klikker på knappen "Vis skjult"
https://www.w3schools.com/jquery/eff_show.asp

Kan du også sørge for at afsnittet fader langsomt ind? (læs ovenstående link i manualen)

Det ville være bedre hvis afsnittet blev skjult igen, når man klikker en gang til. Kan du ordne det?
https://www.w3schools.com/jquery/eff_toggle.asp

Kan du få hele siden til at fade ud når man klikker på knappen "skjul siden"?

Kan du få skriftfarven på alle p-elementer til at skifte når man klikker på knappen "Skift farve"? 
https://www.w3schools.com/jquery/jquery_css.asp

- - - - - - - - 

Lidt sværere opgaver...

Kan du lave en ny knap i index.html som du giver et id og en tekst. Og kan du derefter lave en funktion her i scriptet, som gør at knappen får dokumentets body til at have width:80% og margin:auto?

Lav en anden knap, "input", som laver en alert med den tekst som står i input-feltet..
https://www.w3schools.com/jquery/html_val.asp

Kan du lave en funktion, som laver en alert når man har valgt noget i dropdown boksen?
https://api.jquery.com/change/

- - - - - - - -

Halvsvære opgaver...

I index.html er der et textarea med id "brugerinput" og en knap under med id "opret". Nedenfor er der et afsnit med id "brugertekst". Kan du få værdien fra textarea ind i afsnittet når man trykker på knappen?
https://www.w3schools.com/jquery/html_append.asp
https://www.w3schools.com/jquery/html_val.asp

Lad os så prøve at gå et skridt videre. Med jQuery og AJAX kan man hente data ind udefra. 
Se om du kan loade teksten fra dokumentet tekst.txt ind i dette html. Hvis du kiggr i index.html finder du et afsnit som hedder <p id="external"> - brug dette id til at kalde load metoden:
https://www.w3schools.com/jquery/jquery_ajax_load.asp

- - - - - - - -

Og et par ..sværere opgaver

Måske kan du også gøre sådan så der skiftes til en tilfældig farve når man klikker på knappen farve? Her skal du bruge rgb(20,30,40) og så kam du oprette et tilfældigt nummer mellem 0 og 255 med metoden Math.random
https://www.w3schools.com/jsref/jsref_random.asp

Kan du lave dropdown boksen så man vælger mellem to forskellige html sider - og bliver sendt videre til dem når man vælger?

*/

