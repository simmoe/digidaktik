
function setup() {

    //Først en variabel til din api-key
    var apiKey = "bf21868c5ab540dbafd3e48d33cec2f2";
    //Og til den url du vil søge på - se flere her: 
    var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json";
    //Dernæst bygger du den query du vil udføre
    var query = "?q='edison'";
    query += "&sort=newest";
    query += "&begin_date=18790101";
    query += "&end_date=18800101";
    //Se flere parametre her; https://developer.nytimes.com/article_search_v2.json#/Documentation/GET/articlesearch.json
    
    //LoadJSON tager en URL + den funktion der skal kaldes, når den får noget tilbage
    loadJSON(url + query + "&api-key=" + apiKey, gotData);

    function gotData(data) {
        // Grabbing a single headline from the results.
        var docs = data.response.docs[0];
        //Skriv hele JSON objektet ud i konsollen så du kan undersøge det
        console.log(data);
        createElement('h1',docs.headline.main);
        createP(docs.source);
        createP(docs.snippet);
        createA('Læs artikel', docs.web_url);
    }
}

/*
Prøv at lave listen så den udskriver de første ti artikler i stedet for kun en

Prøv at udskrive en liste med de første ti artikler om D. Trump fra sidste måned 

Prøv at find ud af hvad der stod i New York Times, 9/11

Prøv at lave et søgefelt på siden (createInput, createButton - se p5 referencen) så du kan søge direkte i databasen på keyword


*/