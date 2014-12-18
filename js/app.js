  'use strict';
var appPortfolio = angular.module('appPortfolio', [
      'ngRoute',
      'projectApp'
  ]);

appPortfolio.config(function($routeProvider){
  $routeProvider
  .when('/home', 
    {
      controller: 'projectDataCtrl',
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
      controller: 'CafeController',
      templateUrl: 'partials/portfolio.html'
    })
  .when('/contact',
    {
      controller: 'CafeController',
      templateUrl: 'partials/contact.html'
    })
  .otherwise({ redirectTo: '/home' })

});
