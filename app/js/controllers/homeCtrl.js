angular
	.module('app')
	.controller('homeCtrl', homeCtrl);

	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

	function homeCtrl(dbService) {
		var ctrl = this;

			ctrl.testMsg = "Home";
			ctrl.dbService = dbService;

			console.log(ctrl.testMsg);
	}

	// $scope.slides = [
	// 		{image: 'rsrcs/carosrc/Photos/mara_00.jpg', description: 'Image 00'},
	// 		{image: 'rsrcs/carosrc/Photos/mara_01.jpg', description: 'Image 01'},
	// 		{image: 'rsrcs/carosrc/Photos/mara_02.jpg', description: 'Image 02'},
	// 		{image: 'rsrcs/carosrc/Photos/mara_03.jpg', description: 'Image 03'},
	// 		{image: 'rsrcs/carosrc/Photos/mara_04.jpg', description: 'Image 04'},
	// 	];

	// 	$scope.currentIndex = 0;

	// 	$scope.setCurrentSlideIndex = function (index) {
	// 		$scope.currentIndex = index;
	// 	};

	// 	$scope.isCurrentSlideIndex = function (index) {
	// 		return $scope.currentIndex === index;
	// 	};

	// 	$scope.prevSlide = function () {
	// 		$scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
	// 	}

	// 	$scope.nextSlide = function () {
	// 		$scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
	// 	}
	// })
	// 	.animation('.slide-animation', function () {
	// 		return {
	// 			addClass: function (element, className, done) {
	// 				if (className == 'ng-hide') {
	// 					TweenMax.to(element, 0.5, {left: -element.parent().width(), onComplete: done });
	// 					// ANIMATION CODE GOES HERE
	// 				}
	// 				else {
	// 					done();
	// 				}
	// 			},
	// 			removeClass: function (element, className, done) {
	// 				if (className == 'ng-hide') {
	// 					// ANIMATION CODE GOES HERE
	// 					element.removeClass('ng-hide');

	// 					TweenMax.set(element, { left: element.parent().width() });
	// 					TweenMax.to(element, 0.5, {left: 0, onComplete: done });
	// 				}
	// 				else {
	// 					done();
	// 				}
	// 			}
	// 		};
	// 	});