angular
	.module('app')
	.controller('viewBCtrl', viewBCtrl);

	function viewBCtrl(dbService) {
		var ctrl = this;

			ctrl.testMsg = "View B";
			ctrl.dbService = dbService;

			console.log(ctrl.testMsg);
	}