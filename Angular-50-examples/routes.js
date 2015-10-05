var countryApp = angular.module('countryApp', ['ngRoute', 'countryController', 'countryFactory', 'countryDirective']);

countryApp.config(['$routeProvider', function (routeProvider) {
  routeProvider.
    when('/', {
      templateUrl: '/templates/country-list.html',
      controller: 'CountryListCtrl'
    }).
    when('/:countryId', {
      templateUrl: '/templates/country-detail.html',
      controller: 'CountryDetailCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);

countryApp.filter('encodeURI', function(){
  return window.encodeURI;
});