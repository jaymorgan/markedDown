'use strict';

angular.module('markedDownApp')
  .controller('FeedCtrl', function ($scope, socket, Messages) {

    $scope.messages = [];

    Messages.query().$promise.then(function (result) {
      $scope.messages = result;
      socket.syncUpdates('message', $scope.messages);
    });

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('message');
    });

  });
