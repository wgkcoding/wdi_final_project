angular
	.module('app')
	.controller('storyCtrl', storyCtrl);

	function storyCtrl(dbService) {
		var ctrl = this;

			ctrl.testMsg = "View B";
			ctrl.dbService = dbService;
			ctrl.myInterval = 0;
			ctrl.noWrapSlides = false;
			ctrl.active = 0;

			ctrl.slides = [
			{image:"../assets/img/frontPages/story-1.jpg",
			id:0},
			{image:"../assets/img/frontPages/story-2.jpg",
			id:1},
			{image:"../assets/img/frontPages/story-3.jpg",
			id:2},
			{image:"../assets/img/frontPages/story-4.jpg",
			id:3},
			{image:"../assets/img/frontPages/story-5.jpg",
			id:4},
			{image:"../assets/img/frontPages/story-6.jpg",
			id:5},
			{image:"../assets/img/frontPages/story-7.jpg",
			id:6},
			{image:"../assets/img/frontPages/story-8.jpg",
			id:7},
			{image:"../assets/img/frontPages/story-9.jpg",
			id:8}
			];

			console.log(ctrl.testMsg);
			console.log(ctrl.slides);
			console.log(ctrl.testMsg);
	};