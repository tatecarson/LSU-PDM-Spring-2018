var osc1,
	osc2,
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
	osc1 = new Tone.Oscillator(500, "square").toMaster()
	// osc1.start();

	osc2 = new Tone.Oscillator(50, "sine").toMaster()
	// osc2.start();

	osc3 = new Tone.Oscillator(400, "sine").toMaster()
	// osc3.start();

	//make additive synthesis 
	for (x = 200; x < 500; x += 50) {
		// new Tone.Oscillator(x, "sine").toMaster().start()
	}

	//try some noise types
	//pink, brown, white  
	var noise = new Tone.Noise('brown').toMaster();
	// noise.start();
}