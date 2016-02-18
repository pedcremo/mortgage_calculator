'use strict';

/**
 * @ngdoc function
 * @name provaApp.controller:MaincontrollerCtrl
 * @description
 * # MaincontrollerCtrl
 * Controller of the provaApp
 */
angular.module('provaApp')
  .controller('MaincontrollerCtrl',function($scope,localStorageService) {

    var mortgagesInStore = localStorageService.get('hipotecas');

    $scope.hipotecas = mortgagesInStore || [];
    //$scope.hipotecas = hipotecas;
  });
