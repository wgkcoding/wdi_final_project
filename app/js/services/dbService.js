(function(){

	angular
		.module('app')
		.service('dbService', dbService);

	function dbService($http) {

			this.allShops = {};
			this.selectShop = {};

			this.getAll = getAll;
			this.getOne = getOne;
			this.post = post;
			this.put = put;
			this.del = del;

		function getAll(){
			return $http.get('/all')
				.then(function(res){
					this.allShops = res.data;
					return res.data;
				}, function(err){
					console.log(err);
					return err;
			})
		};

		function getOne(id){
			return $http.get('/'+id)
				.then(function(res){
					this.allShops = res.data;
					return res.data
				}, function(err){
					console.log(err);
					return err
				})
	 	};

		function post(){
			$http.post('/new', {name: "Ibby's Shop",address: "443 Equestria",rating: "5 stars"})
				.then(function(){
				}, function(err){
					console.log(err);
					return err
				})
		};

		function put(id, update){
			return $http.put('/'+id, update)
				.then(function(res){
					return res
				}, function(err){
					console.log(err);
					return err
				})
		};

		function del(id){
			return $http.delete('/'+id)
				.then(function(res){
					return res
				}, function(err){
						console.log(err);
						return err
					})
		};

	};

}());