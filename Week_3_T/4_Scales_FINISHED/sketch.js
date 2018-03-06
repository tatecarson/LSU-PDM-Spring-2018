var synth, tune;

function setup() {
	//Visualization 
	//setup audio context 
	Nexus.context = Tone.context

	//remember to set DIV in html file 
	var spectrogram = new Nexus.Spectrogram('#spec')
	spectrogram.connect(Tone.Master);

	var oscilloscope = new Nexus.Oscilloscope('#osc')
	oscilloscope.connect(Tone.Master);

	tune = new Tune();
	//slendro, ji_12, partch_43, young-lm_piano, johnston_81
	tune.loadScale('ji_12');
	tune.tonicize(440);
	tune.mode.output = 'frequency';

	//convert ratio into frequency 
	var scale = tune.scale.map(x => x * 440);

	//types - up, down, upDown, downUp, alternateUp, alternateDown, random, randomWalk, randomOnce
	var pattern = new Tone.CtrlPattern(scale, 'upDown');
	var random = new Tone.CtrlRandom(0.1, 1);

	synth = new Tone.FMSynth({
		"harmonicity": 8,
		"modulationIndex": 2,
		"oscillator": {
			"type": "sine"
		},
		"envelope": {
			"attack": 0.001,
			"decay": 2,
			"sustain": 0.1,
			"release": 2
		},
		"modulation": {
			"type": "square"
		},
		"modulationEnvelope": {
			"attack": 0.002,
			"decay": 0.2,
			"sustain": 0,
			"release": 0.2
		}
	}).toMaster();

	seq = new Tone.Sequence((time, note) => {
		synth.triggerAttackRelease(pattern.next(), random.value, time)
	}, pattern.values, '4n').start();

	// Tone.Transport.start();
}