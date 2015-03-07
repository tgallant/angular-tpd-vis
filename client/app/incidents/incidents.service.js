'use strict';

angular.module('angularTpdVisApp')
  .factory('incidents', function ($http, $q) {
    var data = false;

    function getIncidents (limit) {
      var deferred = $q.defer();
      if(data === false) {
        d3.json("/api/incidents?limit="+limit, function(result) {
          data = result.data;
          deferred.resolve(data);
        });
      }else{
        deferred.resolve(data);
      }
      return deferred.promise;
    }

    // Public API here
    return {
      getIncidents: getIncidents
    };
  });
