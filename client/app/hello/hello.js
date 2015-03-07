'use strict';

angular.module('angularTpdVisApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('hello', {
        url: '/hello',
        templateUrl: 'app/hello/hello.html',
        controller: 'HelloCtrl'
      });
  });