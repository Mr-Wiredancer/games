/* setting */
if (DEMOBO) {
	DEMOBO.developer = 'developer@demobo.com';
	DEMOBO.controller = {"page": "drawing", "gestureName": "touch gesture", "gestureType": "2d"};
	DEMOBO.init = function () {
		$.demobo({
			open: function(){
                addStatus("demobo connected!");
                addStatus('Start touch move gesture detection.');
//				setTimeout(function(){
//					$.demobo.send('register','{"page": "drawing", "gestureName": "touch gesture", "gestureType": "2d"}');
//            	},300);
			},
			close: function(){
                addStatus("demobo was closed");
            }
		});
		window.addEventListener('phone_gesture',function(e) {
			addEvent(e);
		},false);
	};
}

function addStatus(text){
	$('#status').prepend($('<div>'+text+'</div>'));
}
function addEvent(evt){
	$('#status').prepend($('<div>gestureType: '+evt.gestureType+'</div>'));
	if (evt.gestureName && evt.score) $('#status').prepend($('<h1>'+evt.gestureName+' '+evt.score+'</h1>'));
}