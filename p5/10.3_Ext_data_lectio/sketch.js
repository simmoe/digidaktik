// Examples use USGS Earthquake API:
//   https://earthquake.usgs.gov/fdsnws/event/1/#methods
var earthquakes;

function setup(){
    createCanvas(400,300);
    background(0);
    //$('#mydiv').load('http://google.com'); // SERIOUSLY!
 
 expect(1);
    stop();
    
    jQuery.get('http://google.com', function(res){
        ok(
            !!(res && res.responseText),
            'GET Request to Google.com succeeded!'
        );
        start();
    });

}

function draw() {
  if (!earthquakes) {
    // Wait until the earthquake data has loaded before drawing.
    return
  }
  background(200);
}