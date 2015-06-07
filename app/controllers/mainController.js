var app = angular.module('chirpApp',[]);

app.controller('mainController', function($scope){
	$scope.newPost = {
		created_by : '',
		text : '',
		created_at : ''
	};
	$scope.posts = [];

	$scope.post = function() {
		console.log('in post function');
		$scope.newPost.created_at = Date.now();
		$scope.posts.push($scope.newPost);
		console.log($scope.posts);
		$scope.newPost = {
			created_by : '',
			text : '',
			created_at : ''
		};
	};

});