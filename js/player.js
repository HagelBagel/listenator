console.clear();

let currentTrack = "/audio/Robotics_Lab_preview.mp3";
let selectElement = document.querySelector("#sample-select");

// instigate our audio context
// for cross browser
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
// load some sound
const audioElement = document.querySelector('audio');
audioElement.setAttribute("src", currentTrack); 
const track = audioCtx.createMediaElementSource(audioElement);
const playButton = document.querySelector('.hz-controls-play');
audioCtx.state = 'suspended';

// play audio
playButton.addEventListener('click', function() {
	// check if context is in suspended state (autoplay policy)
	if (audioCtx.state === 'suspended') {
		audioCtx.resume();
	}
	
    // play or pause the track depending on state
    if (this.dataset.playing === 'false') {
        audioElement.play();
		this.dataset.playing = 'true';
		// show play icon on button
    } else if (this.dataset.playing === 'true') {
        audioElement.pause(); 
		this.dataset.playing = 'false';
		// show pause icon on button
    }
}, false);
// if track ends
audioElement.addEventListener('ended', () => {
	playButton.dataset.playing = 'false';
	playButton.setAttribute( "aria-checked", "false" );
}, false);

// when new track is selected from dropdown
selectElement.addEventListener("change", function() {		
	audioCtx.suspend(); //stop - maybe this is a bit heavy-handed and breaks stuff?     
	currentTrack = selectElement.value; //set currentTrack to new sample
	audioElement.setAttribute("src", currentTrack);
	// also change bg-image for sound
	
	// check if context is in suspended state (autoplay policy)
	if (audioCtx.state === 'suspended') {
		audioCtx.resume();
	}
	if (this.dataset.playing === 'false') {
		audioElement.play();
		this.dataset.playing = 'true'; 
	// no pause feature here
	} 
	let state = this.getAttribute('aria-checked') === "true" ? true : false;
	this.setAttribute( 'aria-checked', state ? "false" : "true" );
}, false);
// if track ends
audioElement.addEventListener('ended', () => {
	playButton.dataset.playing = 'false';
	playButton.setAttribute( "aria-checked", "false" );
}, false);

function samplePlayer() {}

// connect our graph
track.connect(audioCtx.destination);
