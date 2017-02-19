'use strict';

/**
 * @ngdoc function
 * @name everythingGamingApp.controller:RecentCtrl
 * @description
 * # RecentCtrl
 * Controller of the everythingGamingApp
 */
angular.module('everythingGamingApp')
  .controller('RecentCtrl', function ($scope, $http) {
    $http({
      method: 'GET',
      url: 'https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=*&filter[first_release_date][lt]=1487211003000&filter[cover][exists]&order=first_release_date:desc',
      headers: {'X-Mashape-Key': '81Ijzs42QnmshidOFbjlqROUbwx2p16G7L1jsn7IhaFqBrAuA8', 'Accept': 'application/json'}

    }).then(function(response){
      $scope.recentGames = response.data;

    }, function(response){
      $scope.recentGames = response.statusText;

    });
  });
