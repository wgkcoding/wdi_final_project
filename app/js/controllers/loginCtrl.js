angular
	.module('app')
	.controller('editACtrl', editACtrl);

	function editACtrl(dbService) {
		var ctrl = this;

			ctrl.testMsg = "editA";
			ctrl.dbService = dbService;

			console.log(ctrl.testMsg);
	}