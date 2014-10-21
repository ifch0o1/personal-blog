var express = require('express'),
	routes = require('./server/routes'),
	port = 8080;

var app = express();


app.use(express.static(__dirname + '/public'));

//Gets
app.get('/', routes.home);

app.get('*', routes.home);
//Posts

app.listen(port);
console.log('Server started. Listening at port: ' + port);