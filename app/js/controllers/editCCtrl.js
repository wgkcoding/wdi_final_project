angular
	.module('app')
	.controller('editCCtrl', editCCtrl);

	function editCCtrl(dbService) {
		var ctrl = this;

			ctrl.testMsg = "Edit C";
			ctrl.dbService = dbService;

			console.log(ctrl.testMsg);
	}