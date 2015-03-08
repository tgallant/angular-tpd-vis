'use strict';

angular.module('angularTpdVisApp')
  .factory('incidents', function ($http, $q) {
    var data = false;

    function getIncidents (limit, date) {
      var deferred = $q.defer();
      if(data === false) {
        d3.json("/api/incidents?lim="+limit+"&start="+date+"&end="+(date+1), function(result) {
          data = result;

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
