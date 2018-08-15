<?php ?>
<h1>Opgaver</h1>
<p>På de her sider har i et lille system der fungerer - sådan næsten da. Det er jeres opgave at få alle siderne til at spille sammen, og dermed færdiggøre en fuldt funktionel tilmeldingsformular til LAN parties.</p>
<p>Opgaverne kan angå alle de teknologier der er i spil: html, styles, php eller javascript. Nogengange skal i selv finde ud af hvordan, andre gange er det specificeret i opgaven. Men opgaverne skal allesammen kunne løses indenfor disse rammer.</p>
<div class="collapsible">
    Få skidtet til at spille
</div>
<div class="content_col">
    <ul>
        <li>Forudsætningen for at vi kan arbejde med databasens tabeller er, at tabellerne eksisterer. Der skal derfor være en tabel i jeres database ved navn LAN, som indeholder felterne...
            <ol>
                <li>LAN_id (PRIMARY, INT(11) NOT NULL)</li>
                <li>titel (VARCHAR (255) Latin, NOT NULL)</li>
                <li>dato (DATE, NOT NULL)</li>
                <li>pladser (INT(11), NOT NULL)</li>
            </ol>
            Så.. Gå ind på denne URL: http://ditbugernavn.it.slotshaven.dk/phpmyadmin/. PHPMyadmin er et interface til den database der ligger på din server. Opret ovenstående tabel. Med denne tabel kan vi foreløbig oprette nye LAN parties og vise dem i en liste etc. Når vi skal til at lave tilmeldinger må vi have flere tabeller - men vi begynder her.
        </li>
        <li>Det næste i skal gøre, er at få oprettet forbindelse til den rigtige database i PHP siden. Alt det som har med selve forbindelsen at gøre, sker i filen connect.php. Gå ind i filen med FTP og sæt de rigtige parametre op til jeres egen database. Når der er forbindelse til Databasen vil det stå i statusmeddelelsen øverst på siden.</li>
        <i>Opret så nogle LAN parties på siden "Tilføj" - og tjek at de også dukker op på listen. Prøv at oprette begivenheder med datoer både før og efter i dag.</i>
        <li>Der er et par problemer her, som i måske selv kan finde ud af at løse.
            <ul>
                <li>For det første viser listen både kommende og tidligere LAN parties. Se om i kan lave noget PHP som sørger for at dele listen op i afholdte og kommende LAN parties.
                </li>
                <li>For det andet gemmes beskrivelser ikke lige nu. Der skal altså oprettes et felt til i tabellen (PHPMyadmin) og skrives noget PHP som sørger for at beskrivelser gemmes - og eventuelt vises på siden der oplister LAN parties. Se hvor langt i kan nå.
                </li>
            </ul>
            <li>Lad os se på noget styling og html. De første to menupunkter virker pænt, der kommer en lille blå streg under den sidefane man er på. De to næste (tilmeld og opgaver) gør ikke. Kan i løse det?</li>
    </ul>
</div>
<div class="collapsible">
    Tilmeldinger
</div>
<div class="content_col">
    <p>Lige nu har vi et system som håndterer en enkelt tabel: LAN. Men for at håndtere tilmeldinger må vi arbejde med flere tabeller. I hvert fald skal vi have en som hedder "Personer", som giver mulighed for at tilmelde folk til LAN Parties. Og når vi har oprettet sådan én, må vi være i stand til at skabe relationer mellem LAN parties og gæster. Altså skal vi lave en relationstabel.</p>
    <p>Lad os stave os igennem det...</p>
</div>
<div class="collapsible">
    Sværere/frie opgaver
</div>
<div class="content_col">
    <ul>
        <li>
            Giv siden en visuel identitet
        </li>
        <li>
            Implementér en mailfunktion som bekræfter tilmelding
        </li>
        <li>
            Lav en skitse i p5.js så man kan reservere hele borde ved at klikke på dem og skrive 8 navne
        </li>
    </ul>
</div>
<script>
    var coll = document.getElementsByClassName("collapsible");
    var i;
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active_col");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }

</script>
