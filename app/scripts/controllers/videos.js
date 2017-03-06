'use strict';

/**
 * @ngdoc function
 * @name everythingGamingApp.controller:VideosCtrl
 * @description
 * # VideosCtrl
 * Controller of the everythingGamingApp
 */
angular.module('everythingGamingApp')
  .controller('VideosCtrl', function ($scope, $http, $sce) {
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=video+games&order=relevance&relevanceLanguage=en&maxResults=30&key=AIzaSyAzJMM61zszeOyYDNllFt0jkXCZ_56PjNk',

    }).then(function(response){
      $scope.gameVideos = response.data;

    }, function(response){
      $scope.gameVideos = response.statusText;

    });
  });
