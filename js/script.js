//https://itunes.apple.com/search?entity=musicVideo&term=eminem
//https://itunes.apple.com/lookup?upc=720642462928

import {url} from "./constants.js";
import {addTrack, trackClick} from "./functions.js";

const xml = new XMLHttpRequest();

xml.open('GET', url);
xml.onload = () => {
        const {results:music} = JSON.parse(xml.response);
        music.forEach(addTrack);
        window.music = music;
       console.log(music)
}

xml.onerror = () => {
        console.error('error');
}

xml.send();

document.body.addEventListener('click', trackClick);






