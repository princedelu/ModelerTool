(function(exports){
	
	var port = process.env.PORT || "8080";
	var host = process.env.HOSTNAME || "localhost";

    var config = {
		
		"host" : host,
		"port" : port,
		"trackingID" : null
	};

    exports.appConfig = config;

})(typeof exports === 'undefined' ? this.appConfig = {} : exports);
