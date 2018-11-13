var input, button;

function setup() {
    //Søgefelt
    input = createInput().position(20, 20);
    //Knap, som når man trykker på den, kalder funktionen doSearch()
    button = createButton('søg i tracks').position(input.width + 40, 20).mouseClicked(doSearch);
}

function doSearch() {
    //Read the docs: https://www.npmjs.com/package/spotify-web-api-js
    var spotifyApi = new SpotifyWebApi();
    //access_token er nødvendigt før vi kan bruge api'et. Men det får vi når login er gennemført
    spotifyApi.setAccessToken(access_token);
    //Kald funktionen searchTracks med det der står i input feltet
    spotifyApi.searchTracks(input.value(), {
            limit: 10,
            offset: 0
        })
        //Og når der så kommer et reaultat...
        .then(function (data) {
            console.log(data);
            //Slet tidligere søgeresultater
            $('.tracks').remove();
            //lav en variabel som holder de enkelte sange 
            var songs = data.tracks.items;
            //Og lav en knap for hver af dem man kan trykke på
            songs.forEach(element => {
                createButton(element.name).addClass('tracks').mousePressed(
                    function () {
                        //Her kunne man gøre så meget andet
                        alert(element.name);
                    }
                );
            });
        //Og hvis kaldetsøgningen kikser, vis fejlen i konsollen
        }, function (err) {
            console.error(err);
        });
}