angular
	.module('app')
	.controller('photosCtrl', photosCtrl);

	function photosCtrl(dbService, photos, $scope) {
		var ctrl = this;

			ctrl.testMsg = "View A";
			$scope.dbService = dbService;
			$scope.myInterval = 3000;
			$scope.noWrapSlides = false;
			$scope.active = 0;
			$scope.photos = photos;
			// [
			// {image: "../assets/img/test_mara/mara_00.jpg", _id:1},
			// {image: "../assets/img/test_mara/mara_01.jpg", _id:2}
			// ];
			console.log($scope.photos);
			// ctrl.getAll = getAll;

			// $timeout(function() {
			// 	getAll();
			// })
			

		function getAll(){
				var addr = '/api/photos/allPhotos';
				ctrl.dbService.getAll(addr).then(function(res){
					ctrl.slides = res;
					console.log(ctrl.slides);
				});
		};

	};