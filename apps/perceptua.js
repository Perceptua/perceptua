var app = angular.module('perceptua', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when("/about", {
    templateUrl: "views/about.html",
  })
  .when("/:status", {
    controller: "MainController",
    templateUrl: function(params) {
      return "views/" + params.status + ".html";
    },
  })
  .when("/:status/:filter", {
    controller: "MainController",
    templateUrl: function(params) {
      return "views/" + params.status + ".html";
    },
  })
  .when("/:status/:filter/:select", {
    controller: "MainController",
    templateUrl: function(params) {
      if (params.select == 'older') {
        return "views/" + params.status + ".html";
      }
      return "views/content.html"; // show selected content
    },
  })
  .otherwise({
    redirectTo: "/published/all/",
  });
});
