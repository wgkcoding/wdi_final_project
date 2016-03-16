angular
	.module('app',['ui.router', 'ui.bootstrap', 'angular-jwt'])
	.config(function($stateProvider, $urlRouterProvider, $httpProvider){
	
		$urlRouterProvider.otherwise('/home');

		$stateProvider
			.state('home',{
				url:'/home',
				templateUrl:'/partials/home.html',
				controller: 'homeCtrl as ctrl'
			})
			.state('login',{
				url:'/login',
				templateUrl:'/partials/login.html',
				controller: 'loginCtrl as ctrl'
			})
			.state('viewA',{
				url:'/viewA',
				templateUrl:'/partials/viewA.html',
				controller: 'viewACtrl as ctrl'
			})
			.state('viewB',{
				url:'/viewB',
				templateUrl:'/partials/viewB.html',
				controller: 'viewBCtrl as ctrl'
			})
			.state('viewC',{
				url:'/viewC',
				templateUrl:'/partials/viewC.html',
				controller: 'viewCCtrl as ctrl'
			})
			.state('editStory',{
				url:'/editStory',
				templateUrl:'/partials/editStory.html',
				controller: 'editStoryCtrl as ctrl'
			})
			.state('editPhoto',{
				url:'/editPhoto',
				templateUrl:'/partials/editPhoto.html',
				controller: 'editPhotoCtrl as ctrl'
			})
			.state('editUser',{
				url:'/editUser',
				templateUrl:'/partials/editUser.html',
				controller: 'editUserCtrl as ctrl'
			})

				$httpProvider.interceptors.push(function(jwtHelper){
				return {
					request:function(config){
						console.log(config);
						config.headers.authentication = localStorage.authToken;
						return config;
					},
					response:function(response){
						var auth_token = response.headers('authentication');
						if(auth_token){
							var decrypt_token = jwtHelper.decodeToken(auth_token);
							console.log(decrypt_token);
							if(decrypt_token.email){
							localStorage.authToken = auth_token;
						}
						
					}
					return response;
				}
			}
		});
});



