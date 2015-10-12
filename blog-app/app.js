var hapi = require('hapi'),
	config = require('./config'),
	routes = require('./routes'),
	server = new hapi.Server();

server.connection({ 
    host: config.server.host, 
    port: config.server.port
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});

server.route(routes.endpoints);