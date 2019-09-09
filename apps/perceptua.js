var app = angular.module('perceptua', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when("/suggest", {
    controller: "SuggestController",
    templateUrl: "views/suggest.html",
  })
  .when("/about", {
    templateUrl: "views/about.html",
  })
  .when("/:status", { // choice of featured, upcoming, or published
    controller: "MainController",
    templateUrl: function(params) {
      return "views/" + params.status + ".html";
    },
  })
  .when("/:status/:sort", {
    controller: "MainController",
    templateUrl: "views/published.html",
  })
  .when("/:status/:sort/:title", { // show selected upcoming content (published handled by Jekyll in _posts)
    controller: "MainController",
    templateUrl: "views/content.html",
  })
  .otherwise({
    redirectTo: "/published",
  });
});
