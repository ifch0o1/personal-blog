var express = require('express'),
    routes = require('./server/routes'),
    port = 8080;

var app = express();


app.use(express.static(__dirname + '/public'));

//Gets
app.get('/', routes.home);
app.get('/about', routes.about);
app.get('/apps', routes.apps);
app.get('/article/:id', routes.article);
//Posts


app.listen(port);