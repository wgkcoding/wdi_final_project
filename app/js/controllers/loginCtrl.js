angular
	.module('app')
	.controller('loginCtrl', loginCtrl);

	function loginCtrl(dbService) {
		var ctrl = this;

			ctrl.testMsg = "login";
			ctrl.dbService = dbService;

			console.log(ctrl.testMsg);
	}