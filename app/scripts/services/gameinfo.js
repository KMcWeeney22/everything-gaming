'use strict';

/**
 * @ngdoc service
 * @name everythingGamingApp.gameInfo
 * @description
 * # gameInfo
 * Factory in the everythingGamingApp.
 */
angular.module('everythingGamingApp')
  .factory('gameInfo', function ($resource) {

    // Internet Game Database API call for retreiving data about specific games
    return $resource('https://igdbcom-internet-game-database-v1.p.mashape.com/games/:gameID?fields=*&filter[cover][exists]', {}, {
      query: {
        method: 'GET',
        params: {
          gameID: '8173' //default game name id for "Overwatch"
        },
        isArray: true,
        headers: { 'X-Mashape-Key': '81Ijzs42QnmshidOFbjlqROUbwx2p16G7L1jsn7IhaFqBrAuA8', 'Accept': 'application/json'}
      }
    });
  });
