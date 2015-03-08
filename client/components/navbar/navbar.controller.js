'use strict';

angular.module('angularTpdVisApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
    {
      'title': 'Home',
      'link': '/home'
    },
    {
      'title': 'Table',
      'link': '/table'
    },
    {
      'title': 'Time Lapse',
      'link': '/'
    },
    {
      'title': 'Traffic',
      'link': '/temp1'
    }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
