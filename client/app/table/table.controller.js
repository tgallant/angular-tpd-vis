'use strict';
var myModule = angular.module('angularTpdVisApp');

myModule.controller('TableCtrl', ['$scope', '$http', function ($scope, $http) {

    //remove to the real data holder
    $scope.removeItem = function removeItem(row) {
    	var index = $scope.things.indexOf(row);
    	if (index !== -1) {
    		$scope.things.splice(index, 1);
    	}
    }
    $scope.tableHeaders = [	['PRIMARYKEY', ' '], 
    ['INCI_ID', 'Incident ID'], 
    ['CALL_ID', 'Call ID'], 
    ['ADDRESS_PUBLIC', 'Public Address'], 
    ['DATE_REPT', 'Date Rported'], 
    ['HOUR_REPT', 'Hour Reported'], 
    ['DATE_OCCU', 'Date Occcured'], 
    ['HOUR_OCCU', 'Hour Occured'], 
    ['DATE_FND', 'Date Discovered'], 
    ['HOUR_FND', 'Hour Discoverd'], 
    ['NEIGHBORHD', 'Neigborhood'], 
    ['AGENCY', 'Agency'], 
    ['OFFENSE', 'Offense'], 
    ['STATUSDESC', 'Initial Description'], 
    ['CAPRIORITY', 'Call Priority'], 
    ['NATURECODE', 'Event Type Code'], 
    ['NATURECODEDESC', 'Code Description'], 
    ['HOWRECEIVE', 'Method of service'], 
    ['CSDISPOSIT', 'Disposition Code'], 
    ['CSDISPDESC', 'Description of Disp. Code'], 
    ['ACTDATE', 'Actual Date'], 
    ['ACTTIME', 'Actual Time'], 
    ['EMDIVISION', 'Officer\'s Divison'], 
    ['EMUNIT', 'Officer\'s Unit'], 
    ['X', 'X coordinate'], 
    ['Y', 'Y coordiante'], 
    ['ADDUSER', 'Add user'], 
    ['APPSTATE', ' '], 
    ['ADDTIME', ' '], 
    ['LOC_METHOD', 'Location Mehtod'], 
    ['ADD_NS', 'North South Address'], 
    ['ADD_DIR_NS', 'N/S Address Number'], 
    ['ADD_EW', 'East West Address'], 
    ['ADD_DIR_EW', 'E/W Address Number'], 
    ['NHA_NAME', 'Neigborhood Name'], ];
    $scope.things = [];

    $http.get('/api/incidents?limit=50')
    .success(function(data, status, headers, config){
    	$scope.things = data.data;

    	console.log($scope.things);
    })
    .error(function(data, status, headers, config){
    	alert(status);
    });

}]);

