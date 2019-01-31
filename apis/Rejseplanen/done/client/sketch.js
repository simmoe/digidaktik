let socket, fromInput, fromObj, toInput, toObj, toOrFrom, resultDiv, tripButton;
let fromSection, toSection, containerSection;

function setup() {
	socket = io.connect('http://localhost:3000');
	containerSection = createElement("section", "").addClass("container");
	fromSection = createElement("section").parent(containerSection);
	toSection = createElement("section").parent(containerSection);
	// Afrejse søgefelt
	createElement("h3", "Søg på afrejse")
		.parent(fromSection);
	fromInput = createInput()
		.parent(fromSection)
		.changed(function (e) {
			config = {
				service: "location",
				input: fromInput.value(),
				toOrFrom: "from"
			}
			socket.emit("search", config);
		});
	// Destination søgefelt
	createElement("h3", "Søg på destination")
		.parent(toSection);
	toInput = createInput()
		.parent(toSection)
		.changed(function (e) {
			config = {
				service: "location",
				input: toInput.value(),
				toOrFrom: "to"
			}
			socket.emit("search", config);
		});
	toSection.hide();

	tripButton = createElement("button", "Find rejse")
		.mousePressed(function(){
			data = {
				service: "trip",
				from: fromObj,
				to: toObj,
			}
			socket.emit("search", data);
		})
		.parent(containerSection)
		.hide();

	resultDiv = createElement("div").parent(containerSection);

	socket.on("result", function (config, data) {
		console.log(data);
		switch (config.service) {
			case "location":
				data.LocationList.StopLocation.forEach(function (e) {
					createElement("p", e.name)
						.parent(resultDiv)
						.mousePressed(function () {
							if (config.toOrFrom == "from") {
								fromObj = e;
								fromInput.value(e.name);
								toSection.show();
							} else {
								toObj = e;
								toInput.value(e.name);
								tripButton.show();
							}
							resultDiv.html("");
						});
				});
				break;
			case "trip":
			console.log("Udskriver rejser fra ", data.TripList.Trip);
				data.TripList.Trip.forEach(function(e){
					createElement("h2", "Rejse").parent(resultDiv);
					e.Leg.forEach(function(leg){
						createElement("p", leg.name + " " + leg.type + "  " + leg.Notes.text)
						.parent(resultDiv);
					});
				});
			break;

			default:
				break;
		}
	})
}