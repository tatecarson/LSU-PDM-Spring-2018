var synth, tune, noise, loop, seq;

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
	//maybe there's a better way to do this? 
	var scale = tune.scale.map(x => x * 440);

	//types - up, down, upDown, downUp, alternateUp, alternateDown, random, randomWalk, randomOnce
	var pattern = new Tone.CtrlPattern(scale, 'alternateUp');

	//Tone's way of doing random numbers, could also use p5.js random()
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

	var synth0 = new Tone.Synth({
		'oscillator.type': 'square10',
		envelope: {
			attack: 0.001,
			decay: 0.2,
			sustain: 0
		}
	}).toMaster()

	//pattern.next() - gives the next note in the pattern 
	//random.value - 
	seq = new Tone.Sequence((time, note) => {
		synth.triggerAttackRelease(pattern.next(), random.value, time)
	}, pattern.values, '32n').start();

	var loop0 = new Tone.Loop(function (time) {
		synth0.triggerAttack("A2", time)
	}, 0.5).start(0)

	var synthProb = new Nexus.Slider('#synthprob', {
		'size': [120, 20],
		'min': 0,
		'max': 1,
		'step': 0.1,
		'value': 0
	})

	synthProb.on('change', v => seq.probability = v)

	var squareProb = new Nexus.Slider('#squareprob', {
		'size': [120, 20],
		'min': 0,
		'max': 1,
		'step': 0.1,
		'value': 0
	})

	squareProb.on('change', v => {
		loop0.probability = v;
		console.log(v)
	})

	//TODO: maybe you can't update the scale while the transport is running
	var chooseScale = new Nexus.Select('#scale', {
		'size': [100, 30],
		'options': ['slendro', 'ji_12', 'partch_43', 'lm_piano', 'johnston_81']
	})
	chooseScale.on('change', v => {
		tune.loadScale(v.value);
		console.log(v)
	})

	var toggle = new Nexus.Toggle('#transport');

	toggle.on('change', v => v ? Tone.Transport.start() : Tone.Transport.stop())
}