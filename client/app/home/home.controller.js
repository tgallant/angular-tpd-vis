'use strict';

angular.module('angularTpdVisApp')
  .controller('HomeCtrl', function ($scope, $rootScope) {

    $rootScope.date = "";
    $scope.message = 'Hello';
});
