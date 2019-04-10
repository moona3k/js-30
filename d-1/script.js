const playSound = e => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return; // stop function from running! try checking out in the console

    key.classList.add('playing');
    audio.currentTime = 0; // resets time to 0 to allow continuous keydown action
    audio.play();

    // setTimeout(() => {
    //     key.classList.remove('playing');
    // }, 700); // this works, but not very dynamic; if css transition property changes, we also have to manually change setTimeout as well
    
}

const removeTransition = e => {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');    
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

document.addEventListener('keydown', playSound); // order matters!