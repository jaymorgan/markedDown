'use strict';

describe('Directive: avatarDot', function () {

  // load the directive's module and view
  beforeEach(module('markedDownApp'));
  beforeEach(module('components/avatarDot/avatarDot.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<avatar-dot></avatar-dot>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the avatarDot directive');
  }));
});