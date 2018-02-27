var osc;

function setup() {
	osc = new Tone.AMOscillator({
		frequency: '440',
		type: "sine",
		modulationType: "square"
	}).start();

	ampEnv = new Tone.AmplitudeEnvelope({
		"attack": 0.1,
		"decay": 0.2,
		"sustain": 1,
		"release": 0.8
	}).toMaster();

	osc.connect(highFilter);
}

function keyPressed() {
	console.log(keyCode);
	if (keyCode == 32) {
		ampEnv.triggerAttackRelease(1);
	} else if (keyCode == ENTER) {
		ampEnv.attack = random(0.1, 2);
		ampEnv.decay = random(0.2, 0.5);
		ampEnv.release = random(0.1, 2);
		console.log(`attack: ${ampEnv.attack}, decay: ${ampEnv.decay}, release: ${ampEnv.release}`)
	}
}