(function(){
'use strict';
angular.module('falconeApp')
.directive('planetList',function(){
  return{
    restrict: 'E',
    scope: {
      destination: '=',
      planets: '=',
      otherplanet1: '=',
      otherplanet2: '=',
      otherplanet3: '='
    },
    templateUrl:'planetListDirective.html'
  };
})
.directive('vehicleList',function(){
	return{
	    restrict: 'E',
	    scope: {
	      name: '=',
	      vehicles: '=',
	      vehicle: '=',
	      update: '&'
	    },
	    templateUrl:'vehicleListDirective.html'
	  };
});

})();
