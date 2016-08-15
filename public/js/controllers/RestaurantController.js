app.controller('RestaurantController', function($scope,RestaurantService,toastr) {

	$scope.submitButton  = function(){
		var data = $scope.form;
		$scope.form = {};
		$scope.businessForm.$setPristine(true);
	  RestaurantService.addNewRestaurant('http://localhost:8080/api/restaurant',data)
	    .success(function(res){
				toastr.success('Success!', 'Data Submitted!');
				console.log('success',res);
			})
      .error(function(res){
				toastr.error('Error','ugh! Something went wrong!');
				console.log('err',res);
      });
	  }
});
