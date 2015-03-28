'use strict';

angular.module('angularTpdVisApp')
  .factory('incidents', function ($http, $q) {

    function getIncidents (limit, date) {
      var deferred = $q.defer();
      var newdate = moment(date).add(1, 'days').format();
      $http.get('/api/incidents?lim='+limit+'&start='+date+'&end='+newdate).success(function(result) {
        deferred.resolve(result);
      });
      return deferred.promise;
    }

    function minDate() {
      var deferred = $q.defer();
      $http.get('/api/mindate').success(function(result) {
        deferred.resolve(result);
      });
      return deferred.promise;
    }
      
    // Public API here
    return {
      getIncidents: getIncidents,
      minDate: minDate
    };
  });
