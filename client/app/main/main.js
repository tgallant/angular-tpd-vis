'use strict';

angular.module('angularTpdVisApp')
  .config(function ($stateProvider, uiGmapGoogleMapApiProvider) {
  	uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyCFT_EeToQJZ2ZazF5RjkoJIzhL_QRQhqU',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });