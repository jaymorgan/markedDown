'use strict';

angular.module('markedDownApp')
  .directive('markdown', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function (scope, element, attrs) {
        element.text('this is the markdown directive');
      }
    };
  });