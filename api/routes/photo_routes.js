var express      = require('express');
var router       = express.Router();
var Photo = require('./../models/Photos');

router.get('/allPhotos', function(req, res){
	console.log(".find");
    Photo.find({}, function(err, Photos) {
        if (err) {
            console.log(err);
        } else {
            console.log(Photos);
            res.send(Photos);
        }
    });
});


router.get('/:id', function(req, res){
    console.log('Getting Product with ID: '+req.params.id);
    Photo.findById(req.params.id, function(err, photo) {
        if (err) {
            console.log(err);
        } else {
            console.log(photo);
            res.send(photo);
        }
    });
    console.log('Running Id');
});


router.post('/newPhoto', function(req, res){
        console.log(".post");
        var newPhoto = Photo({
            image: req.body.image,
        	owner: req.body.owner, 
            title: req.body.title, 
            createdate: req.body.date,
            location: req.body.location, 
            copyright: req.body.copyright,
            description: req.body.description
        });
        newPhoto.save(function (err){
            if (err) {
                console.log(err)
            } else {
                console.log(newPhoto);
                res.json('newPhoto');
            }
        });
});

router.put('/:id', function(req, res) {
	var identify = req.params.id;
    var query = { "_id": identify }
	console.log("Update ID: " + identify);
	var updateInfo = {
            image: req.body.image,
            owner: req.body.owner, 
            title: req.body.title, 
            createdate: req.body.date,
            location: req.body.location, 
            copyright: req.body.copyright,
            description: req.body.description
    	};
    console.log(updateInfo);
    Photo.update(query,updateInfo,{},function(err,photo){
        if(err){
            console.log(err);
        }
        else{
            console.log(photo);
            res.send('hi');
        }
    });
})

router.delete('/:id', function(req, res) {
	var identify = req.params.id;
  	Photo.findByIdAndRemove(identify, function (err, photo) {
      if (err) {
            console.log(err);
        } else {
            console.log(photo);
            res.send(photo);
        }
  });
});

module.exports = router;