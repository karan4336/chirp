var app = angular.module('chirpApp', []);
app.controller('authController', function($scope) {
	$scope.user = {
					username:'',
					password:'',
					confirm_password:''
				};
	$scope.register =  function(){
		if($scope.user.password === $scope.user.confirm_password) {
			$scope.success_message = "Hey "+$scope.user.username+"! Welcome new Chirpie...You are one among us now."
		}
		else{
			$scope.success_message = "Hey "+ $scope.user.username+"! Passwords do not match...re-enter them.";
		}
		
	};
	$scope.login = function() {
		$scope.success_message = $scope.user.username+" have logged in!"
	};

});