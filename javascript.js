let windowW = window.innerWidth;
let windowH = window.innerHeight;

document.addEventListener("click", musicPlay);
function musicPlay() {
    var song = document.getElementById("song");
    song.volume = 0.2;
    song.play();

    document.removeEventListener("click", musicPlay);
}

function goGithub() {
    window.open("https://github.com/skarexvill", "_blank");
}
