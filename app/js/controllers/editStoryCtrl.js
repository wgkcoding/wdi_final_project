angular
	.module('app')
	.controller('editStoryCtrl', editStoryCtrl);

	function editStoryCtrl(dbService) {
		var ctrl = this;

			ctrl.testMsg = "Edit Story";
			ctrl.dbService = dbService;
			ctrl.stories = [];
			ctrl.update = {
					headline: "",
					author: "",
					createdate: "",
					content: "",
					image: "",
			}

			ctrl.getAll = getAll;
			ctrl.getOne = getOne;
			ctrl.post = post;
			ctrl.put = put;
			ctrl.del = del;

		function getAll(){
			console.log("getAll");
			var addr = '/api/stories/allStories';
			dbService.getAll(addr).then(function(res){
					ctrl.stories = res;
			});
		};

		function getOne(id){
			var addr = '/api/stories/';
			dbService.getOne(addr, id).then(function(res){
					ctrl.stories = [];
					ctrl.stories.push(res);
			});
		};

		function post(newStory){
			console.log("post");
			var addr = '/api/stories/newStory';
			dbService.post(addr, newStory).then(function(res){
				if (res) {ctrl.getAll()}
			})
		};

		function put(id, update){
			console.log('PUT request id: ' + id);
			var addr = '/api/stories/';
			dbService.put(addr, id, update).then(function(res){
			if (res) ctrl.getAll();
		});
	};

		function del(id){
			console.log("del");
			var addr = '/api/stories/';
			dbService.del(addr, id).then(function(res){
			if (res) ctrl.getAll();
		});
	};

}