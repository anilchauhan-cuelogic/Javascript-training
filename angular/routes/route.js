'use strict';

angular.module('angularApp', [
  'ngRoute',
  'moduleControllers'
])
  .config(['$routeProvider',
    function ($routeProvider) {
      $routeProvider
        .when('/aboutus', {
          templateUrl: 'views/about-us.html',
          controller: 'AboutUsCtrl'
        })
        .when('/careers', {
          templateUrl: 'views/careers.html',
          controller: 'CareersCtrl'
        })
        .when('/clients', {
          templateUrl: 'views/clients.html',
          controller: 'ClientsCtrl'
        })
        .when('/tac', {
          templateUrl: 'views/terms-and-conditions.html',
          controller: 'TacCtrl'
        });
    }]);