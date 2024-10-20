
const video = document.getElementById("myVideo");
const playPauseBtn = document.getElementById("playPauseBtn");
playPauseBtn.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        playPauseBtn.innerHTML = "<i class='bx bx-pause'></i>";
    } else {
        video.pause();
        playPauseBtn.innerHTML = "<i class='bx bx-play'></i>";
    }
});
const fastForwardBtn = document.getElementById("fastForwardBtn");
fastForwardBtn.addEventListener("click", () => {
    video.currentTime += 10;
});
const rewindBtn = document.getElementById("rewindBtn");
rewindBtn.addEventListener("click", () => {
    video.currentTime -= 10;
});
document.querySelectorAll('.flow-step').forEach(item => {
    item.addEventListener('click', () => {
        alert(`You clicked on: ${item.querySelector('h3').innerText}`);
    });
});

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');

    // Change the transparency when the scroll is more than 50px
    if (window.scrollY > 50) {
        navbar.classList.add('transparent');
    } else {
        navbar.classList.remove('transparent');
    }
});
