'use strict';

/**
 * @ngdoc function
 * @name MortgageApp.controller:HipotecacontrollerCtrl
 * @description
 * # HipotecacontrollerCtrl
 * Controller of the MortgageApp
 */
angular.module('MortgageApp')
  .controller('HipotecacontrollerCtrl', ['$scope','hipotecaJsonServer','hipotecaResource','localStorageService','$window', function($scope, hipotecaJsonServer, hipotecaResource,localStorageService,$window) {

    if ( !hipotecaJsonServer ){
        $scope.hipoteca={
          nif:'',
          nombre:'',
          ape1:'',
          ape2:'',
          edad:undefined,
          telefono:'',
          email:'',

          dadesEconomiques:{
              ingresosMensuals:undefined,
              capital:undefined,
              tipusInteres:'variable',
              euribor:undefined,
              diferencial:undefined,
              interesFixe:undefined,
              terminiAnys:undefined,
              producteSegurCasa:false,
              producteNomina:false,
              producteSegurVida:false
          },

          quotaMensual:undefined,
          interesAplicat:undefined,
          totalInteresos:undefined
        };
  }else{
    $scope.hipoteca=hipotecaJsonServer;
  }

  $scope.calcularHipoteca=function(){
   var interesAplicat_=parseFloat($scope.hipoteca.dadesEconomiques.euribor)+parseFloat($scope.hipoteca.dadesEconomiques.diferencial);

   if ($scope.hipoteca.dadesEconomiques.tipusInteres==='fixed'){
       interesAplicat_=parseFloat($scope.hipoteca.dadesEconomiques.interesFixe);
   }
   if ($scope.hipoteca.dadesEconomiques.producteNomina) {interesAplicat_-=0.05;}
   if ($scope.hipoteca.dadesEconomiques.producteSegurCasa){interesAplicat_-=0.05;}
   if ($scope.hipoteca.dadesEconomiques.producteSegurVida) {interesAplicat_-=0.05;}

   $scope.hipoteca.interesAplicat=interesAplicat_.toLocaleString()+' %';

   var quota=(($scope.hipoteca.dadesEconomiques.capital*interesAplicat_)/12) / (100*(1-Math.pow(1+((interesAplicat_/12)/100),(-1)*$scope.hipoteca.dadesEconomiques.terminiAnys*12)));
   $scope.hipoteca.quotaMensual=quota.toLocaleString()+' €';
   $scope.hipoteca.totalInteresos=((quota*12*$scope.hipoteca.dadesEconomiques.terminiAnys)-$scope.hipoteca.dadesEconomiques.capital).toLocaleString()+' €';
  };

  $scope.resetValues=function(){
      $scope.hipoteca.dadesEconomiques.interesFixe=undefined;
      $scope.hipoteca.dadesEconomiques.euribor=undefined;
      $scope.hipoteca.dadesEconomiques.diferencial=undefined;
  };

  $scope.saveMortgage=function(){
        localStorageService.set('hipotecas', $scope.hipotecas);
  };

  $scope.canvi=function(){
       $scope.hipoteca.nif=Math.random();
  };

  $scope.submitAndSaveHipoteca=function(){

     if(! $scope.mortgageForm.$valid){
         angular.forEach($scope.mortgageForm.$error.required, function(field) {
           field.$setDirty();
         });
         return false;
     }else{
       $scope.json = angular.toJson($scope.hipoteca);
       $scope.hipotecas = localStorageService.get('hipotecas') || [];

       if ($scope.hipoteca.idHipoteca===null || $scope.hipoteca.idHipoteca===undefined){ //Si es hipoteca nova
         $scope.hipoteca.idHipoteca=$scope.hipotecas.length;
         $scope.hipotecas.push($scope.hipoteca);
       }else{ //Si estem editant una vella
         $scope.hipotecas[$scope.hipoteca.idHipoteca]=$scope.hipoteca;
       }
       $scope.saveMortgage();
       $window.location.href ='/';

       return true;
     }
  };

  $scope.$watchCollection(
                    'hipoteca.dadesEconomiques',
                    //function( newValue, oldValue ) {
                    function(){
                        if ($scope.hipoteca.dadesEconomiques.capital >0 && $scope.hipoteca.dadesEconomiques.terminiAnys>0 &&  (($scope.hipoteca.dadesEconomiques.euribor>0 && $scope.hipoteca.dadesEconomiques.diferencial>0) || $scope.hipoteca.dadesEconomiques.interesFixe>0) ){
                          $scope.calcularHipoteca();
                        }else{
                          $scope.hipoteca.quotaMensual=undefined;
                          $scope.hipoteca.interesAplicat=undefined;
                          $scope.hipoteca.totalInteresos=undefined;
                        }

                    }
                );
}]);
