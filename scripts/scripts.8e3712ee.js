"use strict";angular.module("everythingGamingApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("everythingGamingApp").controller("MainCtrl",["$scope","$http",function(a,b){b({method:"GET",url:"https://igdbcom-internet-game-database-v1.p.mashape.com/pulses/?limit=50&fields=*",headers:{"X-Mashape-Key":"81Ijzs42QnmshidOFbjlqROUbwx2p16G7L1jsn7IhaFqBrAuA8",Accept:"application/json"}}).then(function(b){a.gameNews=b.data},function(b){a.gameNews=b.statusText})}]),angular.module("everythingGamingApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("everythingGamingApp").factory("news",["$resource",function(a){return a("https://newsapi.org/v1/articles?source=polygon&sortBy=top&apiKey=3ec84363d71d430a9c7afaf3d85adbb8",{},{get:{method:"GET",isArray:!1}})}]),angular.module("everythingGamingApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div ng-app class="game-news" ng-controller="MainCtrl"> <h3>Recent Stories</h3> <p class="lead"> <div class="article-data container-fluid" ng-repeat="item in gameNews | limitTo: 6 | filter: {image}"> <a class="article-image" href="{{item.url}}"><img class="img-responsive" ng-src="{{item.image}}"></a> <a id="article-title" href="{{item.url}}"><p>{{item.title}}</p></a> </div> <!--<button ng-click="prev()">Newer</button>\n        <span>{{page}}</span>\n        <button ng-click="next()">Older</button>0--> </p> </div>')}]);