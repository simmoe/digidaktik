/*Følgende sætter en socket server op på port 3000*/
var request = require('request');
var io = require('socket.io');
var express = require('express');

/* var app = express();
var server = app.listen(3000);
app.use(express.static('client'));
var socket = require('socket.io');
var io = socket(server);
console.log("Socket server kører på port 3000");
 */

/* io.sockets.on('connection', function (socket) {
	console.log('connection: ' + socket.id); 
*/


//Scchhhyyyyy...
let baseUrl = "http://xmlopen.rejseplanen.dk/bin/rest.exe";

function searchApi() {
	request("www.google.com", function (error, response, body) {
		if (!error && response.statusCode == 200) {
			console.dir(body) // Print the google web page.
		}
	});
}


//}); 
