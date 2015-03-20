'use strict';

describe('Service: incidents', function () {

  // load the service's module
  beforeEach(module('angularTpdVisApp'));

  // instantiate service
  var incidents;
  beforeEach(inject(function (_incidents_) {
    incidents = _incidents_;
  }));

  it('should do something', function () {
    expect(!!incidents).toBe(true);
  });

});
