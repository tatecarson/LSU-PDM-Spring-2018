var player;

function setup() {
	//its good practice when using tonejs with p5js to instantiate synths inside of setup
	//sometimes it will work without doing this but better to be safe 

	//create a synth and connect it to the master output (your speakers)
	var synth = new Tone.Synth().toMaster();

	//play a middle 'C' for the duration of an 8th note
	// synth.triggerAttackRelease("C3", "1n");

	//talk about scoping 

	//play sample 
	//can not play aiff files, need to convert
	player = new Tone.Player('./viscous.mp3').toMaster();
}

function draw() {
	mouseIsPressed ? player.start() : ''
}