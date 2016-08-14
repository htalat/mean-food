app.controller('RestaurantController', function($scope,RestaurantService) {

	$scope.submitButton  = function(){
	    console.log($scope.form)
	    RestaurantService.addNewRestaurant('http://localhost:8080/api/restaurant',$scope.form)
	      .success(function(res){
					console.log('success',res);
	      })
	      .error(function(res){
					console.log('err',res);
	      });


	  }

});
