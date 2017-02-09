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
        url: 'https://igdbcom-internet-game-database-v1.p.mashape.com/pulses/?limit=50&fields=*',
        headers: {'X-Mashape-Key': '81Ijzs42QnmshidOFbjlqROUbwx2p16G7L1jsn7IhaFqBrAuA8', 'Accept': 'application/json'}
      }).then(function newsSuccess(response) {
        $scope.gameNews = response.data;

      }, function newsError (response) {
        $scope.gameNews = response.statusText;
      });
  });
