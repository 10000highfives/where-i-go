//where-i-go.js JavaScript file for where i go app

document.addEventListener("deviceready", onDeviceReady);
//load cordova
function onDeviceReady() {
	checkConnection();
	}

//look for internet
function checkConnection() {
	var networkState = navigator.network.connection.type;
	
	var states = {};
	states[Connection.UNKNOWN]	= 'Unknown connection';
	states[Connection.WIFI]		= 'WiFi connection';
	states[Connection.CELL_3G]	= '3G connection';
	states[Connection.CELL_4G]	= '4G connection';
	states[Connection.NONE]		= 'no connection';
	
	if(states[networkState] == Connection.UNKNOWN){
		$("#home_checkconnection").text('No Internet Access').attr("data-icon", "delete").button("refresh");
		
		}
	};

//track geolocation when 'Follow' is clicked
var track_id = ' ';
var watch_id = null;
var tracking_data= [];

$("startTrackingStart").live('click', function() {
	var options = {frequency: 60000, enableHighAccuracy: true};
	watch_id = navigator.geolocation.watchPosition(onSuccess, onError, options);
}

		
function onSuccess(position){
	tracking_data.push(position);
	$("startTrackingStatus").html("Now tracking");
}

		
function onError(error){
	var e = document.getElementByID("startTrackingDebug");
	e.innerHTML = "'Error code: ' + error.code + < /br> + 'Error message: ' + error.message";
}

//stop tracking when 'End' is clicked
$("startTrackingStop").live('click', function clearWatch() {
	if watch_id != null {
		navigator.geolocation.clearWatch(watch_id);
		watch_id = null;
		}
	window.localStorage.setItem(track_id,JSON.stringify(tracking_data));
	tracking_data = null;
	
	$("#track_id").val("").show();
	$("#startTrackingStatus").html("Stopped tracking  "+ track_id);
});
	

				
