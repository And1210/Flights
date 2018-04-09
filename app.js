const express = require('express');
const qpx = require('qpx-api');

var app = express();

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.listen(2222, function(){
    console.log("Server running on port 2222.");
});