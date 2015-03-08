'use strict';

angular.module('angularTpdVisApp')
<<<<<<< HEAD
.controller('HomeCtrl', function ($scope) {
=======
  .controller('HomeCtrl', function ($scope, $rootScope) {

    $rootScope.date = "";
>>>>>>> 037835be48775854447532f06d67b58527d1c884
    $scope.message = 'Hello';
});
