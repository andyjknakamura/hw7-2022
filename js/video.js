var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector('#player1')
	video.preload = true;
	video.autoplay = false;
	video.loop = false;
	console.log('Preload is set to' + video.preload);
	console.log('Auto play is set to ' + video.autoplay);
	console.log('Loop is set to ' + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	video.volume = 1.0;
	volume_display = Math.floor(video.volume * 100)
	document.getElementById('volume').innerHTML = (volume_display.toString() + '%');
	console.log('Volume is set to ' + video.volume);
 	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
 	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate - 0.1;
 	console.log("Speed set to " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate + 0.1;
 	console.log("Speed set to " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime = video.currentTime + 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
 	console.log("Current time is " + video.currentTime);
});

document.querySelector("#slider").addEventListener("input", function() {
	video.volume = document.getElementById('slider').value / 100;
	console.log("Volume is " + video.volume);
	document.getElementById('volume').innerHTML = document.getElementById('slider').value + '%'
});

document.querySelector("#mute").addEventListener("click", function() {
	if (document.getElementById('mute').innerHTML === 'Mute') {
		video.muted = true;
 		console.log("Mute is " + video.muted);
		document.getElementById('mute').innerHTML = 'Unmute'
	}

	else {
		video.muted = false;
 		console.log("Mute is " + video.muted);
		document.getElementById('mute').innerHTML = 'Mute'
	}
});

document.querySelector("#vintage").addEventListener("click", function() {
	document.getElementById("player1").classList.add('oldSchool') 
 	console.log("Style is oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	document.getElementById("player1").classList.remove('oldSchool') 
 	console.log("Style is oldSchool");
});