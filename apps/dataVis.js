var app = angular.module('dataVis', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    controller: 'MainController',
    templateUrl: "views/home.html"
  })
  .when("/info/:id", {
    controller: 'InfoController',
    templateUrl: "views/info.html"
  })
  .otherwise({
    redirectTo: "/"
  });
});
