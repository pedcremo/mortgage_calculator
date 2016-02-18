'use strict';

describe('Service: hipotecaResource', function () {

  // instantiate service
  var hipotecaResource,
    init = function () {
      inject(function (_hipotecaResource_) {
        hipotecaResource = _hipotecaResource_;
      });
    };

  // load the service's module
  beforeEach(module('MortgageApp'));

  it('should do something', function () {
    init();

    //expect(!!hipotecaResource).toBe(true);
  });

  it('should be configurable', function () {
    /*module(function (hipotecaResourceProvider) {
      hipotecaResourceProvider.setSalutation('Lorem ipsum');
    });*/

    init();

    //expect(hipotecaResource.greet()).toEqual('Lorem ipsum');
  });

});
