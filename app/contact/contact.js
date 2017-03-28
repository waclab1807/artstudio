'use strict';

angular.module('artstudio.contact', ['ngRoute'])

.controller('contactCtrl', ['NgMap', function(NgMap) {
	NgMap.getMap().then(function(map) {
		console.log(map.getCenter());
		console.log('markers', map.markers);
		console.log('shapes', map.shapes);
	});
}]);