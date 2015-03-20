'use strict';

angular.module('angularTpdVisApp')
 /* .config(function(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
                //    key: 'your api key',
                        v: '3.17',
                libraries: 'weather,geometry,visualization'
                                    });
                                    })*/
  .controller('HelloCtrl', function ($scope, $http) {
    $http.get("/api/incidents").success(function(data) {
      $scope.data = data.data;
      $scope.keys = Object.keys(data.data[0]);
    });
});
