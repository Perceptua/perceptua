var app = angular.module('perceptua', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'MainController',
    templateUrl: function(params) {
      return 'views/published.html';
    },
  })
  .when('/:filter', {
    controller: 'MainController',
    templateUrl: function(params) {
      return 'views/published.html';
    },
  })
  .when('/:filter/:select', {
    controller: 'MainController',
    templateUrl: function(params) {
      if (params.select == 'older') {
        return 'views/published.html';
      }
      return 'views/content.html';
    },
  })
  .otherwise({
    redirectTo: '/',
  });
});
