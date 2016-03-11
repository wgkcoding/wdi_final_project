angular
	.module('app')
	.controller('editPhotoCtrl', editPhotoCtrl);

	function editPhotoCtrl(dbService) {
		var ctrl = this;

			ctrl.testMsg = "Edit Photo";
			ctrl.dbService = dbService;
			ctrl.photos = [];
			ctrl.update = {
				owner: "", 
				title: "", 
				createdate: "",
				location: "", 
				copyright: ""
			}

			ctrl.getAll = getAll;
			ctrl.getOne = getOne;
			ctrl.post = post;
			ctrl.put = put;
			ctrl.del = del;

		function getAll(){
			console.log("getAll");
			var addr = '/api/photos/allPhotos';
			dbService.getAll(addr).then(function(res){
					ctrl.photos = res;
			});
		};

		function getOne(id){
			var addr = '/api/photos/';
			dbService.getOne(addr, id).then(function(res){
					ctrl.photos = [];
					ctrl.photos.push(res);
			});
		};

		function post(newPhoto){
			console.log("post");
			var addr = '/api/photos/newPhoto';
			dbService.post(addr, newPhoto).then(function(res){
				if (res) {ctrl.getAll()}
			})
		};

		function put(id, update){
			console.log('PUT request id: ' + id);
			var addr = '/api/photos/';
			dbService.put(addr, id, update).then(function(res){
			if (res) ctrl.getAll();
		});
	};

		function del(id){
			console.log("del");
			var addr = '/api/photos/';
			dbService.del(addr, id).then(function(res){
			if (res) ctrl.getAll();
		});
	};

}