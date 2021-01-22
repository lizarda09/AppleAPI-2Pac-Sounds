import {trackName, fill} from "./constants.js";

export function addTrack(element){
const li = document.createElement('li');
li.setAttribute('track-id', element.trackId);
li.innerText = element.trackName;
trackName.appendChild(li);
}

export function trackClick(event){
event.preventDefault();
const id = event.target.getAttribute('track-id');
console.log(id);
for(let i =0; i< window.music.length; i++){
    if(id == window.music[i].trackId){
        fill.innerHTML = '';
        const clip = document.createElement('video');
        clip.setAttribute('src', window.music[i].previewUrl);
        clip.setAttribute('controls', 'controls');
        fill.appendChild(clip);
    }
}
console.log(window.music.length);
}
