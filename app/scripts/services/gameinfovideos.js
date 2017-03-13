'use strict';

/**
 * @ngdoc service
 * @name everythingGamingApp.gameInfoVideos
 * @description
 * # gameInfoVideos
 * Factory in the everythingGamingApp.
 */
angular.module('everythingGamingApp')
  .factory('gameInfoVideos', function ($resource) {

    // Public API here
    // YouTube API call for retreiving videos about specific games
    return $resource('https://www.googleapis.com/youtube/v3/search?part=snippet&q=:gameID&maxResults=6&key=AIzaSyAzJMM61zszeOyYDNllFt0jkXCZ_56PjNk', {}, {
      q: {
        method: 'GET',
        params: {
          gameID: 'overwatch' //default game name id for "Overwatch"
        },
        isArray: true,
      }
    });
  });
