const audioElement = document.querySelector('audio');

const track = audioContext.createMediaElementSource(audioElement);

track.connect(audioContext.destination);

// Select the play button
const playButton = document.querySelector('button');

playButton.addEventListener('click', function() {
    //Check if context is in suspended state (autoplay off)
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    // play or pause the track depending on state
    if (this.dataset.playing === 'false') {
        audioElement.play();
        this.dataset.playing = 'true';
    } else if (this.dataset.playing === 'true') {
        audioElement.pause();
        this.dataset.playing = 'false';
    }
}, false);

audioElement.addEventListener('ended', () => {
    playButton.dataset.playing = 'false';
}, false);