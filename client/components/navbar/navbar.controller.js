'use strict';

angular.module('markedDownApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [
      {
        'title': 'Home',
        'link': '/',
        'loggedIn': false
      },
      {
        'title': 'Feed',
        'link': '/feed',
        'loggedIn': false
      },
      {
        'title': 'New Post',
        'link': '/post',
        'loggedIn': true
      }
    ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function () {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function (route) {
      return route === $location.path();
    };

    $scope.needAuth = function(authNeeded) {
      if(authNeeded){
        return $scope.isLoggedIn();
      } else {
        return true;
      }
    };

  });