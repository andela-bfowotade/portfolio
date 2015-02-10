'use strict';

var AppFilter = angular.module('AppFilter', []);


AppFilter.filter('pagination', function()
{
  return function(input, start) {
    start = parseInt(start, 10);
    return input.slice(start);
  };
});
