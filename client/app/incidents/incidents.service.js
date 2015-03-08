'use strict';

angular.module('angularTpdVisApp')
  .factory('incidents', function ($http, $q) {

    function getIncidents (limit, date) {
      var deferred = $q.defer();
      $http.get("/api/incidents?lim="+limit+"&start="+date+"&end="+(date+1)).success(function(result) {
        deferred.resolve(result);
      });
      return deferred.promise;
    }

    function minDate() {
      var deferred = $q.defer();
      $http.get("/api/mindate").success(function(result) {
        deferred.resolve(data);
      }).error(function(error) {
        console.log(error);
        deferred.resolve(null);
      });
      return deferred.promise;
    }
      
    // Public API here
    return {
      getIncidents: getIncidents,
      minDate: minDate
    };
  });
