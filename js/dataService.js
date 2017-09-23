/*
  service to handle all the data calls
*/
(function() {
  'use strict';

  function dataService($resource,$http) {
    var service = {};

    service.planets = $resource('https://findfalcone.herokuapp.com/planets', {}, {
      query: {
        method: 'GET',
        isArray:true
      }
    });

    service.vehicles = $resource('https://findfalcone.herokuapp.com/vehicles', {}, {
      query: {
        method: 'GET',
        isArray:true
      }
    });

    service.getToken = function(){
      return  $http.post('https://findfalcone.herokuapp.com/token', {}, {headers:{'Accept' : 'application/json'}});
    };

    service.findFalcone = function(data){
      return  $http.post('https://findfalcone.herokuapp.com/find', data, {headers:{'Accept' : 'application/json','Content-Type' :'application/json'}});
    };

    return service;
  }

  angular.module('falconeApp')
    .factory('DataService', dataService);
})();
