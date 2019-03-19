app.controller('MainController', ['$scope', '$routeParams', 'creators', function($scope, $routeParams, creators) {
  var filter = null;
  
  if ($routeParams.medium && !$routeParams.name) {
    filter = {medium: $routeParams.medium};
  } else if ($routeParams.name) {
    filter = {name: $routeParams.name};
  }
  
  creators.getCreators('published', filter).then((data) => {
    $scope.published = data;
  });
}]);
