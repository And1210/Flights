const express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send("hello");
});

app.listen(2222, function(){
    console.log("Server running on port 2222.");
});
