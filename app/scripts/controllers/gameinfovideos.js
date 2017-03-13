'use strict';

/**
 * @ngdoc function
 * @name everythingGamingApp.controller:GameinfovideosCtrl
 * @description
 * # GameinfovideosCtrl
 * Controller of the everythingGamingApp
 */
angular.module('everythingGamingApp')
  .controller('GameinfovideosCtrl', function ($scope, gameInfoVideos, $routeParams) {

    $scope.gameID = $routeParams.gameID;

      $scope.currentGameVideos = gameInfo.query({
          gameID: $routeParams.gameID
      });

    $scope.getIframeSrc = function (videoId) {
      return 'https://www.youtube.com/embed/' + videoId;
    };

  });
