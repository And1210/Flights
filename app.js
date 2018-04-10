const express = require('express');
const TravelPayouts = require('travelpayouts-api');

var app = express();
var flightAPI = new TravelPayouts('a264e783f313166fe9a86b290ac84929', '169888');

app.get('/', function(req, res) {
    flightAPI.search({
        origin: 'YYZ',
        destination: 'MUC',
        date: new Date()
    }).then(function (data) {
        console.log(data);
    });
    res.send("hello");
});

app.listen(2222, function(){
    console.log("Server running on port 2222.");
});