	'use strict';
var projectApp= angular.module('projectApp', []);

projectApp.controller('projectDataCtrl', ['$scope', '$http', function($scope, $http) {

	$http.get('js/projectdetails.json').success(function(data) {
		$scope.projects = data;
	});

}]);