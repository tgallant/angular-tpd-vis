'use strict';

angular.module('angularTpdVisApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'uiGmapgoogle-maps'
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