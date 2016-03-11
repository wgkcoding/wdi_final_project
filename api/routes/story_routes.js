var express      = require('express');
var router       = express.Router();
var Story = require('./../models/Stories');

router.get('/allStories', function(req, res){
	console.log(".find");
    Story.find({}, function(err, Stories) {
        if (err) {
            console.log(err);
        } else {
            console.log(Stories);
            res.send(Stories);
        }
    });
});


router.get('/:id', function(req, res){
    console.log('Getting Product with ID: '+req.params.id);
    Story.findById(req.params.id, function(err, story) {
        if (err) {
            console.log(err);
        } else {
            console.log(story);
            res.send(story);
        }
    });
    console.log('Running Id');
});


router.post('/newStory', function(req, res){
        console.log(".post");
        var newStory = Story({
        	   headline: req.body.headline,
                author: req.body.author,
                  createdate: req.body.date,
                  content: req.body.content,
                    image: req.body.image
        });
        newStory.save(function (err){
            if (err) {
                console.log(err)
            } else {
                console.log(newStory);
                res.send(true);
            }
        });
});

router.put('/:id', function(req, res) {
	var identify = req.params.id;
    var query = { "_id": identify }
	console.log("Update ID: " + identify);
	var updateInfo = {
                headline: req.body.headline,
                author: req.body.author,
                createdate: req.body.date,
                content: req.body.content,
                image: req.body.image
    	};
    console.log(updateInfo);
    Story.update(query,updateInfo,{},function(err,story){
        if(err){
            console.log(err);
        }
        else{
            console.log(story);
            res.send('hi');
        }
    });
})

router.delete('/:id', function(req, res) {
	var identify = req.params.id;
  	Story.findByIdAndRemove(identify, function (err, story) {
      if (err) {
            console.log(err);
        } else {
            console.log(story);
            res.send(story);
        }
  });
});

module.exports = router;