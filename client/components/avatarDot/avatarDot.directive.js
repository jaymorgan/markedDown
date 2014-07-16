'use strict';

angular.module('markedDownApp')
  .directive('avatarDot', function () {
    return {
      templateUrl: 'components/avatarDot/avatarDot.html',
      restrict: 'E',
      replace: true,
      link: function (scope, element, attrs) {
        console.log('craps: ' + scope.message.author.name.charAt(0));
        element.text(scope.message.author.name.charAt(0));
      }
    };
  });