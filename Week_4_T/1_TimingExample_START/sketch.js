//see https://github.com/Tonejs/Tone.js/wiki/Time for more details on timing
//Default BPM (beats per minute) = 120 
var synth

function setup() {

	synth = new Tone.Synth().toMaster();
}