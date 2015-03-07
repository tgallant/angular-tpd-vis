'use strict';

angular.module('angularTpdVisApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
<<<<<<< HEAD
  'smart-table'
=======
  'uiGmapgoogle-maps'
>>>>>>> a6b462ae91be6e48bf47bab100cec90052bdf0c2
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyCFT_EeToQJZ2ZazF5RjkoJIzhL_QRQhqU',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });

    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });