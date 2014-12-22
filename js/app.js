  'use strict';
var appPortfolio = angular.module('appPortfolio', [
      'ngRoute',
      'projectApp',
      'AppFilter',
      'RepoFeed'
  ]);

appPortfolio.config(function($routeProvider){
  $routeProvider
  .when('/home', 
    {
      controller: 'ProjectDataCtrl',
      templateUrl: 'partials/home.html'
    })
  .when('/about',
    {
      controller: 'CafeController',
      templateUrl: 'partials/about.html'
    })
  .when('/services', 
    {
      controller: 'CafeController',
      templateUrl: 'partials/services.html'
    })
  .when('/portfolio',
    {
      controller: 'ProjectDataCtrl',
      templateUrl: 'partials/portfolio.html'
    })
  .when('/contact',
    {
      controller: 'CafeController',
      templateUrl: 'partials/contact.html'
    })
  .when('/pt-detail/:project_id',
    {
      controller: 'ProjectDetailCtrl',
      templateUrl: 'partials/portfolio-item.html'
    })
  .otherwise({ redirectTo: '/home' })

});
