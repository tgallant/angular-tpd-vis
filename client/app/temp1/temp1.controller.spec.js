'use strict';

describe('Controller: Temp1Ctrl', function () {

  // load the controller's module
  beforeEach(module('angularTpdVisApp'));

  var Temp1Ctrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Temp1Ctrl = $controller('Temp1Ctrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
