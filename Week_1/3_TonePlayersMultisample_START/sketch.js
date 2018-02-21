var bubble;

function setup() {
	bubble = new Tone.Player('./samples/viscous.mp3').toMaster();

	//DOM 
	var button = createButton('bubble');
	button.position(20, 20);
	button.mousePressed(() => bubble.start())
}