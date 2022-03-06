let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSonngName = document.getElementById("masterSonngName");

let songs = [
  {
    songName: "Let me love you",
    filePath: "songs/1.mp3",
    coverPath: "covers/cover1.jpg",
  },
  {
    songName: "Yea Baby",
    filePath: "songs/2.mp3",
    coverPath: "covers/cover2.jpg",
  },
  {
    songName: "Wang da naap",
    filePath: "songs/3.mp3",
    coverPath: "covers/cover3jpg",
  },
  {
    songName: "Sitarey",
    filePath: "songs/4.mp3",
    coverPath: "covers/cover4.jpg",
  },
  {
    songName: "kalle kalle",
    filePath: "songs/5.mp3",
    coverPath: "covers/cover5.jpg",
  },
  {
    songName: "Lehenga",
    filePath: "songs/6.mp3",
    coverPath: "covers/cover6.jpg",
  },
  {
    songName: "Chitta",
    filePath: "songs/7.mp3",
    coverPath: "covers/cover7.jpg",
  },
  {
    songName: "Excuses",
    filePath: "songs/8.mp3",
    coverPath: "covers/cover8.jpg",
  },
  {
    songName: "Tu Hi Das De",
    filePath: "songs/9.mp3",
    coverPath: "covers/cover9.jpg",
  },
  {
    songName: "Udaarian-2.0",
    filePath: "songs/10.mp3",
    coverPath: "covers/cover10.jpg",
  },
  {
    songName: "Waliyan",
    filePath: "songs/11.mp3",
    coverPath: "covers/cover11.jpg",
  },
];

// Handel play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

//Listen to Events
audioElement.addEventListener('timeupdate', () => {
  //unpdate seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

  myProgressBar.value = progress;
});
myProgressBar.addEventListener('change', () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('songItemPlay')).forEach(
    (element) => {
      element.classList.remove('fa-circle-pause');
      element.classList.add('fa-circle-play');
    }
  );
};
Array.from(document.getElementsByClassName('songItemPlay')).forEach(
  (element) => {
    element.addEventListener('click', (e) => {
      makeAllPlays();
      
      songIndex = parseInt(e.target.id)
      e.target.classList.remove('fa-circle-play');
      e.target.classList.add('fa-circle-pause');
      audioElement.src = `songs/${songIndex}.mp3`;
      masterSongName.innerText = songs[songIndex-1].songName;
      audioElement.currentTime=0;
      audioElement.play();
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");

    });
  }
);
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=11){
        songIndex = 1
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
      audioElement.currentTime=0;
      audioElement.play();
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 11
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
      audioElement.currentTime=0;
      audioElement.play();
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");

})