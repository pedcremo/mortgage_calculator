'use strict';

/**
 * @ngdoc function
 * @name MortgageApp.controller:MaincontrollerCtrl
 * @description
 * # MaincontrollerCtrl
 * Controller of the MortgageApp
 */
angular.module('MortgageApp')
  .controller('MaincontrollerCtrl',function($scope,localStorageService) {

    var mortgagesInStore = localStorageService.get('hipotecas');

    $scope.hipotecas = mortgagesInStore || [];
    //$scope.hipotecas = hipotecas;
  });
