'use strict';

// Declare app level module which depends on views, and components
angular.module('artstudio', [
  'ngRoute',
  'artstudio.main',
  'artstudio.contact',
  'artstudio.chedule',
  'artstudio.prices',
  'artstudio.instructors',
  'artstudio.gallery',
  'wu.masonry',
  'ngMap'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  // $locationProvider.hashPrefix('!');

  $routeProvider

  .when('/gallery', {
    templateUrl: 'gallery/gallery.html',
    controller: 'galleryCtrl'
  })

  .when('/instructors', {
      templateUrl: 'instructors/instructors.html',
      controller: 'instructorsCtrl'
  })

  .when('/contact', {
    templateUrl: 'contact/contact.html',
    controller: 'contactCtrl'
  })

  .when('/prices', {
    templateUrl: 'prices/prices.html',
    controller: 'pricesCtrl'
  })

  .when('/chedule', {
      templateUrl: 'chedule/chedule.html',
      controller: 'cheduleCtrl'
  })

  .when('/', {
    templateUrl: 'main/main.html',
    controller: 'mainCtrl'
  })

  .otherwise({redirectTo: '/'});

  // $locationProvider.html5Mode(false);
}]);
