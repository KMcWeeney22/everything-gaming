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
  .config(function ($routeProvider) {
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
      .otherwise({
        redirectTo: '/'
      });
  });
