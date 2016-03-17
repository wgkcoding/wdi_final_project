angular
	.module('app')
	.controller('photosCtrl', photosCtrl);

	function photosCtrl(dbService, photos, $scope) {
		var ctrl = this;

			ctrl.testMsg = "View A";
			this.dbService = dbService;
			this.myInterval = 6000;
			this.noWrapSlides = false;
			this.active = 0;
			
			ctrl.photos = photos

		};