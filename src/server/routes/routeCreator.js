var _ =           require('underscore');
var path =        	require('path');

var clientDir = path.join(__dirname, '../../../public');

var routes = [

    
    // All other get requests should be handled by REACT's client-side routing system
    {
        path: '*',
        httpMethod: 'GET',
		middleware: [function(req, res) {
            res.sendFile(path.resolve(clientDir, 'index.html'))
        }]
    }
];

var routesConcat = {};

module.exports = function(app,db) {
    
    routesConcat = routes;
	
    _.each(routesConcat, function(route) {
        route.middleware.unshift(ensureAuthorized);
        var args = _.flatten([route.path, route.middleware]);
        switch(route.httpMethod.toUpperCase()) {
            case 'GET':
				app.get.apply(app, args);
                break;
            case 'POST':
                app.post.apply(app, args);
                break;
            case 'PUT':
                app.put.apply(app, args);
                break;
            case 'DELETE':
                app.delete.apply(app, args);
                break;
            default:
                throw new Error('Invalid HTTP method specified for route ' + route.path);
                break;
				
        }
    });
}

function ensureAuthorized(req, res, next) {
    return next();
}
