/*
  Auth service to act as a layer between controller and DataService
*/
(function() {
  'use strict';

  function authService($http, $q, DataService) {
    var auth = {};

    auth.getToken = function(){
      return $q((resolve, reject) => {
          DataService.getToken()
          .then((res) => {
            resolve(res.data);
          })
          .catch((err) => {
            console.log(err);
            reject(err.data);
          });
        });
    };

    auth.findFalcone = function(data){
      return $q((resolve, reject) => {
          DataService.findFalcone(data)
          .then((res) => {
            resolve(res.data);
          })
          .catch((err) => {
            console.log(err);
            reject(err.data);
          });
        });
    };

    return auth;
  }

  angular.module('falconeApp')
    .factory('Auth', authService);
})();
