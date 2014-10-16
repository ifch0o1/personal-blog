var express = require('express'),
    routes = require('./routes'),
    port = 8080
    ;

var app = express();
console.log(app.get('env'));