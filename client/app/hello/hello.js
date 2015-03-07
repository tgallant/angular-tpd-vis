'use strict';

angular.module('angularTpdVisApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('hello', {
        url: '/hello',
        templateUrl: 'app/hello/hello.html',
        controller: 'HelloCtrl',
/*        resolve: {
          data: function($q) {
            (function() {
            var deferred = $q.defer();
            d3.csv("tpd_100blk_incid.csv", function(error, data) {
              if(error) { alert(error); return; }

              csv = [];
              for(var i = 0; i < 10; i++) {
                csv.push(data[i]);
              }
              deferred.resolve(csv);
            });
            return deferred.promise;
            })().then(function(csv) { return csv; }, 
                      function(err) { ;
                      */
      });
  });
