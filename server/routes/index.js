// This file contains the site routes.
var path = require('path');

// GET Method
exports.home = function(req, res) {
	var index = path.normalize(__dirname + './../../public/main/index.html');
	res.sendFile(index);
}

// POST Method