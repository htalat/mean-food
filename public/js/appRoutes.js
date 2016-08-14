app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		})

		.when('/restaurant', {
			templateUrl: 'views/restaurant.html',
			controller: 'RestaurantController'
		})

		.when('/business', {
			templateUrl: 'views/business.html',
			controller: 'BusinessController'
		});

	$locationProvider.html5Mode(true);

}]);
