'use strict';

angular.module('markedDownApp')
  .controller('FeedCtrl', ['$scope', 'socket', 'Messages', function ($scope, socket, Messages) {

    $scope.msgs = [];

    Messages.query().$promise.then(function (result) {
      $scope.msgs = result;
      socket.syncUpdates('message', $scope.msgs);
    });

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('message');
    });

  }]);
