window.player = {
 cover: document.querySelector(".card-image"),
 title: document.querySelector(".card-content h1"),
 artist: document.querySelector(".artist"),
 audioData: audios, //var global do arquivo data, listas 
 currentAudio: { }, //arquivo data == armazena os dados da variavel audios
 currentPlaying: 0,
 isPlaying: false,
start(){
this.update()
this.audio.onended = () => this.next()//no final
},
play (){
this.isPlaying = true
this.audio.play()
this.playPause.innerHTML = '<div class="btn-pause" style="font-size: 15pt; padding: 4px 5px; color:black;"><i class="fa fa-pause" aria-hidden="true"></i></div>'
this.playPause.style.padding = '10px 11.5px'
},
pause(){
this.isPlaying = false
this.audio.pause()
this.playPause.innerHTML = '<div class="img-play" style="background-image: url(./assets/play.svg)"></div>'
this.playPause.style.padding = '15px'
},
togglePlayPause(){
if(this.isPlaying){
	this.pause()
}else{
	this.play()
}
},
toggleMute(){
	this.audio.muted = !this.audio.muted//muted
	this.vol.innerHTML = this.audio.muted?'<h3><i class="fa fa-volume-down" aria-hidden="true"></i></h3>':'<h3><i class="fa fa-volume-up" aria-hidden="true" id="vol"></i></h3>'
},
setVolume(value){
this.audio.volume = Number(value / 100)
},
setSeek(value){
this.audio.currentTime = value
},
timeUpdate(){
this.currentDuration.innerText = secondsToMinutes(this.audio.currentTime)
this.seekbar.value = this.audio.currentTime
},
next(){
	this.currentPlaying++
	this.update()
	this.audio.play()//Adicionando um novo audio
},
update(){
this.currentAudio = this.audioData[this.currentPlaying]

this.cover.style.background = `url('${path(this.currentAudio.cover)}') no-repeat center center / cover`
this.title.innerText = this.currentAudio.title
this.artist.innerText = this.currentAudio.artist
this.playPause = document.querySelector('#btn-play')
this.vol = document.querySelector('.button-volume-up')
this.volumeControl = document.querySelector('#seekbar-volume')
this.seekbar = document.querySelector('#seekbar')
this.createAudioElement(path(this.currentAudio.file))
this.currentDuration = document.querySelector('#current-duration')
this.totalDuration = document.querySelector('#total-duration')

this.audio.onloadeddata = () =>{
   this.actions()
   this.totalDuration.innerText = secondsToMinutes(this.audio.duration)
   this.seekbar.max = this.audio.duration
}

},
restart(){
if(this.currentPlaying == this.audioData.length){
		this.currentPlaying = 0
		this.update()
}
},
createAudioElement(audio){
	this.audio = new Audio(audio)
}, 
actions(){
  this.playPause.onclick = () => this.togglePlayPause()
  this.vol.onclick = () => this.toggleMute()
  this.volumeControl.oninput = () => this.setVolume(this.volumeControl.value)
  this.volumeControl.onchange = () => this.setVolume(this.volumeControl.value)
  this.seekbar.oninput = () => this.setSeek(this.seekbar.value)
  this.seekbar.onchange = () => this.setSeek(this.seekbar.value)
  this.audio.ontimeupdate = () => this.timeUpdate()
}
}

