/*Følgende sætter en socket server op på port 3000*/
var request = require('request');
var io = require('socket.io');
var express = require('express');

var app = express();
var server = app.listen(3000);
app.use(express.static('client'));
var socket = require('socket.io');
var io = socket(server);
console.log("Socket server kører på port 3000");

//Scchhhyyyyy...
let baseUrl = "http://xmlopen.rejseplanen.dk/bin/rest.exe";
let service = "location";
let input = "";
let originId = 0;
let destId = 0;
let useTog = 0;
let date = "01.01.2018";
let time = "12.00";
today = new Date();

io.sockets.on('connection', function (socket) {
	console.log('connection: ' + socket.id);

	socket.on("search", function(config){
		switch (config.service) {
			case "location":
				service = "location";
				input = config.input;			
				break;
			case "trip":
				service = "trip";
				originId = config.from.id;
				destId = config.to.id;
				useTog = 1;
				date = today.getDate() + "." + today.getMonth() +1 + "." + today.getFullYear();
				time = today.getHours() +1 + "." + today.getMinutes();
			default:
				break;
		}
		searchApi(config);
	});

	function searchApi(config) {
		request({
			baseUrl: baseUrl,
			url: service,
			qs: {
				format:"json",
				input:input,
				originId: originId,
				destId: destId,
				useTog: useTog,
				date: date,
				time: time
			}
		}, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				console.dir("Svar fra søgning på " + baseUrl+"/"+service+"?format=json&originId="+originId+"&destId="+destId+"&time="+time+"&date="+date+"and useTog=1");
				data = JSON.parse(body);
				io.sockets.to(socket.id).emit("result", config, data);
			}
		});
	}
});