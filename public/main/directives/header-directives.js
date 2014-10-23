(function() {
	var app = angular.module('header-directives', []);

	app.directive('headerLinks', ['$location', function($location) {
		return {
			restrict: 'E',
			templateUrl: '/main/templates/directives/header-links.html',
			controller: function() {
				// Extracting only the first route "directory" name.
				this.selected = $location.path().split('/')[1];

				this.isSelected = function(link) {
					return link === this.selected;
				};
				this.select = function(link) {
					// TODO - what will be happend if the link doesn't existing?
					this.selected = link || 'home';
				}
			},
			controllerAs: 'link'
		};
	}]);

})();