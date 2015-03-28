'use strict';
var myModule = angular.module('angularTpdVisApp');

myModule.controller('TableCtrl', ['$scope', '$location', '$rootScope', '$filter', '$http', function ($scope, $location, $rootScope, $filter, $http) {

    $rootScope.date = "";
    $scope.queryVars = $location.search();

    //remove to the real data holder
    $scope.removeItem = function removeItem(row) {
    	var index = $scope.things.indexOf(row);
    	if (index !== -1) {
    		$scope.things.splice(index, 1);
    	}
    }
    $scope.tableHeaders = [	
    ['address', 'Public Address'], 
    ['date_reported', 'Date Rported'], 
    ['hour_reported', 'Hour Reported'], 
    ['date_occurred', 'Date Occcured'], 
    ['hour_occurred', 'Hour Occured'], 
    ['event_type_description', 'Code Description'], 
    ['service_call_description', 'Description of Disp. Code'], 
    ['ACTDATE_unknown', 'Actual Date'], 
    ['ACTTIME_unknown', 'Actual Time'], 
    ['address_NS_num', 'North South Address'], 
    ['address_NS_dir', 'N/S Address Number'], 
    ['address_EW_num', 'East West Address'], 
    ['address_EW_dir', 'E/W Address Number'], 
    ['neighborhood_name', 'Neigborhood Name'], ];
    $scope.things = [];

    var settings = {
        start: "2015-01-26",
        end: "2015-01-27",
        lim: 2000
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

