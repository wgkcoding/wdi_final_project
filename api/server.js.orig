//EXPRESS
var express = require("express");
var bodyParser = require('body-parser');
var authentication = require("./middleware/auth");
var app = express();


app.use(express.static(__dirname + './../app'));
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended:false}));

app.listen(8080, function(){
	console.log("Listening on Port 8080, Stop with Ctrl+C");
});


//MONGOOSE
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/data/db/');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Connected to db at /data/db/")
});


//MODELS
var User = require('./models/Users');
var Story = require('./models/Stories');
var Photo = require('./models/Photos');

//ROUTES
var userRoutes = require('./routes/user_routes');
var storyRoutes = require('./routes/story_routes');
var photoRoutes = require('./routes/photo_routes');
var auth_routes = require('./routes/auth_routes');

//ENDPOINTS
app.use('/api/users' , userRoutes);
app.use('/api/stories' , storyRoutes);
app.use('/api/photos' , photoRoutes);
app.use('/api/auth', auth_routes);
