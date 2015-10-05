angular.module('countryFactory', [])
	.factory('countries', function ($http) {
        function getData(callback) {
          $http({
            method: 'GET',
            url: 'countries.json',
            cache: true
          }).success(callback);
        }

        function findDetails(id, callback) {
  	      $http({
  	       	method: 'GET',
  	       	url: 'country_'+id+'.json',
  	       	cache: true
  	       }).success(callback);
        }

        return {
          list: getData,
          find: findDetails
    	};
	});