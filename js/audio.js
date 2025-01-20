// const audio = document.getElementById("audio");
// audio.volume = 0.1;
// audio.play();

const audio = document.getElementById("audio");
const playButton = document.getElementById("playButton");
audio.volume = 0.1;

playButton.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playButton.textContent = "⏸️ Pausar";
    } else {
        audio.pause();
        playButton.textContent = "▶️ Play Música";
    }
});