
var myApp = angular.module('myApp', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

		$routeProvider
			.when('/', {
				templateUrl: '/main/templates/home.html'
			})
			.when('/knowledge', {
				templateUrl: '/main/templates/knowledge.html'
			});

			

		$locationProvider.html5Mode(true);

	}]);