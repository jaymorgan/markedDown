'use strict';

angular.module('markedDownApp')
  .provider('Message', function Message () {
    this.$get = ['$resource', function($resource) {
      var Message = $resource('/api/messages/:id', {}, {
        update: {
          method: 'PUT'
        }
      });
      return Message;
    }];
  });