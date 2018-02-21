// create a keyboard
var keyboard = new AudioKeys();
var fmSynth = new Tone.FMSynth().toMaster();

keyboard.down(function (note) {
	// do things with the note object
	console.log(note.frequency)
	fmSynth.triggerAttack(note.frequency);
});

keyboard.up(function (note) {
	// do things with the note object
	console.log('up')
	fmSynth.triggerRelease();
});