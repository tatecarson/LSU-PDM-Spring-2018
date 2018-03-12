# Class notes 

## Assignment 3 issues 

### Assignment review 

* Show how I would have done the assignment
* Correct way of starting and stopping things with mouse pressed 

### Timing issues with mousePressed
If mousep is pressed is used you need to use the "+1" syntax to get whatever it is to trigger that much time **after** the mouse is pressed. 

### LFOs and modulation recap 

* LFOs should be slow - remember they are Low Frequency Oscillators 
* if they are fast you hear them less as modulators and more as new tones 
* Anything over 50 is probably defeating the purpose. 

### Gain nodes

Only connect something to a gain node if it doesn't already have one included with it. Check the documentation to make sure. 

### triggerAttackRelease

### Using code you set up

Make sure to use envelopes and LFOs that you set up. Often I see things that go no where and have no effect. 

#### Parameters
Note array, note length, velocity (range of 0 - 1). 
Velocity can not be greater than 1 or you will get an error. 
`poly.triggerAttackRelease(["Eb3", "G4", "C5"], "2n");`

### Debugging 

Remember to have your console open to check for errors. It will show you when something is not acting the way you think it is and which line the problem is at. 

### Transport

`Tone.Transport.start()` can be called in the setup before anything happens. It isn't telling anything to start happening then but just giving it the ability to happen later. 