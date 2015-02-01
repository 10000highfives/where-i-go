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
