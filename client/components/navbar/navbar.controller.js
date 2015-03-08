'use strict';

angular.module('angularTpdVisApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
    {
      'title': 'Home',
      'link': '/'
    },
    {
      'title': 'Time Lapse',
      'link': '/main'
    },
    {
      'title': 'Traffic Citations',
      'link': '/temp1'
    },
    {
      'title': 'Table',
      'link': '/table'
    },
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
