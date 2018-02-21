var bubble;

function setup() {
	bubble = new Tone.Player('./samples/viscous.mp3').toMaster()

	//DOM
	var button = createButton('bubble');
	button.position(50, 20);
	button.mousePressed(() => bubble.start())
}