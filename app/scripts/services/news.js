'use strict';

/**
 * @ngdoc service
 * @name everythingGamingApp.news
 * @description
 * # news
 * Factory in the everythingGamingApp.
 */
 angular.module('everythingGamingApp')
   .factory('news', function ($resource) {
     // Service logic
     // ...

     // Public API here
     return $resource('https://newsapi.org/v1/articles?source=polygon&sortBy=top&apiKey=3ec84363d71d430a9c7afaf3d85adbb8', {}, {
       articles: {
         method:'GET',
         isArray:false
       }
     });
   });
