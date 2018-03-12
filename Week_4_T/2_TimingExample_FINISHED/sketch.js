var synth = new Tone.Synth().toMaster();

//Below we explore the different timing syntax

//numbers are evaluated as seconds 
var numbers = [
	[0, "C2"],
	[1, "C3"],
	[2, "G2"]
];

//musical rhythm notation 
var notation = [
	[]
]

var part = new Tone.Part(function (time, note) {
	synth.triggerAttackRelease(note, "8n", time);
}, sequence);

part.start();

Tone.Transport.start();