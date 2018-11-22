const express = require('express');
const path = require('path');
const $ = require('najax');

var app = express();

// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
	$.get({
		url: 'https://www.google.com/flights',
		success: function(data, a, b) {
			res.send(b.responseText);
		},
		error: function(e) {
			console.log(e);
			res.send(e.responseText);
		}
	});
});

app.listen(2222, function(){
    console.log("Server running on port 2222.");
});
