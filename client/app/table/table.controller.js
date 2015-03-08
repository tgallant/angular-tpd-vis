'use strict';
var myModule = angular.module('angularTpdVisApp');

myModule.controller('TableCtrl', ['$scope', '$location', '$filter', '$http', function ($scope, $location, $filter, $http) {

    $scope.queryVars = $location.search();

    //remove to the real data holder
    $scope.removeItem = function removeItem(row) {
    	var index = $scope.things.indexOf(row);
    	if (index !== -1) {
    		$scope.things.splice(index, 1);
    	}
    }
    $scope.tableHeaders = [	
    ['ADDRESS_PUBLIC', 'Public Address'], 
    ['DATE_REPT', 'Date Rported'], 
    ['HOUR_REPT', 'Hour Reported'], 
    ['DATE_OCCU', 'Date Occcured'], 
    ['HOUR_OCCU', 'Hour Occured'], 
    ['NatureCodeDesc', 'Code Description'], 
    ['CSDISPDESC', 'Description of Disp. Code'], 
    ['ACTDATE', 'Actual Date'], 
    ['ACTTIME', 'Actual Time'], 
    ['ADD_NS', 'North South Address'], 
    ['ADD_DIR_NS', 'N/S Address Number'], 
    ['ADD_EW', 'East West Address'], 
    ['ADD_DIR_EW', 'E/W Address Number'], 
    ['NHA_NAME', 'Neigborhood Name'], ];
    $scope.things = [];

    var settings = {
        start: "2015-01-26",
        end: "2015-01-27",
        lim: 30
    }
    if($scope.queryVars.key) {
        $http.get('/api/incidents/' + $scope.queryVars.key)
        .success(function(data, status, headers, config){
            console.log($scope.queryVars.key);
            $scope.things = data;
        })
        .error(function(data, status, headers, config){
           alert(status);
       });
    }
    else {

        $http.get('/api/incidents?start=' + settings.start + '&end=' + settings.end + '&lim=' +settings.lim)
        .success(function(data, status, headers, config){
         $scope.things = data;
     })
        .error(function(data, status, headers, config){
           alert(status);
       });
    }
}]);

