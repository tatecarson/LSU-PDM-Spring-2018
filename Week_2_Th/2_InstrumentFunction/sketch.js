var duoSynth;

function setup() {
	//Visualization 
	//setup audio context 
	Nexus.context = Tone.context

	//remember to set DIV in html file 
	var spectrogram = new Nexus.Spectrogram('#spec')
	spectrogram.connect(Tone.Master);

	var oscilloscope = new Nexus.Oscilloscope('#osc')
	oscilloscope.connect(Tone.Master);

	duoSynth = new Tone.DuoSynth().toMaster();
}

function mousePressed() {
	play(duoSynth);
}
// play(duoSynth)
//lets schedule some events in a function so it can be turned 
//on and off 
function play(synth) {
	// synth.triggerAttackRelease("C4", "2n");
	synth.triggerAttackRelease('C4', '4n', "+0.1")
	synth.triggerAttackRelease('D4', '8n', "+1")
	synth.triggerAttackRelease('E4', '8n', "+2")
	synth.triggerAttackRelease('F#4', '8n', "+3")
}

function makeSynth() {

	let envelope = {
		attack: 0.1,
		release: 4,
		releaseCurve: 'linear'
	};

	let filterEnvelope = {
		baseFrequency: 200,
		octaves: 2,
		attack: 0,
		decay: 0,
		release: 1000
	};

	return new Tone.DuoSynth({
		harmonicity: 1,
		volume: -20,
		voice0: {
			oscillator: {
				type: 'sawtooth'
			},
			envelope,
			filterEnvelope

		},
		voice1: {
			oscillator: {
				type: 'sine'
			},
			envelope,
			filterEnvelope
		},
		vibratoRate: 0.5,
		vibratoAmount: 0.1
	});
}