//where-i-go.js JavaScript file for where i go app

document.addEventListener("deviceready", onDeviceReady);

function onDeviceReady() {
	checkConnection();
	}

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
var track_id = ' ';
var watch_id = null;
var tracking_data= [];

$("startTrackingStart").live('click', function() {
	
	watch_id = navigator.geolocation.watchPosition(
		
		function(position){
			tracking_data.push(position);
		},
		
		function(error){
			console.log(error);
			//instead of logging error, review inserting into the DOM via document.getElementByID("startTrackingDebug") and inner.html
		}
			
		{frequency: 3000, enableHighAccuracy: true});
	
	$("startTrackingStatus").html("Now tracking");
};
