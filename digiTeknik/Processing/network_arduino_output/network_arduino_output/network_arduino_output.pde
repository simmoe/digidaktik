import processing.serial.*;
import cc.arduino.*;
Arduino arduino;

void setup() {
  size(470, 200);
  
    println(Arduino.list());  
    arduino = new Arduino(this, Arduino.list()[2], 57600);
    arduino.pinMode(4, Arduino.OUTPUT);
    arduino.digitalWrite(4, Arduino.HIGH);
}

void draw() {
}