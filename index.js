const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return
    audio.currentTime = 0
    audio.play()
    key.classList.add('playing')
    setTimeout(() => { return key.classList.remove('playing')}, 300)
} 

const touchPlay = (e) => {
    const audio = document.querySelector(`audio[data-key="${e}"]`)
    const key = document.querySelector(`.key[data-key="${e}"]`)
    if (!audio) return
    audio.currentTime = 0
    audio.play()
    key.classList.add('playing')
    setTimeout(() => { return key.classList.remove('playing')}, 300)
}





window.addEventListener('keydown', playSound)