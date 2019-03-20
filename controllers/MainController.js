app.controller('MainController', ['$scope', '$routeParams', 'creators', function($scope, $routeParams, creators) {
  $scope.status = $routeParams.status;
  
  var filter = null;
  if ($routeParams.medium && !$routeParams.name) {
    filter = {field: 'medium', value: $routeParams.medium};
  } else if ($routeParams.name) {
    filter = {field: 'name', value: creators.getFullName($routeParams.name)};
  }
  
  creators.getCreators($scope.status, filter).then((data) => {
    $scope.creators = data.creators;
    $scope.media = data.media
  });
}]);
