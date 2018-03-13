var osc1,
	// osc2,
	osc3,
	noise;

function setup() {
	//Visualization 
	//setup audio context 
	Nexus.context = Tone.context

	//remember to set DIV in html file 
	var spectrogram = new Nexus.Spectrogram('#spec')
	spectrogram.connect(Tone.Master);

	var oscilloscope = new Nexus.Oscilloscope('#osc')
	oscilloscope.connect(Tone.Master);

	//try different types of oscillators 
	osc1 = new Tone.Oscillator(400, "square").start();

	osc2 = new Tone.Oscillator(50, "sine").start();

	//notice the difference between multiply and add 
	//add sounds the same as just playing both at the same time 
	//experiment with different signal types 
	mult = new Tone.Multiply();
	osc1.connect(mult, 0, 0);
	osc2.connect(mult, 0, 1);


	gainNode = new Tone.Gain();
	mult.connect(gainNode);

	gainNode.toMaster();
}