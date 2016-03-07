angular
	.module('app')
	.controller('editBCtrl', editBCtrl);

	function editBCtrl(dbService) {
		var ctrl = this;

			ctrl.testMsg = "Edit B";
			ctrl.dbService = dbService;

			console.log(ctrl.testMsg);
	}