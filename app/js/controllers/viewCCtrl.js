angular
	.module('app')
	.controller('viewCCtrl', viewCCtrl);

	function viewCCtrl(dbService) {
		var ctrl = this;

			ctrl.testMsg = "View C";
			ctrl.dbService = dbService;

			console.log(ctrl.testMsg);
	}