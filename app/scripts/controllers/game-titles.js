'use strict';

/**
 * @ngdoc function
 * @name everythingGamingApp.controller:GameTitlesCtrl
 * @description
 * # GameTitlesCtrl
 * Controller of the everythingGamingApp
 */
angular.module('everythingGamingApp')
  .controller('GameTitlesCtrl', function ($scope, $http) {
    $http({
      method: 'GET',
      url: 'https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=*&filter[rating][gte]=98&order=rating:desc',
      headers: {'X-Mashape-Key': '81Ijzs42QnmshidOFbjlqROUbwx2p16G7L1jsn7IhaFqBrAuA8', 'Accept': 'application/json'}

    }).then(function (response){
      $scope.topGameTitles = response.data;

    }, function (response) {
      $scope.topGameTitles = response.statusText;

    });
  });
