var app = angular.module('perceptua', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when("/suggest", {
    templateUrl: "views/suggest.html"
  })
  .when("/about", {
    templateUrl: "views/about.html"
  })
  .when("/featured", {
    templateUrl: "views/featured.html"
  })
  .when("/upcoming", {
    templateUrl: "views/upcoming.html"
  })
  .when("/all", {
    controller: "MainController",
    templateUrl: "views/all.html"
  })
  .when("/content/:medium", {
    controller: "MainController",
    templateUrl: "views/all.html"
  })
  .when("/content/:medium/:name", {
    controller: "MainController",
    templateUrl: "views/content.html"
  })
  .otherwise({
    redirectTo: "/featured"
  });
});
