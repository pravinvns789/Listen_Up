let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSonngName = document.getElementById("masterSonngName");

let songs = [
  {
    songName: "Dhokha",
    filePath: "songs/5.mp3",
    coverPath: "covers/cover5.jpg",
  },
  
  {
    songName: "breakup Song",
    filePath: "songs/7.mp3",
    coverPath: "covers/cover7.jpg",
  },
  {
    songName: "Dil Chori",
    filePath: "songs/8.mp3",
    coverPath: "covers/cover8.jpg",
  },
  {
    songName: "Kamariya",
    filePath: "songs/9.mp3",
    coverPath: "covers/cover9.jpg",
  },
  {
    songName: "Shayad",
    filePath: "songs/10.mp3",
    coverPath: "covers/cover10.jpg",
  },
  {
    songName: "sugar and brownies",
    filePath: "songs/11.mp3",
    coverPath: "covers/cover11.jpg",
  },
  {
    songName: "Shape Of You",
    filePath: "songs/11.mp3",
    coverPath: "covers/cover11.jpg",
  },
  {
    songName: "Love Story",
    filePath: "songs/11.mp3",
    coverPath: "covers/cover11.jpg",
  },
  {
    songName: "Rain Over Me",
    filePath: "songs/11.mp3",
    coverPath: "covers/cover11.jpg",
  },
  {
    songName: "Sunflower",
    filePath: "songs/15.mp3",
    coverPath: "covers/cover11.jpg",
  },
  {
    songName: "Brown Munde",
    filePath: "songs/16.mp3",
    coverPath: "covers/cover11.jpg",
  },
  {
    songName: "Exeuses",
    filePath: "songs/17.mp3",
    coverPath: "covers/cover11.jpg",
  },
  {
    songName: "Lamberhgini",
    filePath: "songs/18.mp3",
    coverPath: "covers/cover11.jpg",
  },
  {
    songName: "Sitarey",
    filePath: "songs/19.mp3",
    coverPath: "covers/cover11.jpg",
  },
  {
    songName: "Badnam",
    filePath: "songs/20.mp3",
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
      
    }
  );
};
Array.from(document.getElementsByClassName('songItemPlay')).forEach(
  (element) => {
    element.addEventListener('click', (e) => {
      makeAllPlays();
      
      songIndex = parseInt(e.target.id)
      
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