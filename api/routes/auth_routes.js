var Users 	= require('./../models/Users');
var bcrypt	= require('bcrypt-nodejs');
var jwt		= require('jsonwebtoken');
var router 	= require('express').Router();


//register a new user
router.post('/register',function(req,res){
	console.log('Registration Endpoint');
	var __user = req.body;
	//check if user is already registered
	var where = {where:{email:__user.email}};
	console.log(where);
	Users.findOne(where)
	.then(function(user){
		console.log(user);
		if(!user){
			//user does not exist
			//encrypt password
			bcrypt.genSalt(10, function(err, salt) {
		    	bcrypt.hash(__user.password, salt, function(){
		    		console.log("Hashing");
		    	}, function(err, hash) {
		       		// Store hash in your password DB. 
		        	__user.password = hash;
		        	Users.create(__user)
		        	.then(function(user){
		        		//remove password from response
		        		delete user.password;
		        		res.json({user:user,msg:'Account Created'});
		        	})
		    	});
			});
		}else{
			res.json({user:null,msg:'Email is already registered'})
		}
		
	});
});

router.post('/authenticate',function(req,res){
	console.log('Authentication Endpoint');
	var __user = req.body;
	var where = {email:__user.email};
	console.log(where);
	Users.findOne(where, function(err, user) {
        if (err) {
            console.log(err);
            res.json({status:400,err:err});
        } else if(user){
			//check incoming password against encrypted version
			bcrypt.compare(__user.password, user.password, function(err, valid) {
			    if(valid){
			    	//remove password from response
			    	delete user.password;
			    	//set web token
			    	var user_obj = {email:user.email};
			    	var token = jwt.sign(user_obj,'randomsalt');
					res.set('authentication',token);
			    	res.json({user:user,msg:'Authenticated'});
			    } else {
			    	res.json({user:null,msg:'Email/Password is incorrect'})
			    }}
			)}
		})
	});

module.exports = router;