'use strict';

angular.module('markedDownApp')
  .provider('Messages', function Message () {
    this.$get = ['$resource', function($resource) {
      var Messages = $resource('/api/messages/:id', {}, {
        update: {
          method: 'PUT'
        }
      });
      return Messages;
    }];
  });