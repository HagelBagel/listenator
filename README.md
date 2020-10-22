# The Listenator
A sort of mood player, playing back interesting or relaxing sounds accompanied by fitting visuals (photos).

## Current version:
Very simple prototype, just getting the webaudio stuff to work (FWD/RW buttons do nothing at this point).
Can choose from 4 different audio files in dropdown.

### Bugs: 
Choosing a new file while another plays stops playback. Then it takes two presses on the play button to start playback of the new file. Should only take one press.

ROADMAP:

## V1:
- Build basic transport controls with play/pause button, skip track back/forth and skip ahead 15sec back/forth.
- Do basic CSS, Mobile first, center the player in the middle (or top?), background image
- Make IxD work well with mobile (touch)

## V2:
- Try: Loading audio url + img url from JSON, as starting point for serverless architecture
- Bg img should change with audio file, figure out how to optimize large images
    - perhaps load different sized versions depending on screen size
    - maybe use python script to compress

## V3:
- Explore possibilities for online dashboard for uploading