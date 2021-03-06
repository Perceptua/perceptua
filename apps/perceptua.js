var app = angular.module('perceptua', ['ngRoute']);

function getForm(form) {
  var published = ['essays', 'fiction', 'media'];

  if (published.includes(form)) {
    return 'published';
  }

  return form;
}

app.config(function($routeProvider) {
  $routeProvider
  .when("/about", {
    templateUrl: "views/about.html",
  })
  .when("/:form", {
    controller: "MainController",
    templateUrl: function(params) {
      return "views/" + getForm(params.form) + ".html";
    },
  })
  .when("/:form/:filter", {
    controller: "MainController",
    templateUrl: function(params) {
      return "views/" + getForm(params.form) + ".html";
    },
  })
  .when("/:form/:filter/:select", {
    controller: "MainController",
    templateUrl: function(params) {
      if (params.select == 'older') {
        return "views/" + getForm(params.form) + ".html";
      }
      return "views/content.html";
    },
  })
  .otherwise({
    redirectTo: "/about",
  });
});
