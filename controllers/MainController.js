app.controller('MainController', ['$scope', '$routeParams', 'creators', function($scope, $routeParams, creators) {
  var filter = null;
  
  if ($routeParams.medium && !$routeParams.name) {
    filter = {field: 'medium', value: $routeParams.medium};
  } else if ($routeParams.name) {
    filter = {field: 'name', value: $routeParams.name};
  }
  
  creators.getCreators('published', filter).then((data) => {
    $scope.published = data.creators;
    $scope.media = data.media
  });
}]);
