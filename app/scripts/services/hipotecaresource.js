'use strict';

/**
 * @ngdoc service
 * @name provaApp.hipotecaResource
 * @description
 * # hipotecaResource
 * Provider in the provaApp.
 */
angular.module('provaApp')
  .provider('hipotecaResource', function () {

    // Private variables
    var _baseUrl;

    // Private constructor
    function Greeter() {
      this.greet = function () {
        return salutation;
      };
    }

    // Public API for configuration
    this.setBaseUrl = function(baseUrl) {
    _baseUrl = baseUrl;
    };

    // Method for instantiating
    this.$get=['$http','$q','localStorageService',function($http,$q,localStorageService) {
      return new HipotecaResource($http,$q,_baseUrl,localStorageService);
    }];
  });

function HipotecaResource($http,$q,baseUrl,localStorageService) {

    this.list=function() {
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
    };

    this.edit=function(idHipoteca) {

      var hipotecas = localStorageService.get('hipotecas') || [];
      return hipotecas[idHipoteca];
          /*var defered=$q.defer();
  	      var promise=defered.promise;

          $http({
            method: 'GET',
            url: "datosHipoteca"+idHipoteca+".json"
          }).success(function(data, status, headers, config) {
  	         defered.resolve(data);
          }).error(function(data, status, headers, config) {
  	          if (status === 400) {
                  defered.reject(data);
              } else {
                  throw new Error("Fallo obtener los datos:" + status + "\n" + data);
              }
          });

  	      return promise;*/
    };
  }
