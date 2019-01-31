let socket;

function setup() {
	socket = io.connect('http://localhost:3000');
}