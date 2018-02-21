var bubble,
	snap;

function setup() {
	bubble = new Tone.Player('./samples/viscous.mp3').toMaster();
	snap = new Tone.Player('./samples/snap.mp3').toMaster()

	//DOM 
	var button1 = createButton('bubble');
	button1.position(20, 20);
	button1.mousePressed(() => bubble.start())

	var button2 = createButton('snap');
	button2.position(100, 20);
	button2.mousePressed(() => snap.start())
}