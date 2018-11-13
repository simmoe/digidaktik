
function setup() {

    //Først en variabel til din api-key
    var apiKey = "bf21868c5ab540dbafd3e48d33cec2f2";
    //Og til den url du vil søge på - se flere her: 
    var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json";
    //Dernæst bygger du den query du vil udføre
    var query = "?q='gold rush'&sort=newest&begin_date=19350101&end_date=19360101";
    //Se flere parametre her; https://developer.nytimes.com/article_search_v2.json#/Documentation/GET/articlesearch.json
    
    //LoadJSON tager en URL + den funktion der skal kaldes, når den får noget tilbage
    loadJSON(url + query + "&api-key=" + apiKey, gotData);

    function gotData(data) {
        // Grabbing a single headline from the results.
        var headline = data.response.docs[0].headline.main;
        var source = data.response.docs[0].source;
        var url = data.response.docs[0].web_url;
        //Skriv hele JSON objektet ud i konsollen så du kan undersøge det
        console.log(data);
        createElement('h1',headline);
        createP(source);
        createA('Læs artikel', url);
    }
}