'use strict';

/**
 * @ngdoc service
 * @name MortgageApp.hipotecaResource
 * @description
 * # hipotecaResource
 * Provider in the MortgageApp.
 */

function HipotecaResource($http,$q,baseUrl,localStorageService) {

    /*this.list=function() {
      	var defered=$q.defer();
      	var promise=defered.promise;

            $http({
                method: 'GET',
                url: 'datosHipotecas.json'
            }).success(function(data, status, headers, config) {
      	       defered.resolve(data);
            }).error(function(data, status, headers, config) {
      	          if (status === 400) {
                      defered.reject(data);
                  } else {
                      throw new Error("Fallo obtener los datos:" + status + "\n" + data);
                  }
            });
      	return promise;
    };*/

    this.edit=function(idHipoteca) {

      var hipotecas = localStorageService.get('hipotecas') || [];
      return hipotecas[idHipoteca];
    };
  }


angular.module('MortgageApp')
    .provider('hipotecaResource', function () {

      // Private variables
      var _baseUrl;

      // Public API for configuration
      this.setBaseUrl = function(baseUrl) {
      _baseUrl = baseUrl;
      };

      // Method for instantiating
      this.$get=['$http','$q','localStorageService',function($http,$q,localStorageService) {
        return new HipotecaResource($http,$q,_baseUrl,localStorageService);
      }];
    });
