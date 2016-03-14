angular
	.module('app')
	.controller('viewBCtrl', viewBCtrl);

	function viewBCtrl(dbService) {
		var ctrl = this;

			ctrl.testMsg = "View B";
			ctrl.dbService = dbService;
			ctrl.myInterval = 3000;
			ctrl.noWrapSlides = false;
			ctrl.active = 0;

			ctrl.slides = [
			{image:"../assets/img/frontPages/STAR_ONT_ON_2014-2-11_A6.jpg",
			id:0},
			{image:"../assets/img/frontPages/STAR_ONT_ON_2014-14-12_A7.jpg",
			id:1},
			{image:"../assets/img/frontPages/STAR_ONT_ON_2015-3-1_GT1.jpg",
			id:2},
			{image:"../assets/img/frontPages/STAR_ONT_ON_2015-22-10_A1.jpg",
			id:3},
			{image:"../assets/img/frontPages/STAR_ONT_ON_2016-3-2_A1.jpg",
			id:4},
			{image:"../assets/img/frontPages/STAR_ONT_ON_2016-26-1_A1.jpg",
			id:5},
			{image:"../assets/img/frontPages/STAR_ONT_Replate_ON_2013-15-12_A1.jpg",
			id:6},
			{image:"../assets/img/frontPages/STAR_ONT_Replate_ON_2015-5-12_A1.jpg",
			id:7},
			{image:"../assets/img/frontPages/STAR_ONT_Replate_ON_2015-5-10_GT1.jpg",
			id:8},
			{image:"../assets/img/frontPages/STAR_ONT_Replate_ON_2016-26-1_A4.jpg",
			id:9}
			];

			console.log(ctrl.testMsg);
			console.log(ctrl.slides);
			console.log(ctrl.testMsg);
	};