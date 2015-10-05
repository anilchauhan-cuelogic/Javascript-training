var countryController = angular.module('countryController', []);

countryController.controller('CountryListCtrl', function ($scope, countries){
  countries.list(function(data){
    $scope.countries = data;
  });
});

countryController.controller('CountryDetailCtrl', function ($scope, $routeParams, countries){
  countries.find($routeParams.countryId, function(country){
    $scope.country = country;
  });
});