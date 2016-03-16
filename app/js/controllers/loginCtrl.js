angular
	.module('app')
	.controller('loginCtrl', loginCtrl);

	function loginCtrl(dbService, $state, $http) {
		var ctrl = this;

			ctrl.testMsg = "Logged Out";
			ctrl.dbService = dbService;
			ctrl.state =  $state;

			ctrl.user = {
				email: "",
				password: ""
			};

			ctrl.auth_btn = 'Login';
			// ctrl.login = login;

			ctrl.register_btn = "Sign Up";
			ctrl.register = register;
			ctrl.authenticate = authenticate;
			ctrl.logOut = logOut;

		function register(user){
			//check passwords
			if(user.password == ctrl.repassword){
				user = JSON.stringify(user);
				$http.post('/api/auth/register',user)
				.then(function(res){
					console.log(res);
					ctrl.register_btn = res.data.msg;
				})
			}
			else{
				ctrl.register_btn = "Passwords Don't Match";
			}
		}

		function authenticate(user){
			user = JSON.stringify(user);
			$http.post('/api/auth/authenticate',user)
			.then(function(res){
				console.log(res);
				localStorage.loginEmail = ctrl.email;
				ctrl.auth_btn = res.data.msg;
			})
		}

		function logOut(){
			localStorage.clear();
		}

	}