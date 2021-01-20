//https://itunes.apple.com/search?entity=musicVideo&term=eminem
//https://itunes.apple.com/lookup?upc=720642462928

import {$track1, $track2, $video1, url} from "./constants.js";
import {addTrack} from "./functions.js";

fetch(`${url}?entity=musicVideo&term=2pac`)
    .then(response => response.json())
    .then(result => {
        const {results:music} = result;
        console.log(music)
        music.forEach(addTrack);
    })
    .catch(error => console.log(error));



