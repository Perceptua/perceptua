var app = angular.module('perceptua', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when("/featured", {
    controller: 'ContentController',
    templateUrl: "views/featured.html"
  })
  .when("/upcoming", {
    controller: 'MainController',
    templateUrl: "views/upcoming.html"
  })
  .when("/all", {
    controller: 'ContentController',
    templateUrl: "views/all.html"
  })
  .when("/suggest", {
    controller: 'MainController',
    templateUrl: "views/suggest.html"
  })
  .when("/about", {
    controller: 'MainController',
    templateUrl: "views/about.html"
  })
  .when('/content/:medium/:name', {
    controller: 'ContentController',
    templateUrl: 'views/content.html',
  })
  .otherwise({
    redirectTo: "/featured"
  });
});
