'use strict';

angular.module('artstudio.gallery', ['ngRoute'])

.controller('galleryCtrl', ['$scope', function($scope) {
  $scope.photos = [
      'http://lorempixel.com/g/280/344/?4489', 'http://lorempixel.com/g/280/518/?1061', 'http://lorempixel.com/g/280/344/?4487',
      'http://lorempixel.com/g/280/157/?3894', 'http://lorempixel.com/g/280/518/?1062', 'http://lorempixel.com/g/280/157/?3894',
      'http://lorempixel.com/g/280/344/?4487', 'http://lorempixel.com/g/280/344/?4485', 'http://lorempixel.com/g/280/157/?3894',
      'http://lorempixel.com/g/280/518/?1061', 'http://lorempixel.com/g/280/157/?3894', 'http://lorempixel.com/g/280/518/?1062',
      'http://lorempixel.com/g/280/344/?4489', 'http://lorempixel.com/g/280/518/?1061', 'http://lorempixel.com/g/280/344/?4487',
      'http://lorempixel.com/g/280/157/?3894', 'http://lorempixel.com/g/280/518/?1062'
  ];
}]);