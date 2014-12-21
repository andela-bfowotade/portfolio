var loadScreenshotService = angular.module('loadScreenshotService', []);

loadScreenshotService.factory('screenShotFactory', ['$resource', function($resource) {
	var urlEndpoint = 'https://www.screenshot-website.com/api/ak_WCw7Or01MD0QGAPiRJAw?url=';
	return $resource(urlEndpoint);
}])