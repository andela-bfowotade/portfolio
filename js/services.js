var RepoFeed = angular.module('RepoFeed', []);

RepoFeed.factory('RepoFactory', ['$http', function($http) {

  return{

    searchRepos: function(repoName, callback) {
      return  $http.get('https://api.github.com/repos/andela-bfowotade/'+ repoName)
        .success(function (data) {
          callback(data);
        })
        .error(function (e) {
          callback(e);
        });
    }
  }

}]);

