//beetjs is good for percussive sounds where you don't really need to change the notes 
var polySynth, monoSynth, kicks, hats;

function setup() {
	var beet = new Beet({
		context: Tone.context,
		tempo: 100
	});

	//Visualization 
	//setup audio context 
	Nexus.context = Tone.context

	//remember to set DIV in html file 
	var spectrogram = new Nexus.Spectrogram('#spec')
	spectrogram.connect(Tone.Master);

	var oscilloscope = new Nexus.Oscilloscope('#osc')
	oscilloscope.connect(Tone.Master);



	var fours = beet.pattern(4);
	var threes = beet.pattern(2);
	var seven = beet.pattern(3);

	var layer = beet.layer(fours, (time) => {

	});
	var layer2 = beet.layer(threes, (time) => {

	});
	var layer3 = beet.layer(seven, (time) => {

	})

	beet.add(layer, layer2, layer3);

	//to make stop 
	// beet.start()
}