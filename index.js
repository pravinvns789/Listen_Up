let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let masterSonngName = document.getElementById("masterSonngName");

let songs = [
  {
    songName: "Dhokha",
    filePath: "songs/5.mp3",
    
  },
  
  {
    songName: "breakup Song",
    filePath: "songs/7.mp3",
    
  },
  {
    songName: "Dil Chori",
    filePath: "songs/8.mp3",
    
  },
  {
    songName: "Kamariya",
    filePath: "songs/9.mp3",
    
  },
  {
    songName: "Shayad",
    filePath: "songs/10.mp3",
   
  },
  {
    songName: "Sugar And Brownies",
    filePath: "songs/11.mp3",
    
  },
  {
    songName: "Shape Of You",
    filePath: "songs/11.mp3",
    
  },
  {
    songName: "Love Story",
    filePath: "songs/11.mp3",
    
  },
  {
    songName: "Rain Over Me-Remix",
    filePath: "songs/11.mp3",
    
  },
  {
    songName: "Sunflower",
    filePath: "songs/15.mp3",
    
  },
  {
    songName: "Brown Munde",
    filePath: "songs/16.mp3",
    
  },
  {
    songName: "Exeuses",
    filePath: "songs/17.mp3",
    
  },
  {
    songName: "Lamberhgini",
    filePath: "songs/18.mp3",
    
  },
  {
    songName: "Sitarey",
    filePath: "songs/19.mp3",
    
  },
  {
    songName: "Badnam",
    filePath: "songs/20.mp3",
    
  },
];

// Handel play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    
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

Array.from(document.getElementsByClassName('songItemPlay')).forEach(
  (element) => {
    element.addEventListener('click', (e) => {
      
      
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
    if(songIndex>=15){
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