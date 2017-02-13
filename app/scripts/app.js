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
      .otherwise({
        redirectTo: '/'
      });
  });
