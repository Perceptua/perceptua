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
  .when("/:status/:sort", {
    controller: "MainController",
    templateUrl: "views/published.html",
  })
  .when("/:status/:sort/:title", {
    controller: "MainController",
    templateUrl: "views/content.html",
  })
  .otherwise({
    redirectTo: "/featured",
  });
});
