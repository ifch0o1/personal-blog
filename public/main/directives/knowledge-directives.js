(function() {
	var app = angular.module('knowledge-directives', [])

	app.directive('knowledgeTabs', ['$http', function($http) {
		return {
			restrict: 'E',
			templateUrl: '/main/templates/directives/knowledge-tabs.html',
			controller: function() {
				this.selected = 1;
				var tab = this;

				this.select = function(tab) {
					this.selected = tab;
				};
				this.isSelected = function(tab) {
					return tab === this.selected;
				};
				/*
					TODO:
					Learn how to write own service.
					Implement $http get request to the given url.
					Return JSON data from this url.
					Set the Json Data to this object.data!
					IMPORTANT - First think how the data will be displayed for different tabs.
					the tabs have selecting functions that accepting number arguments.
				*/

			},
			controllerAs: 'tab'
		};
	}]);

})();