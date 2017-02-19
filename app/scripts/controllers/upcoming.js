'use strict';

/**
 * @ngdoc function
 * @name everythingGamingApp.controller:UpcomingCtrl
 * @description
 * # UpcomingCtrl
 * Controller of the everythingGamingApp
 */
angular.module('everythingGamingApp')
  .controller('UpcomingCtrl', function ($scope, $http) {
    $http({
      method: 'GET',
      url: 'https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=*&filter[first_release_date][gt]=1487211003000&filter[cover][exists]&order=first_release_date:asc',
      headers: {'X-Mashape-Key': '81Ijzs42QnmshidOFbjlqROUbwx2p16G7L1jsn7IhaFqBrAuA8', 'Accept': 'application/json'}

    }).then(function(response){
      $scope.upcomingGames = response.data;

    }, function(response){
      $scope.upcomingGames = response.statusText;

    });
  });
