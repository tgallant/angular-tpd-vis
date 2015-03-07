'use strict';

describe('Controller: HelloCtrl', function () {

  // load the controller's module
  beforeEach(module('angularTpdVisApp'));

  var HelloCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HelloCtrl = $controller('HelloCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
