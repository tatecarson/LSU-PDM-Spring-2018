# Class Notes

## Assignment 3 - Make a sound effect

[Here's](./assignment_3_Example) an example of a possible assignment

### Synthesizers & Instruments

Tone has many prebuilt instruments that already have an envelope and other processing. They are all worth exploring for their different sound capabilities. 

Here are some instrument [presets](https://tonejs.github.io/Presets/) for inspiration. 

To explore these 


### Polyphony

var polySynth;
polySynth = new Tone.PolySynth(6, Tone.Synth).toMaster();
polySynth.set("detune", -1200);
polySynth.triggerAttackRelease(["C4", "E4", "A4"], "4n");

### Physical Modeling


var pluckySynth;
pluckySynth = new Tone.PluckSynth().toMaster();
pluckySynth.triggerAttack("E4");

### Scheduling values of signals 

https://github.com/Tonejs/Tone.js/wiki/Signals

### Timing 

+1 etc 

### Musical Structures

Make a sequence array and play it!

Array of arrays.
[			0		 ,		1			, 		2		 ]
[['g','1n'],['d','2n'],['c','4n']]

note[i] => ['g','1n']
	.setNote(note[i][0], note[i][1]);

notes = [g,d,c];
durations = ['1n','2n','4n'];

for loop
	.setNote(notes[i],durations[i])

### Control Structures 

* CtrlInterpolate
* etc

### Pbind code? 
