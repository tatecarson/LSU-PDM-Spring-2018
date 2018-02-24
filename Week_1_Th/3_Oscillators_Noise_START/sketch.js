var osc1,
	osc2,
	osc3,
	noise,
	mult,
	filt,
	signal;

function setup() {
	Nexus.context = Tone.context // or another audio context you have created

	var spectrogram = new Nexus.Spectrogram('#target')
	spectrogram.connect(Tone.Master);

	var oscilloscope = new Nexus.Oscilloscope('#osc');
	oscilloscope.connect(Tone.Master);

	osc1 = new Tone.Oscillator(400, "sine").start();

	osc2 = new Tone.Oscillator(200, "sine").start();

	// osc3 = new Tone.Oscillator(500, "sine").start();


	mult = new Tone.Multiply();
	osc1.connect(mult, 0, 0);
	osc2.connect(mult, 0, 1);
	// osc3.connect(mult, 0, 2);

	gainNode = new Tone.Gain(0.8);
	mult.connect(gainNode);
	gainNode.toMaster();

	// var noise = new Tone.Noise('pink').start();

	// filt = new Tone.Filter(100, 'lowpass').toMaster()
	// noise.connect(filt);
}