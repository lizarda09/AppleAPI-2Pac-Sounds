export function addTrack(item){
    const $li = $('<li>')
        .text(item.trackName)
        .appendTo('[class="list-counter-square"]');
}