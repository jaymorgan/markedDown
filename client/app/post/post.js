'use strict';

angular.module('markedDownApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('post', {
        url: '/post',
        templateUrl: 'app/post/post.html',
        controller: 'PostCtrl',
        authenticate: true
      });
  });