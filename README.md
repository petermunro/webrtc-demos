# WebRTC Demos

## Setting Up

Firstly, run these demos from a web server. Otherwise, browsers will block access to getUserMedia() if run from a `file` URL.
Secondly, use a recent browser. I used Chrome Canary, though recent Chrome versions should also work, or Firefox.

## The demos:

#. demo1
	- A simple example of using getUserMedia to obtain video from the user. Audio is disabled so you don't get feedback from your local mic and speakers.
#. demo1b
	- An example showing how the APIs integrate with each other. This one shows getUserMedia and the `<video>` element interacting with (a) HTML5 canvas, and (b) CSS filters. Thanks to Matt Null for this demo.
# demo2-localpeerconn
	- An example showing a local WebRTCPeerConnection, ie between two clients running in the same browser instance. This demo uses WebRTC, but doesn't require any signalling (sending connection info, codec info etc) between the two clients.
# demo3-data
	- An example using RTCDataChannel to send information over a separate data channel.

## Next Steps

From here, you can try:

- Using a JavaScript library such as <http://simplewebrtc.com/>.
- Using a hosted service, such as <tokbox.com> or <easyrtc.com>

