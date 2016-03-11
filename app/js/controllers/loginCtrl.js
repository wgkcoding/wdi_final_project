angular
	.module('app')
	.controller('loginCtrl', loginCtrl);

	function loginCtrl(dbService, $state) {
		var ctrl = this;

			ctrl.testMsg = "Logged Out";
			ctrl.dbService = dbService;
			ctrl.state =  $state;

			ctrl.user = {
				email: "",
				password: ""
			};

			ctrl.auth_btn = 'Login';
			ctrl.login = login;

			function login(user){
				dbService.login(user).then(function(res){
				if (res.data === false) {
					ctrl.testMsg = "Incorrect Login Info";
				} else {
					ctrl.testMsg = "Logged In";
				}}, function(err){
				ctrl.testMsg = "Incorrect Login Info";
			});
			}



			}

			// function login(){
			// 	var ctrl = this;
			// 	var payload = {
			// 	 	email:ctrl.email,
			// 	 	password:ctrl.password
			// 	 }
			// 	 console.log("click");
			// 	 ctrl.auth_btn = "Authorizing";
			// 	//make api call
			// 	 ctrl.dbService.login(payload)
			// 	 .then(function(res){
			// 	 	console.log(res);
			// 	 	//successfull response
			// 	 	if(res.status == 200){
			// 	 		ctrl.auth_btn = "Success";
			// 	// 		//user exists
			// 	 		if(res.data.user != null){
			// 	 			ctrl.$state.go('admin');
			// 	 		}
			// 	 	}
			// 	 	else{
			// 	 		ctrl.auth_btn = 'Invalid Password';
			// 	 	}
					
			// 	 },function(){
			// 	 	//error
			// 	 	console.log(res);
			// 	 	ctrl.auth_btn = "Error: Check console";
			// 	 })
			// }