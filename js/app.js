(function(){
'use strict';
angular.module('falconeApp',['ui.router','ngResource','ui.bootstrap'])
.config(function($stateProvider){
  $stateProvider
    .state('home',{
      url:'/',
      templateUrl:'home.html',
      controller:'homeController',
      resolve:{
        planets: function(DataService){
          return DataService.planets.query().$promise;
        },
        vehicles: function(DataService){
          return DataService.vehicles.query().$promise;
        }
      }
    });
    });

})();
