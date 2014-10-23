(function() {
var app = angular.module('blog', ['ngRoute', 'header-directives', 'knowledge-directives'])

	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: '/main/templates/views/home.html'
			})
			.when('/knowledge', {
				templateUrl: '/main/templates/views/knowledge.html'
			});

		$locationProvider.html5Mode(true);

	}]);

})();