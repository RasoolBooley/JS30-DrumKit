function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    if(!audio) return; // stops the function if e.code has no audio file
    audio.currentTime = 0; // restarts the audio file when the function is called
    audio.play(); //playing the audio
    key.classList.add('playing'); //adding the playing class to get the visual effect
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
document.addEventListener('keydown', playSound);