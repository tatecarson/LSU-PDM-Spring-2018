/*
  Analog input, analog output, serial output

  Reads an analog input pin, maps the result to a range from 0 to 255 and uses
  the result to set the pulse width modulation (PWM) of an output pin.
  Also prints the results to the Serial Monitor.

  The circuit:
  - potentiometer connected to analog pin 0.
    Center pin of the potentiometer goes to the analog pin.
    side pins of the potentiometer go to +5V and ground
  - LED connected from digital pin 9 to ground

  created 29 Dec. 2008
  modified 9 Apr 2012
  by Tom Igoe

  This example code is in the public domain.

  http://www.arduino.cc/en/Tutorial/AnalogInOutSerial
*/

// These constants won't change. They're used to give names to the pins used:
const int analogInPin_1 = A0;  // Analog input pin that the potentiometer is attached to
const int analogInPin_2 = A1; 

const int analogOutPin = 9; // Analog output pin that the LED is attached to

int sensorValue_1 = 0;        // value read from the pot
int sensorValue_2 = 0; 

int outputValue_1 = 0;        // value output to the PWM (analog out)
int outputValue_2 = 0; 

const int tx_flag = 255; 

char incomingBytes[10];      // a variable to read incoming serial data into

void setup() {
  // initialize serial communications at 9600 bps:
  Serial.begin(9600);
}

void loop() {
  // read the analog in value:
  sensorValue_1 = analogRead(analogInPin_1);
  sensorValue_2 = analogRead(analogInPin_2);

  // map it to the range of the analog out:
  outputValue_1 = map(sensorValue_1, 0, 1023, 0, 255);
  outputValue_2 = map(sensorValue_2, 0, 1023, 0, 255);

  // change the analog out value:
  analogWrite(analogOutPin, outputValue);

  //transmit all sensors to p5 
  Serial.write(tx_flag); 
  Serial.write(outputValue_1); 
  Serial.write(outputValue_2);   
}
  

