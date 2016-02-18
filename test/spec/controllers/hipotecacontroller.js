'use strict';

describe('Controller: HipotecacontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('provaApp'));

  var HipotecacontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HipotecacontrollerCtrl = $controller('HipotecacontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HipotecacontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
