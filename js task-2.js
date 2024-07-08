const songs = [
    {
        title: "Song 1",
        artist: "Artist 1",
        src: "song1.mp3"
    },
    {
        title: "Song 2",
        artist: "Artist 2",
        src: "song2.mp3"
    }
];

let currentSongIndex = 0;

const audio = document.getElementById('audio');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.src;
}

function playSong() {
    audio.play();
    playButton.textContent = 'Pause';
}

function pauseSong() {
    audio.pause();
    playButton.textContent = 'Play';
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
}

playButton.addEventListener('click', () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

prevButton.addEventListener('click', prevSong);
nextButton.addEventListener('click', nextSong);

audio.addEventListener('ended', nextSong);

// Load the first song initially
loadSong(songs[currentSongIndex]);
