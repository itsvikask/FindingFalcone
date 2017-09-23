(function(){
'use strict';
angular.module('falconeApp')
.controller('homeController',function($scope,$http,planets,vehicles,Auth) {

  $scope.timeTaken = 0;
  $scope.vehicleList = {vehicle1:'vehicle1',vehicle2:'vehicle2',vehicle3:'vehicle3',vehicle4:'vehicle4'};
  var distances = [];

 //Get the planets from service and calculate distances
  $scope.planets = planets;
  angular.forEach($scope.planets, function(planet){
    distances[planet.name]=planet.distance;
  });

  //Get the vehicles from service
  $scope.vehicles = vehicles;

  //Method to update vehicle count and calculate total time taken
  $scope.updateVCount = function(){
    $scope.vehicles = [];
    $scope.timeTaken = 0;

    angular.forEach(vehicles, function(vehicle){
      var count = vehicle.total_no;

     if($scope.v1 != undefined && $scope.v1 === vehicle.name && $scope.model.destination1){
         $scope.timeTaken+=(distances[$scope.model.destination1]/vehicle.speed);
         count--;
     }
     if($scope.v2 != undefined && $scope.v2=== vehicle.name && $scope.model.destination2){
         $scope.timeTaken+=(distances[$scope.model.destination2]/vehicle.speed);
         count--;
     }
     if($scope.v3 != undefined && $scope.v3=== vehicle.name && $scope.model.destination3){
    	 $scope.timeTaken+=(distances[$scope.model.destination3]/vehicle.speed);
    	 count--;
     }if($scope.v4 != undefined && $scope.v4=== vehicle.name && $scope.model.destination4){
    	 $scope.timeTaken+=(distances[$scope.model.destination4]/vehicle.speed);
    	 count--;
     }

    $scope.vehicles.push({"name":vehicle.name ,"total_no":count,"max_distance":vehicle.max_distance ,"speed":vehicle.speed});
  });
  };

  //Function to get token and call method to find falcone
  $scope.findFalcone = function(){

    Auth.getToken()
    .then((res) => {

        var data={
         'token':res.token,
         'planet_names':[
                         $scope.model.destination1,$scope.model.destination2,$scope.model.destination3,$scope.model.destination4
                         ],
          'vehicle_names':[$scope.v1,$scope.v2,$scope.v3,$scope.v4]
        };

        Auth.findFalcone(data)
        .then((res) => {
            $scope.planetFound = res;
          })
        .catch(err =>
        {
          $scope.error = err.errMessage;
        });

      })
    .catch(err =>
    {
      $scope.error = err.errMessage;
    });

  };

  //Reset function to reset all data
  $scope.reset = function(){
	  $scope.planetFound = undefined;
	  $scope.error = undefined;
	  $scope.vehicles = vehicles;
	  $scope.model = undefined;
	  $scope.v1 = undefined;
	  $scope.v2 = undefined;
	  $scope.v3 = undefined;
	  $scope.v4 = undefined;
	  $scope.timeTaken = 0;
  };

});
})();
