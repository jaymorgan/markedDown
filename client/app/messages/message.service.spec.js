'use strict';

describe('Service: msgs', function () {

  // load the service's module
  beforeEach(module('markedDownApp'));

  // instantiate service
  var messages;
  beforeEach(inject(function (_messages_) {
    messages = _messages_;
  }));

  it('should do something', function () {
    expect(!!messages).toBe(true);
  });

});