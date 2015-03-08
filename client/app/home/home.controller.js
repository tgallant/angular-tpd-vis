'use strict';

angular.module('angularTpdVisApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.message = 'Hello';
    $scope.awesomeThings = [
    {
    name: 'Source', 
    link:'http://data.tucsonaz.gov',
    info:'A big thanks to the City of Tucson.'
    },
    {
    name: 'D3',
    link: 'http://d3js.org',
    },
    ];
  });
