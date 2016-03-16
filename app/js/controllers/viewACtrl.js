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
			ctrl.getAll = getAll;

			getAll();

		function getAll(){
				var addr = '/api/photos/allPhotos';
				ctrl.dbService.getAll(addr).then(function(res){
					ctrl.slides = res;
					console.log(ctrl.slides);
				});
		};

	};