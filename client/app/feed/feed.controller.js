'use strict';

angular.module('markedDownApp')
  .controller('FeedCtrl', function ($scope, Message) {
    $scope.messages = [];
    Message.query().$promise.then(function (result) {
      $scope.messages = result;
    });
  });
