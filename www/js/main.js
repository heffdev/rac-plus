//Initialize function
var init = function() {
	// TODO:: Do your initialization job
	console.log("init() called");
};

function onDeviceReady() {
    // Now safe to use the PhoneGap API
    document.addEventListener("pause", onPause, false);
    document.addEventListener("resume", onResume, false);
    appInit();
}

function onPause() {
    // might want to check if tracking, if so, save and pick it back up onResume.
}

function onResume() {
    // do something
    appInit();
}

function appInit(){
	
}
$(document).ready(init);
/**
$(document).on("swiperight", function(event, ui){
	$("#calculator").panel("open", {display:'push', position:'left'});
});
 */

$(document).on("swipeleft", function(event, ui){
	$("#menu").panel("open", {display:'push', position:'right'});
});


