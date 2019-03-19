app.controller('MainController', ['$scope', '$routeParams', 'creators', function($scope, $routeParams, creators) {
  var filter = null;
  
  if ($routeParams.medium && !$routeParams.name) {
    filter = {field: 'medium', value: $routeParams.medium};
  } else if ($routeParams.name) {
    console.log(creators.convertToName($routeParams.name));
    filter = {field: 'name', value: creators.convertToName($routeParams.name)};
  }
  
  creators.getCreators($routeParams.status, filter).then((data) => {
    $scope.creators = data.creators;
    $scope.media = data.media
  });
}]);
