'use strict';

describe('Controller: FeedCtrl', function () {

  // load the controller's module
  beforeEach(module('markedDownApp'));

  var FeedCtrl, scope, socket, Messages;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FeedCtrl = $controller('FeedCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
