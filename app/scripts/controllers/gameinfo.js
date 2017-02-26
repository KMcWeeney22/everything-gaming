'use strict';

/**
 * @ngdoc function
 * @name everythingGamingApp.controller:GameinfoCtrl
 * @description
 * # GameinfoCtrl
 * Controller of the everythingGamingApp
 */
angular.module('everythingGamingApp')
  .controller('GameinfoCtrl', function ($scope, $routeParams, gameInfo) {
  //  $http({
  //    method: 'GET',
  //    url: 'https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=*&filter[cover][exists]',
  //    params: {
  //      search: 'overwatch'
  //    },
  //    headers: {'X-Mashape-Key': '81Ijzs42QnmshidOFbjlqROUbwx2p16G7L1jsn7IhaFqBrAuA8', 'Accept': 'application/json'}
  //
  //  }).then(function (response){
  //    $scope.gameName = response.data;
  //
  //  }, function (response) {
  //    $scope.gameName = response.statusText;
  //  });
  $scope.gameID = $routeParams.gameID;

    $scope.currentGame = gameInfo.query({
        gameID: $routeParams.gameID
    });


  });
