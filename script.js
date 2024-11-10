document.addEventListener("DOMContentLoaded", function () {
    const mediaPlayer = document.getElementById("mediaPlayer");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const rewindBtn = document.getElementById("rewindBtn");
    const fastForwardBtn = document.getElementById("fastForwardBtn");
    const speedControl = document.getElementById("speedControl");

    // Play/Pause Function
    playPauseBtn.addEventListener("click", () => {
        if (mediaPlayer.paused) {
            mediaPlayer.play();
            playPauseBtn.textContent = "Pause";
        } else {
            mediaPlayer.pause();
            playPauseBtn.textContent = "Play";
        }
    });

    // Rewind Function
    rewindBtn.addEventListener("click", () => {
        mediaPlayer.currentTime -= 10;
    });

    // Fast Forward Function
    fastForwardBtn.addEventListener("click", () => {
        mediaPlayer.currentTime += 10;
    });

    // Change Playback Speed
    speedControl.addEventListener("change", () => {
        mediaPlayer.playbackRate = parseFloat(speedControl.value);
    });

    // Media Event: Respond to video end
    mediaPlayer.addEventListener("ended", () => {
        alert("Media playback has ended!");
        mediaPlayer.currentTime = 0; // Reset the media to start
        playPauseBtn.textContent = "Play"; // Update button text
    });
});
