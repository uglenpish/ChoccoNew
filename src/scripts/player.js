let video;
let durationCrawl;
let soundControl;
let intervalId;

document.addEventListener('DOMContentLoaded', e =>{
	video = document.getElementById('video');

	video.addEventListener('click', playStop);

	let playBtn = document.querySelectorAll('.play');
	playBtn.forEach( function(element) {
		element.addEventListener('click', playStop);
	}); 

	durationCrawl = document.getElementById('crawl');
	durationCrawl.addEventListener('mousedown', stopInterval);
	durationCrawl.addEventListener('click', setVideoDuration);

	durationCrawl.min = 0;
	durationCrawl.value = 0;

	let micControl = document.getElementById('soundBtn');
  micControl.addEventListener('click', soundOf);

  soundControl = document.getElementById('Volum');
  soundControl.addEventListener('click' , changeSoundVolume);
  soundControl.addEventListener('mouseup' , changeSoundVolume);

  soundControl.min = 0;
  soundControl.max = 10;

  soundControl.value = soundControl.max;
})

function playStop(){
	let playControl = document.querySelector('.player__wrapper-bg');
	playControl.classList.toggle('player__wrapper-bg--active');

	video.addEventListener('play', ()=>{
		playControl.classList.add('player__wrapper-bg--active');
	})  


	durationCrawl.max = video.duration;

	if(video.paused){
		video.play();
		intervalId = setInterval(updateDuration, 1000/66);

	}else{
		video.pause();
		clearInterval(intervalId);
		playControl.classList.remove('player__wrapper-bg--active')

		if (!video.paused && playControl.classList.contains('.player__wrapper-bg--active')){
      playControl.classList.remove('player__wrapper-bg--active')
	  }
	}
}

function updateDuration(){
  durationCrawl.value = video.currentTime;
}

function stopInterval(){
  video.pause();
  clearInterval(intervalId);
}

function setVideoDuration(){
  if(video.paused){
    video.play();
  }else{
    video.pause();
  }

  video.currentTime = durationCrawl.value;
  intervalId = setInterval(updateDuration , 1000 /66);
}

function changeSoundVolume(){
	video.volume = soundControl.value/10;
}

function soundOf(){
	if(video.volume === 0){
		video.volume = soundLevel;
		console.log(soundLevel);
		soundControl.value = soundLevel * 10;
	}else{
		soundLevel = video.volume;
		video.volume = 0;
		soundControl.value = 0;
	}
}