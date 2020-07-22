// Hulubricant
// Jah Markabawi
// Date: 2020-07-21
const spoilerReplacement = "Ha, you thought! No more spoilers for you.\nStop reading this, or I'll poke out your eye.";
insertionQ.config({strictlyNew: false});
insertionQ(".GenericTileThumbnail__image").every(image => image.src = "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/LMS_plain_black_landscape.svg/1024px-LMS_plain_black_landscape.svg.png");
insertionQ(".end-card__metadata-area-description").every(desc => desc.textContent = spoilerReplacement);
insertionQ(".GenericTileContent__details-item").every(p => p.hidden = true);
insertionQ(".Masthead__description").every(div => div.hidden = true);