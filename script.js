let play_pause=document.getElementById("play_pause")

let audioElement = new Audio("./songs/song1.mp3");

let sound_bar = document.getElementById("progress_sound_bar");

let album_name = document.getElementById("album_name");

let playButton = document.querySelectorAll(".play i")

let currentPlayingIndex = -1

let songNames = ["Mocking Bird","Tum Hi Ho", "Badtameez Dil","Satranga","Nenu Nuvvantu","Kun Faya Kun"
    ,"Dil Se Dil Tak","Channa Mereya","Blue Eyes","Oy.. Oy..","Uppenantha","Snap"]

let songs = ["./songs/song1.mp3","./songs/song2.mp3","./songs/song3.mp3","./songs/song4.mp3","./songs/song5.mp3","./songs/song6.mp3",
    "./songs/song7.mp3","./songs/song8.mp3","./songs/song9.mp3","./songs/song10.mp3","./songs/song11.mp3","./songs/song12.mp3"]



play_pause.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.cuurentTime == 0){
   audioElement.play();
play_pause.classList.remove("fa-play");
play_pause.classList.add("fa-pause");
    }
    else{
        audioElement.pause();
play_pause.classList.remove("fa-pause")
play_pause.classList.add("fa-play");
    }
})

audioElement.addEventListener("timeupdate",()=>{

let progress = (audioElement.currentTime/audioElement.duration)*100;

sound_bar.value = progress

})

sound_bar.addEventListener("change",()=>{

    audioElement.currentTime = (sound_bar.value*audioElement.duration)/100

})



playButton.forEach((button,index)=>{
    button.addEventListener("click",()=>{
    
        if(currentPlayingIndex !== index){
        if(currentPlayingIndex !== -1){
        playButton[currentPlayingIndex].classList.replace("fa-pause","fa-play")    
        }
        audioElement.src = songs[index]
        audioElement.play()
        button.classList.replace("fa-play","fa-pause");
        play_pause.classList.replace("fa-play","fa-pause")
        currentPlayingIndex = index
        album_name.innerText = songNames[index]
       }
      else{
          if(audioElement.paused){
             audioElement.play();
             button.classList.replace("fa-play","fa-pause")
             play_pause.classList.replace("fa-play","fa-pause")
          }
          else{
            audioElement.pause();
            button.classList.replace("fa-pause","fa-play")
            play_pause.classList.replace("fa-pause","fa-play")

          }
      }    
    })

})

//Handling  prev / next Buttons

let count = -1
let forward = document.querySelector(".fa-forward")
let backward = document.querySelector(".fa-backward")

forward.addEventListener("click",()=>{

    if(count < 11){
        count++;
        audioElement.src = songs[count]
        audioElement.play()
        album_name.innerText=songNames[count]
        play_pause.classList.replace("fa-play","fa-pause")
    }

})

backward.addEventListener("click",()=>{
    if(count > 0){
        count--
        audioElement.src = songs[count]
        audioElement.play()
        album_name.innerText=songNames[count]
        play_pause.classList.replace("fa-play","fa-pause")
    }
})
