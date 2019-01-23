/*
Kort sagt kører vi ikke det her script i p5 som vi plejer, men i stedet anvender vi jQuery, som er et andet meget udbredt clientside javascript bibliotek.  

Syntaksen er lidt anderledes - man skriver $ foran en masse variable og metoder. $('P') betyder for eksempel: tag alle 
*/

var cards;
var dataPromise;
var myCards = [];
var currentCard = {};

function getTransportData() {
    if (!dataPromise) {
        // Store jQuery promise so that we can return it for subsequent calls ensuring only one AJAX request is made
        dataPromise = $.ajax({
            url: 'http://xmlopen.rejseplanen.dk/bin/rest.exe/location?input=roskilde&format=json',
            type: 'GET',
            format: 'json',
        });
    }
    return dataPromise;
}



getCardData(); // Start loading card data ASAP - subsequent calls will return the same promise anyway

$(document).ready(function () {
    getTransportData()
        .done(function (data) {
            console.log(data);
        });
});
