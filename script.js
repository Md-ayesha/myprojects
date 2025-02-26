document.addEventListener('DOMContentLoaded', function() {
    const letter = document.getElementById('letter');
    const message = document.getElementById('message');
    const backgroundMusic = document.getElementById('background-music');

    letter.addEventListener('click', function() {
        letter.classList.toggle('open');
        if (letter.classList.contains('open')) {
            backgroundMusic.play();
        } else {
            backgroundMusic.pause();
            backgroundMusic.currentTime = 0;
        }
    });
});
