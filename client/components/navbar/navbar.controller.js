'use strict';

angular.module('angularTpdVisApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
    {
      'title': 'Home',
      'link': '/home'
    },
    {
      'title': 'Map',
      'link': '/'
    },
    {
      'title': 'Table',
      'link': '/table'
    }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });