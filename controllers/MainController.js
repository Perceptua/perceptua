app.controller('MainController', ['$scope', '$routeParams', 'creators', 'name', function($scope, $routeParams, creators, name) {
  var filter = null;
  
  if ($routeParams.medium && !$routeParams.name) {
    filter = {field: 'medium', value: $routeParams.medium};
  } else if ($routeParams.name) {
    console.log(name.convertToName($routeParams.name));
    filter = {field: 'name', value: name.convertToName($routeParams.name)};
  }
  
  creators.getCreators($routeParams.status, filter).then((data) => {
    $scope.creators = data.creators;
    $scope.media = data.media
  });
}]);
