window.AudioContext = window.AudioContext || window.webkitAudioContext;

var video = document.querySelector("#video");

function onReady(stream) {
	var vendorURL = window.URL || window.webkitURL;
	video.src = vendorURL.createObjectURL(stream);
}

navigator.getMedia = ( navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

navigator.getMedia({video: true}, onReady);