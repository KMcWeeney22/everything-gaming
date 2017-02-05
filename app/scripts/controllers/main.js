'use strict';

/**
 * @ngdoc function
 * @name everythingGamingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the everythingGamingApp
 */
angular.module('everythingGamingApp')
  .controller('MainCtrl', function ($scope, $http) {
      $http({
        method: 'GET',
        url: 'https://newsapi.org/v1/articles?source=polygon&sortBy=top&apiKey=3ec84363d71d430a9c7afaf3d85adbb8'
      }).then(function newsSuccess(response) {
        $scope.gameNews = response.data;
      }, function newsError (response) {
        $scope.gameNews = response.statusText;
      });
  });
