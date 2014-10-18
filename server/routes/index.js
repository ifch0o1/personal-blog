// This file contains the site routes.
var path = require('path');

// GET Method
exports.home = function(req, res) {
	var index = path.normalize(__dirname + './../../public/main/index.html');
	res.sendFile(index);
}
exports.about = function(req, res) {
	res.send('<h1>About</h1>');
}
exports.apps = function(req, res) {
	res.send('You are in Applications page.');
}

// POST Method
exports.article = function(req, res) {
	//Get /:id param from the post url.
	var id = req.params.id;
	res.send('You are trying to access article with ID: ' + id);
}

