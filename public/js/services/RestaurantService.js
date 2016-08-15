app.service('RestaurantService', ['$http', function($http) {

	this.addNewRestaurant = function(url,data){
    data.dateCreated = new Date();
    return $http.post(url,data);
  };

  this.getData = function(url){
    return $http.get(url);
  }

}]);
