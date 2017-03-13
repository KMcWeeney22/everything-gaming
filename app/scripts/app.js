'use strict';

/**
 * @ngdoc overview
 * @name everythingGamingApp
 * @description
 * # everythingGamingApp
 *
 * Main module of the application.
 */
angular
  .module('everythingGamingApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.
      'https://www.youtube.com/embed/**'
    ]);

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/game-titles', {
        templateUrl: 'views/game-titles.html',
        controller: 'GameTitlesCtrl',
        controllerAs: 'gameTitles'
      })
      .when('/upcoming', {
        templateUrl: 'views/upcoming.html',
        controller: 'UpcomingCtrl',
        controllerAs: 'upcoming'
      })
      .when('/recent', {
        templateUrl: 'views/recent.html',
        controller: 'RecentCtrl',
        controllerAs: 'recent'
      })
      .when('/gameInfo/:gameID', {
        templateUrl: 'views/gameinfo.html',
        controller: 'GameinfoCtrl',
        controllerAs: 'gameInfo'
      })
      .when('/videos', {
        templateUrl: 'views/videos.html',
        controller: 'VideosCtrl',
        controllerAs: 'videos'
      })
      .when('/gameInfoVideos', {
        templateUrl: 'views/gameinfovideos.html',
        controller: 'GameinfovideosCtrl',
        controllerAs: 'gameInfoVideos'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
