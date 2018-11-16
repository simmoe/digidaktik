/*
Kort sagt kører vi ikke det her script i p5 som vi plejer, men i stedet anvender vi jQuery, som er et andet meget udbredt clientside javascript bibliotek.  

Syntaksen er lidt anderledes - man skriver $ foran en masse variable og metoder. $('P') betyder for eksempel: tag alle 
*/

var cards;
var dataPromise;
var myCards = [];
var currentCard = {};

function getCardData() {
    if (!dataPromise) {
        // Store jQuery promise so that we can return it for subsequent calls ensuring only one AJAX request is made
        dataPromise = $.ajax({
            url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards?collectible=1',
            type: 'GET',
            dataType: 'json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "4eN3mrcAGLmshXAbVdhWVXsfA4CWp1ZRslWjsnVdGWQEWB0n6x");
            }
        });
    }
    return dataPromise;
}

function showCardRandom() {
    var cardNo = Math.floor(Math.random() * cards.length); // Select a random card number
    showCard(cardNo)
}

//Og her er så en funktion som tager et random nummer som input, og vælger det kort fra arrayet som passer til nummeret
function showCard(cardNo) {
    var obj = cards[cardNo];
    //Sæt currentcard så vi kan gemme det senere, hvis vi vil
    currentCard = obj;
    $("#card-image").attr('src', obj.img);
    $("#card-name").html(obj.name);
    $("#card-type").text(obj.type);
    $("#card-faction").text(obj.faction);
    $("#card-rarity").text(obj.rarity);
    $("#player-class").text(obj.playerClass);
    $("#artist-name").text(obj.artist);
}

//Og her er så en funktion som tager et random nummer som input, og vælger det kort fra arrayet som passer til nummeret
function saveCard() {
    console.log("Save");
    myCards.push(currentCard);
    $("#myCards").empty();
    var removeNo = 0;
    myCards.forEach(element => {
        $("#myCards").append("<button>" + element.name + "</button>").click(function () {
            console.log(removeNo);
            myCards.splice(removeNo, 1);
            removeNo++;
        });
    });
}

function flattenCards(data) {
    //Lad os kigge på hele json arrayet...
    console.log(data);
    //Tag fx alle individuelle kort i hele api'et 
    var result = [];
    for (var cards in data) {
        for (var i = 0; i < data[cards].length; i++) {
            result.push(data[cards][i]);
        }
    }
    //Og send dem tilbage til funktionen som ville hente dem: $(document).ready
    return result;
}

getCardData(); // Start loading card data ASAP - subsequent calls will return the same promise anyway

$(document).ready(function () {
    getCardData()
        .done(function (data) {
            $("#nextCard").text("Next");
            cards = flattenCards(data);
            showCardRandom();
        });
    $('#nextCard').click(showCardRandom);
    $('#saveCard').click(saveCard);
});
