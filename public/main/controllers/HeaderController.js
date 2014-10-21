myApp.controller('HeaderController', function($scope, $location) {

	$scope.isActive = function(location) {
		return location === $location.path();
	}

});