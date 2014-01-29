(function(){
    navigator.getUserMedia  = navigator.getUserMedia ||
	navigator.webkitGetUserMedia ||
	navigator.mozGetUserMedia ||
	navigator.msGetUserMedia;

    var video = document.querySelector('video');
    var canvas = document.querySelector('canvas');
    var constraints = {video: true, audio : false};

    var getCameraAccess = function(){
        navigator.webkitGetUserMedia(
          constraints,
            function(localMediaStream) {
                video.src = window.webkitURL.createObjectURL(localMediaStream);
            },
            function(err) {
                console.log('getUserMedia error: ' + err.code);
            }
        );
    };

    var takeSnapshot = function(){
        canvas.height = video.videoHeight / 2;
        canvas.width = video.videoWidth / 2;
        canvas.style.webkitFilter = filter;
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    };

    var addFilter = function(){

        var filters = [
            'blur(5px)',
            'grayscale(1)',
            'sepia(1)',
            'saturate(1)',
            'brightness(5)',
            'contrast(5)',
            'hue-rotate(180deg)',
            'invert(0.5)'
        ];

        filter = filters[Math.floor(Math.random() * filters.length)]
        video.style.webkitFilter = filter;
    };


    document.querySelector('#snapshot').addEventListener('click', function(){
        takeSnapshot();
    });

    document.querySelector('#filter').addEventListener('click', function(){
        addFilter();
    });

     getCameraAccess();
})();
// with thanks to Matt Null

