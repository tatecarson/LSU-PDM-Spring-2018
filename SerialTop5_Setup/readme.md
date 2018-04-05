# Arduino <--> p5js Communication

See the [library](https://github.com/vanevery/p5.serialport) repository for more examples.

## Installation

To communicate between Arduino and p5js you need two peices of software

### p5.serialport

A p5.js library that enables communication between your p5 sketch and Arduino (or another serial enabled device). This provides the functions to read the incoming data from Arduino.

I have included this library as a cdn in the html of this repository. You do not need to download it as long as you include this link in your projects.

### p5.serialcontrol

[download](https://github.com/vanevery/p5.serialcontrol/releases/download/0.0.6/p5.serialcontrol-darwin-x64.zip)

An application that opens the connection between arduino and p5js

#### Linux

If on linux run `npm install -g p5.serialserver` in the terminal. This installs the program you need to make the connection.

## Setup

### Arduino sketch

We will be using AnalogInOutSerial to test that our connection is working. You can find it in your IDE under Examples -> 0.3.Analog -> AnalogInOutSerial

We only need to build the part of the circuit with the potentiometer to be able to vary our data. Hook that up and open the serial monitor to test your circuit. Be sure to close this when you're done because it can block p5.serialcontrol from connecting.

### p5.serialcontrol

Open the application.

* select the port that your Arduino is communicating on. You can find it by going your IDE then tools -> port.
* Then click open to open the connection.

#### Linux

If on linux instead of opening this application now in your terminal type `node startserver.js`. Make sure you are in the correct directory.

### p5 sketch

Now cd into the basic-sketch directory and run that folder. You should see a simple readout of the sensor and output values in the browser. If the values change when you move the potentiometer then the connection is working.
