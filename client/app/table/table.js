'use strict';

angular.module('angularTpdVisApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('table', {
        url: '/table',
        templateUrl: 'app/table/table.html',
        controller: 'TableCtrl'
      });
  });