'use strict';

angular.module('moduleControllers', [])

  .controller('AboutUsCtrl', ['$scope', function ($scope) {
    $scope.currentPage = 'aboutus';
  }])
  .controller('CareersCtrl', ['$scope', function ($scope) {
    $scope.currentPage = 'careers';
  }])
  .controller('ClientsCtrl', ['$scope', function ($scope) {
    $scope.currentPage = 'clients';
  }])
  .controller('TacCtrl', ['$scope', function ($scope) {
    $scope.currentPage = 'Terms and Conditions';
  }]);
