'use strict';

/**
 * @ngdoc overview
 * @name MortgageApp
 * @description
 * # MortgageApp
 *
 * Main module of the application.
 */
angular
  .module('MortgageApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
  .config(['$locationProvider', function($locationProvider) {
      $locationProvider.hashPrefix('');
  }])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('mortgage');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/todos', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/', {
        templateUrl: 'views/maincontroller.html',
        controller: 'MaincontrollerCtrl',
        controllerAs: 'MainController'
        /*resolve: {
          hipotecas:['hipotecaResource','$route',function(hipotecaResource) {
            return hipotecaResource.list();
          }]
        }*/
      })
      .when('/hipoteca/nova', {
        templateUrl: 'views/hipotecacontroller.html',
        controller: 'HipotecacontrollerCtrl',
        controllerAs: 'HipotecaController',
        resolve: {
                hipotecaJsonServer: function() {
                        return undefined;
                    }
        }
       })
       .when('/hipoteca/edit/:idHipoteca', {
          templateUrl: 'views/hipotecacontroller.html',
          controller: 'HipotecacontrollerCtrl',
          controllerAs: 'HipotecaController',
          resolve: {
              hipotecaJsonServer: ['hipotecaResource', '$route', function(hipotecaResource, $route) {
                      return hipotecaResource.edit($route.current.params.idHipoteca);
                  }]
          }
        })
      .otherwise({
        redirectTo: '/'
      });
  });
