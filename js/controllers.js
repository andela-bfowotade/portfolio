	'use strict';

var projectApp = angular.module('projectApp', []);

//project data controller to display projects on homepage
projectApp.controller('ProjectDataCtrl', ['$scope', '$http', 
	function($scope, $http) {

		$http.get('partials/projectdetails/projectdetails.json').success(function(data) {
			$scope.projects = data;

			//--Pagination
			$scope.itemsPerPage = 3;
			$scope.currentPage = 0;

		  $scope.range = function() {
		    var rangeSize = 4;
		    var ps = [];
		    var start;

		    start = $scope.currentPage;
		    if(start > $scope.pageCount()-rangeSize) {
		      start = $scope.pageCount()-rangeSize+1;
		    }

		    for(var i=start; i<start+rangeSize; i++) {
		    	if(i>=0) {
			      ps.push(i);
			    }
		    }
		    return ps;
	 	 };

		  $scope.prevPage = function() {
		    if ($scope.currentPage > 0) {
		      $scope.currentPage--;
		    }
		  };

		  $scope.DisablePrevPage = function() {
		    return $scope.currentPage === 0 ? "disabled" : "";
		  };

		  $scope.pageCount = function() {
		    return Math.ceil($scope.projects.length/$scope.itemsPerPage)-1;
		  };

		  $scope.nextPage = function() {
		    if($scope.currentPage < $scope.pageCount()) {
		      $scope.currentPage++;
		    }
		  };

		  $scope.DisableNextPage = function() {
		    return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
		  };

		  $scope.setPage = function(n) {
		    $scope.currentPage = n;
		  };
	       //--End pagination  
			
		});
	//--End http request


}]);

	//controller to display current p roject in detail
projectApp.controller('ProjectDetailCtrl', ['$scope', '$routeParams',  '$http', 'RepoFactory',
	function($scope, $routeParams, $http, RepoFactory) {
		var url = 'partials/projectdetails/' + $routeParams.project_id + '.json';
		$http.get(url).success(function(data) {
		$scope.project = data;

		//get github data for the specific repo
			$scope.gitData = [];
			$scope.repoName = $routeParams.project_id;
			RepoFactory.searchRepos($scope.repoName, function(data) {
				$scope.gitData = data;
			});

		});

}]);
