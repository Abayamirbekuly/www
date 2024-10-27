
const tracks = [
    {
        name: "Gone Gone Gone",
        artist: "Phillip Phillips",
        cover: "spidey.jpeg",
        url: "Phillip Phillips - Gone Gone Gone.mp3"
    },
    {
        name: "People Get Up And Drive Your Funky Soul",
        artist: "James Brown",
        cover: "tobey.jpeg",
        url: "James Brown – People Get Up And Drive Your Funky Soul.mp3"
    },
    {
        name: "Blitzkrieg Bop",
        artist: "Ramones",
        cover: "tom2.jpeg",
        url: "Ramones - Blitzkrieg Bop.mp3"
    }
];

let currentTrack = 0; 
let isPlaying = false; 


const trackCover = document.getElementById('trackCover');
const trackName = document.getElementById('track-name');
const trackArtist = document.getElementById('track-artist');
const playPauseButton = document.getElementById('play-pause');
const nextButton = document.getElementById('next');
const trackList = document.getElementById('track-list');

const audio = new Audio(); 


function loadTrack(trackIndex) {
    const track = tracks[trackIndex];
    trackCover.src = track.cover;
    trackName.textContent = track.name;
    trackArtist.textContent = track.artist;
    audio.src = track.url;
}


function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playPauseButton.textContent = "Play";
    } else {
        audio.play();
        playPauseButton.textContent = "Pause";
    }
    isPlaying = !isPlaying;
}


function playNextTrack() {
    currentTrack = (currentTrack + 1) % tracks.length; 
    loadTrack(currentTrack);
    audio.play(); 
    playPauseButton.textContent = "Pause";
    isPlaying = true;
}

function populateTrackList() {
    tracks.forEach((track, index) => {
        const li = document.createElement('li');
        li.textContent = track.name;
        li.addEventListener('click', () => {
            currentTrack = index;
            loadTrack(currentTrack);
            audio.play();
            playPauseButton.textContent = "Pause";
            isPlaying = true;
        });
        trackList.appendChild(li);
    });
}


playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', playNextTrack);


loadTrack(currentTrack); 
populateTrackList();
