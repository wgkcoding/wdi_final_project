var express = require("express");
var app = express();
app.use(express.static(__dirname + './../app'));

app.listen(8080, function(){
	console.log("Listening on Port 8080, Stop with Ctrl+C");
});



var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/data/db/');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Connected to db at /data/db/")
});