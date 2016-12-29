/** 
########################################################################################################################################
Server Nodejs
########################################################################################################################################
**/

/**
########################################################################################################################################
Déclaration
########################################################################################################################################
**/
const express =       	require('express')
    , http =        	require('http')
    , path =        	require('path')
	, bodyParser = 		require('body-parser')
	, methodOverride = 	require('method-override')
    , fs = 	        	require('fs')
	, appConfig = 			require('../config/app.js').appConfig;
	
/**
########################################################################################################################################
Variables
########################################################################################################################################
**/
const app = express();
//var logFile = fs.createWriteStream(path.join(__dirname, 'log/logServer.log'), {flags: 'a'}); //use {flags: 'w'} to open in write mode
var clientDir = path.join(__dirname, '/../../public');


// Définition des mode
app.use(bodyParser());
app.use(methodOverride());
app.use(express.static(clientDir));


require('./routes/routeCreator.js')(app);

app.use(function(req, res, next) {
  console.log('404')
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err1, req, res, next) {
  res.sendStatus(err1.status || 500);
});
	
app.set('port', appConfig.port);
http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});