var app = angular.module('perceptua', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when("/featured", {
    templateUrl: "views/featured.html"
  })
  .when("/upcoming", {
    templateUrl: "views/upcoming.html"
  })
  .when("/all", {
    templateUrl: "views/all.html"
  })
  .when("/suggest", {
    templateUrl: "views/suggest.html"
  })
  .when("/about", {
    templateUrl: "views/about.html"
  })
  .when("/content/:medium", {
    templateUrl: "views/all.html"
  })
  .when("/content/:medium/:name", {
    templateUrl: "views/content.html"
  })
  .otherwise({
    redirectTo: "/featured"
  });
});
