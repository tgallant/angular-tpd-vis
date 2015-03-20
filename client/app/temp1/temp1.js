'use strict';

angular.module('angularTpdVisApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('temp1', {
        url: '/temp1',
        templateUrl: 'app/temp1/temp1.html',
        controller: 'Temp1Ctrl'
      });
  });
