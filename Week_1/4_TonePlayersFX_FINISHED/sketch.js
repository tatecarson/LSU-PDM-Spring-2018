var bitCrusher,
	reverb,
	delay,
	pitchShift,
	bubble,
	snap,
	birds,
	button1,
	button2,
	button3,
	slider;

function setup() {
	//FX
	bitCrusher = new Tone.BitCrusher({
		bits: 5,
		wet: 1
	}).toMaster();

	//chained FX 
	reverb = new Tone.JCReverb({
		roomSize: 0.4
	}).toMaster()

	delay = new Tone.FeedbackDelay({
		delayTime: 0.5,
		feedback: 0.1,
		wet: 1
	}).toMaster();

	//more FX 
	pitchShift = new Tone.PitchShift({
		pitch: 1,
		windowSize: 0.1,
		delayTime: 0,
		feedback: 0
	}).toMaster();

	//players
	bubble = new Tone.Player('./samples/viscous.mp3').connect(bitCrusher);
	snap = new Tone.Player('./samples/snap.mp3').chain(reverb, delay)
	birds = new Tone.Player('./samples/birds.mp3').connect(pitchShift);

	//DOM 
	button1 = createButton('bubble');
	button1.position(20, 20);
	button1.mousePressed(() => bubble.start())

	button2 = createButton('snap');
	button2.position(100, 20);
	button2.mousePressed(() => snap.start())

	button3 = createButton('birds');
	button3.position(200, 20);
	button3.mousePressed(() => birds.start())

	var pitchLabel = createP('PitchShift Ammount');
	pitchLabel.position(300, 30);

	slider = createSlider(0.01, 10, 0, 0.1);
	slider.position(300, 10);
	slider.style('width', '80px');
}

function draw() {
	pitchShift.pitch = slider.value()
}