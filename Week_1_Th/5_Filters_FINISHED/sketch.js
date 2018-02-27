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

	//try different freq values and filter types 
	filt = new Tone.Filter(100, "highpass").toMaster();

	// noise.connect(filt)
}

function draw() {
	filt.frequency.value = mouseX;
	// console.log(map(mouseX, 0, windowWidth, 20, 12000))
}