// Simple demo of getUserMedia

navigator.getUserMedia  = navigator.getUserMedia ||
                          navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia;

var video = document.querySelector('video');
var constraints = {audio: false, video: true};

function errorCallback(e) {
  console.dir(e);
}

function successCallback(stream) {
  video.src = window.URL.createObjectURL(stream);
}

if (navigator.getUserMedia) {
  navigator.getUserMedia(constraints, successCallback, errorCallback);
} else {
  video.src = 'somevideo.webm'; // fallback
}

