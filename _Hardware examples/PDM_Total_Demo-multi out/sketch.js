// PDM Total Demo
// Jesse Allison (2016)
//
// Must download the p5.serialport.js and p5.serialcontrol
//  https://github.com/vanevery/p5.serialport
// https://github.com/vanevery/p5.serialcontrol/releases Then run the app.
//
//  Add p5.serialport.js to your Sketch Folder
//  add this line to the index.html in your Sketch Folder
//  <script src="libraries/p5.serialport.js" type="text/javascript"></script>
//
//  Wire up the Arduino and run the included sketch on the arduino
//  Run this code
//
// Sites:
//     https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-input-to-the-p5-js-ide/
//     https://github.com/vanevery/p5.serialport

var serial; // the serial port for communication
var currentString; // Something sent over

// sensors[] will store all of the sensor data parsed from the arduino
// button, light, + user added variables refer to their index in sensorArray.
// To add more sensors, you'll need to add them to the arduino code, then
// reference them in the array.
var sensors = [];
var button = 0;
var light = 1;

var outMessage = '1';

function setup() {
	createCanvas(600, 400);
	textSize(24);
	// currentString = '';

	// Instantiate our SerialPort object
	serial = new p5.SerialPort();

	// Let's list the ports available
	serial.list();

	// Assuming our Arduino is connected, let's open the connection to it
	// Change this to the name of your arduino's serial port
	serial.open('/dev/cu.usbmodem1411');

	// Register some callbacks

	// When we connect to the underlying server
	serial.on('connected', serverConnected);

	// When we get a list of serial ports that are available
	serial.on('list', gotList);

	// When we some data from the serial port
	serial.on('data', gotData);

	// When or if we get an error
	serial.on('error', gotError);

	// When our serial port is opened and ready for read/write
	serial.on('open', gotOpen);
}

function draw() {
	fill(255);
	rect(0, 0, width, height);
	fill(200, 0, 255);
	textAlign(10, 10);
	text('Programming Digital Media Rocks!', 10, 50);
	text('button: ' + sensors[button], 40, 80);
	text('light: ' + sensors[light], 40, 110);
	text('outMessage: ' + outMessage, 40, 150);
}

// We are connected and ready to go
function serverConnected() {
	println('We are connected!');
}

// Got the list of ports
function gotList(thelist) {
	// theList is an array of their names
	for (var i = 0; i < thelist.length; i++) {
		// Display in the console
		println(i + ' ' + thelist[i]);
	}
}

// Connected to our serial device
function gotOpen() {
	println('Serial Port is open!');
}

// Uh oh, here is an error, let's log it
function gotError(theerror) {
	println(theerror);
}

// There is data available to work with from the serial port
function gotData() {
	var serialIn = serial.readStringUntil('\r\n');
	if (serialIn) {
		sensors = serialIn.split(',');
	}

	//console.log(currentString);
}

function mouseReleased() {
	if (outMessage === '1') {
		outMessage = '0';
	} else {
		outMessage = '1';
	}
	serial.write(outMessage);
}
