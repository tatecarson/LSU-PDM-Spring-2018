# Arduino <--> p5js Communication

First clone this repository, we will be using basic-sketch as a starter sketch for serial communication.

See the [library](https://github.com/vanevery/p5.serialport) repository for more examples.

## Installation

To communicate between Arduino and p5js you need two pieces of software.

### p5.serialport

A p5.js library that enables communication between your p5 sketch and Arduino (or another serial enabled device). This provides the functions to read the incoming data from Arduino.

I have included this library as a cdn in the html of this repository. You do not need to download it as long as you include this link in your projects.

### p5.serialcontrol GUI - use if on mac

[download](https://github.com/vanevery/p5.serialcontrol/releases/download/0.0.6/p5.serialcontrol-darwin-x64.zip)

An application that opens the connection between arduino and p5js

#### Linux / Windows

First make sure you have Nodejs installed. You can download it [here](https://nodejs.org/en/). To make sure you have installed it correctly type `node -v` into the terminal. You should see a version number if installation was successful.

Next, run `npm install -g p5.serialserver` in the terminal. This installs the program you need to make the connection. We have installed it globally so that it can be run from anywhere with the command `p5serial`.

## Setup

### Arduino sketch

We will be using AnalogInOutSerial to test that our connection is working. You can find it in your IDE under Examples -> 0.3.Analog -> AnalogInOutSerial

We only need to build the part of the circuit with the potentiometer to be able to vary our data. Hook that up and open the serial monitor to test your circuit. Be sure to close this when you're done because it can block p5.serialcontrol from connecting.

### p5.serialcontrol - mac

Open the application.

* select the port that your Arduino is communicating on. You can find it by going your IDE then tools -> port.
* Then click open to open the connection.

#### Linux / Windows

To start the server type `p5serial` into the terminal. You should see `p5.serialserver is running` printed as a result.

### p5 sketch

Before running make sure that the `portName` variable is set to your port. You can see that mine is `const portName = '/dev/cu.usbmodem1421'`. Yours will be something that looks like that but you need to check first to make sure this is correct.

Now cd into the basic-sketch directory and run that folder. You should see a simple readout of the sensor and output values in the browser. If the values change when you move the potentiometer then the connection is working.
