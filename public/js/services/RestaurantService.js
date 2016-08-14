app.service('RestaurantService', ['$http', function($http) {

	this.addNewRestaurant = function(url,data){

    return $http.post(url,data);


  };

  this.getData = function(url){
    return $http.get(url);
  }

}]);
