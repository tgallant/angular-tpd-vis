'use strict';

angular.module('angularTpdVisApp')
.controller('MainCtrl', function ($scope, $http, socket, uiGmapGoogleMapApi) {

  $scope.map = { center: { latitude: 32.2136761, longitude: -110.8237743 }, zoom: 12 };

  $scope.mapStyles = [
  {
    stylers: [
    { hue: "#00ffe6" },
    { saturation: -20 }
    ]
  },{
    featureType: "road",
    elementType: "geometry",
    stylers: [
    { lightness: 100 },
    { visibility: "simplified" }
    ]
  },{
    featureType: "road",
    elementType: "labels",
    stylers: [
    { visibility: "off" }
    ]
  }
  ];

  uiGmapGoogleMapApi.then(function(maps) {
    console.log('works');
  }); 
});