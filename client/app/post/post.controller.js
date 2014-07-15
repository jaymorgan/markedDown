'use strict';

angular.module('markedDownApp')
  .controller('PostCtrl', function ($scope, Messages, Auth) {
    var d = new Date();
    var uid = Auth.getCurrentUser()._id;

    $scope.post = {
      postDate: d.getTime(),
      modifiedDate: d.getTime(),
      version: 1,
      author: uid,
      active: true
    };

    $scope.save = function(data) {
    	Messages.save(data, function() {
        console.log('saved');
    	});
    };

  });
