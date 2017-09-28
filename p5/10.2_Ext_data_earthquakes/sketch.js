// Examples use USGS Earthquake API:
//   https://earthquake.usgs.gov/fdsnws/event/1/#methods
var earthquakes;

function setup(){
    createCanvas(400,300);
    background(0);
    $.get( "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=1&orderby=time", function( data ) {
    earthquakes = data;
  });
    
}

function draw() {
  if (!earthquakes) {
    // Wait until the earthquake data has loaded before drawing.
    return
  }
  background(200);
  // Get the magnitude and name of the earthquake out of the loaded JSON
  var earthquakeMag = earthquakes.features[0].properties.mag;
  var earthquakeName = earthquakes.features[0].properties.place;
  ellipse(width/2, height/2, earthquakeMag * 10, earthquakeMag * 10);
  textAlign(CENTER);
  text(earthquakeName, 0, height - 30, width, 30);
  noLoop();
}