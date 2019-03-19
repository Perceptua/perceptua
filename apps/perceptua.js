var app = angular.module('perceptua', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when("/suggest", {
    templateUrl: "views/suggest.html",
  })
  .when("/about", {
    templateUrl: "views/about.html",
  })
  .when("/:status", {
    controller: "MainController",
    templateUrl: function(params) {
      return "views/" + params.status + ".html";
    },
  })
  .when("/published/:medium", {
    controller: "MainController",
    templateUrl: "views/published.html",
  })
  .when("/published/:medium/:name", {
    controller: "MainController",
    templateUrl: "views/content.html",
  })
  .otherwise({
    redirectTo: "/featured"
  });
});
