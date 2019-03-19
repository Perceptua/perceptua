var app = angular.module('perceptua', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when("/suggest", {
    templateUrl: "views/suggest.html"
  })
  .when("/about", {
    templateUrl: "views/about.html"
  })
  .when("/content/:status", {
    templateUrl: "views/all.html"
  })
  .when("/content/:status/:medium", {
    templateUrl: "views/all.html"
  })
  .when("/content/:status/:medium/:name", {
    templateUrl: "views/content.html"
  })
  .otherwise({
    redirectTo: "/about"
  });
});
