var noise,
	filt;

function setup() {
	//spectrogram 
	Nexus.context = Tone.context // or another audio context you have created
	//remember to set DIV in html file 
	var spectrogram = new Nexus.Spectrogram('#spec')
	spectrogram.connect(Tone.Master);

	var oscilloscope = new Nexus.Oscilloscope('#osc')
	oscilloscope.connect(Tone.Master);

	//try some noise types
	//pink, brown, white  
	noise = new Tone.Noise('white').start();
}