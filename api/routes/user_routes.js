var express      = require('express');
var randomString = require('random-string');
var jwt          = require('jsonwebtoken');
var router       = express.Router();
var User = require('./../models/Users');

// router.post('/login',function(req,res){
//     console.log('console endpoint')
//     var where = {where:{email:req.body.email,password:req.body.password}};
//     models.Users.find(where).then(function(user){
//         var user_obj = {email:user.email,id:user.id};
//         var token = jwt.sign(user_obj,'Fv1f3Y37S3RorBbT4PumpWVHejaEYnGs');
//             res.set('authentication',token);
//             res.json({
//                 user:user
//             });
//     });
// });

router.get('/allUsers', function(req, res){
	console.log(".find");
    User.find({}, function(err, Users) {
        if (err) {
            console.log(err);
        } else {
            console.log(Users);
            res.send(Users);
        }
    });
});


router.get('/:id', function(req, res){
    console.log('Getting Product with ID: '+req.params.id);
    User.findById(req.params.id, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            console.log(user);
            res.send(user);
        }
    });
    console.log('Running Id');
});


router.post('/newUser', function(req, res){
        console.log(".post");
        var newUser = User({
        	email: req.body.email,
            password: req.body.password
        });
        console.log(newUser);
        newUser.save(function (err){
            if (err) {
                console.log(err)
            } else {
                console.log(newUser);
                res.json('newUser');
            }
        });
});

router.put('/:id', function(req, res) {
	var identify = req.params.id;
    var query = { "_id": identify }
	console.log("Update ID: " + identify);
	var updateInfo = {
                email: req.body.email,
                password: req.body.password,
    	};
    console.log(updateInfo);
    User.update(query,updateInfo,{},function(err,user){
        if(err){
            console.log(err);
        }
        else{
            console.log(user);
            res.send('hi');
        }
    });
})

router.delete('/:id', function(req, res) {
	var identify = req.params.id;
  	User.findByIdAndRemove(identify, function (err, user) {
      if (err) {
            console.log(err);
        } else {
            console.log(user);
            res.send(user);
        }
  });
});

module.exports = router;