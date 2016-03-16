angular
	.module('app')
	.controller('homeCtrl', homeCtrl);

	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

	twttr.ready(function (twttr) {
		twttr.widgets.load();
		// twttr.events.bind('click', function (event) {alert('yes'); });
	});

	function homeCtrl(dbService) {
		var ctrl = this;

			ctrl.testMsg = "Home";
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

			console.log(ctrl.testMsg);

	};	

		
	