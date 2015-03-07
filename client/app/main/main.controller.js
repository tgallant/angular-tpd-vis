'use strict';

angular.module('angularTpdVisApp')
  .controller('MainCtrl', function ($scope, $http, socket, uiGmapGoogleMapApi) {

    uiGmapGoogleMapApi.then(function(maps) {
      $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
      console.log('works');
    }); 
  });
