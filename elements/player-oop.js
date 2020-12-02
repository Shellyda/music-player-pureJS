window.PlayingNow = {
title: document.querySelector(".card-music h1"),
artist: document.querySelector("#start p"),
duration: document.querySelector("#totalduration"),
audioData: audios, 
currentAudio: { }, //arquivo data == armazena os dados da variavel audios
audioData: audios, //var global do arquivo data, listas 
//arquivo data == armazena os dados da variavel audios
currentPlaying: 0,
start(){


this.upList()
},
upList(){
this.currentAudio = this.audioData[this.currentPlaying]
this.Duration = document.querySelector('#totalduration')
this.title.innerText = this.currentAudio.title
this.artist.innerText = this.currentAudio.artist
this.Duration.innerText = this.currentAudio.duration
this.nextNow = document.querySelector('#next')

if(currentPlaying == 1){
title=document.querySelector("#second h1")
artist=document.querySelector("#second p")
duration=document.querySelector("#second #timeduration")
}
}

}


