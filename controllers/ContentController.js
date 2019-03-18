app.controller('ContentController', ['$scope', 'creators', '$routeParams', function($scope, creators, $routeParams) {
  var content;
  if ($routeParams.medium && !$routeParams.name) {
    content = creators.getDocs('public', {field: 'medium', value: $routeParams.medium});
  } else {
    content = creators.getDocs('public');
  }
  
  content.then(function(data) {
    for (var d in data) {
      $('body').append(
        '<div class="creator-card"><a class="greyscale" href="#/content/' + data[d].medium + 
        '/' + data[d].name + '"><h3>' + data[d].name + '</h3><a href="#/content/' + 
        data[d].medium + '">' + data[d].medium + '</a><p id="' + data[d].name + '_clicks"></p></a></div>'
      );
    }
  });
}]);
