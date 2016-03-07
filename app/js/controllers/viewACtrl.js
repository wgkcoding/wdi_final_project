angular
	.module('app')
	.controller('viewACtrl', viewACtrl);

	function viewACtrl(dbService) {
		var ctrl = this;

			ctrl.testMsg = "View A";
			ctrl.dbService = dbService;

			console.log(ctrl.testMsg);
	}