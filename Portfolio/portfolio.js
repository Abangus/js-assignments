    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    
    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = set.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    navLinks.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id +']').classList.add('active')
                })
            }
        })

    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 50);
    };

    // Get the play button elements for each music player
var playBtn1 = document.querySelector('.music-player .play-btn');
var playBtn2 = document.querySelector('.music-player2 .play-btn');
var playBtn3 = document.querySelector('.music-player3 .play-btn');

// Create Audio objects for each music file
var audio1 = new Audio('music-1.mp3');
var audio2 = new Audio('music-2.mp3');
var audio3 = new Audio('music-3.mp3');

// Set the initial states of the audio objects to paused
audio1.paused = true;
audio2.paused = true;
audio3.paused = true;

// Function to toggle the audio playback and button image for each music player
function togglePlayback1() {
  if (audio1.paused) {
    audio1.play();
    playBtn1.classList.add('pause');
  } else {
    audio1.pause();
    playBtn1.classList.remove('pause');
  }
  playBtn1.classList.toggle('flipped');
}

function togglePlayback2() {
  if (audio2.paused) {
    audio2.play();
    playBtn2.classList.add('pause');
  } else {
    audio2.pause();
    playBtn2.classList.remove('pause');
  }
  playBtn2.classList.toggle('flipped');
}

function togglePlayback3() {
  if (audio3.paused) {
    audio3.play();
    playBtn3.classList.add('pause');
  } else {
    audio3.pause();
    playBtn3.classList.remove('pause');
  }
  playBtn3.classList.toggle('flipped');
}

// Add click event listeners to the play buttons of each music player
playBtn1.addEventListener('click', togglePlayback1);
playBtn2.addEventListener('click', togglePlayback2);
playBtn3.addEventListener('click', togglePlayback3);
