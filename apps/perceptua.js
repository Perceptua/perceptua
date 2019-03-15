var app = angular.module('perceptua', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    controller: 'MainController',
    templateUrl: "views/home.html"
  })
  .when('/content/:id', {
    controller: 'ContentController',
    templateUrl: 'views/content.html',
  })
  .otherwise({
    redirectTo: "/"
  });
});
