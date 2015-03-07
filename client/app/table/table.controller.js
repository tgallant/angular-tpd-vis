'use strict';
var myModule = angular.module('angularTpdVisApp');

myModule.controller('TableCtrl', ['$scope', '$http', function ($scope, $http) {

	$scope.tableHeader = [
		'PRIMARYKEY',
		'INCI_ID',
		'CALL_ID',
		'ADDRESS_PUBLIC',
		'DATE_REPT',
		'HOUR_REPT',
		'DATE_OCCU',
		'HOUR_OCCU',
		'DATE_FND',
		'HOUR_FND',
		'NEIGHBORHD',
		'AGENCY',
		'OFFENSE',
		'STATUSDESC',
		'CAPRIORITY',
		'NATURECODE',
		'NATURECODEDESC',
		'HOWRECEIVE',
		'CSDISPOSIT',
		'CSDISPDESC',
		'ACTDATE',
		'ACTTIME',
		'EMDIVISION',
		'EMUNIT',
		'X',
		'Y',
		'ADDUSER',
		'APPSTATE',
		'ADDTIME',
		'LOC_METHOD',
		'ADD_NS',
		'ADD_DIR_NS',
		'ADD_EW',
		'ADD_DIR_EW',
		'NHA_NAME',
	];
	$scope.things = [];

	$http.get('/api/incidents')
	.success(function(data, status, headers, config){
		$scope.things = data.data;
		console.log($scope.things);
	})
	.error(function(data, status, headers, config){
		alert(status);
	});

}]);
