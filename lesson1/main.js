function playSound (audio,key) {
	
	if(!audio) return;
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
}
function removeTransition(e) {
	if (e.propertyName !== 'transform') return;
	this.classList.remove('playing');
}

function pressed(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	playSound(audio,key);
}

function clicked(e) {
	const datKey = this.attributes['data-key'].value;
	const audio = document.querySelector(`audio[data-key="${datKey}"]`);
	const key = document.querySelector(`.key[data-key="${datKey}"]`);
	playSound(audio,key);
}

window.addEventListener('keydown', pressed);
const keys = document.querySelectorAll('.key');
keys.forEach( key => key.addEventListener('transitionend', removeTransition))
keys.forEach( key => key.addEventListener('click', clicked))
