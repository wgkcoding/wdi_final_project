angular
	.module('app')
	.controller('viewACtrl', viewACtrl);

	function viewACtrl(dbService) {
		var ctrl = this;

			ctrl.testMsg = "View A";
			ctrl.dbService = dbService;
			ctrl.myInterval = 3000;
			ctrl.noWrapSlides = false;
			ctrl.active = 0;

			ctrl.slides = [
			{image:"../assets/img/test_mara/mara_00.jpg",
			id:0},
			{image:"../assets/img/test_mara/mara_01.jpg",
			id:1},
			{image:"../assets/img/test_mara/mara_02.jpg",
			id:2},
			{image:"../assets/img/test_mara/mara_03.jpg",
			id:3},
			{image:"../assets/img/test_mara/mara_04.jpg",
			id:4}
			];

			console.log(ctrl.testMsg);
			console.log(ctrl.slides);

	};