app.controller('MainController', ['$scope', '$routeParams', 'creators', function($scope, $routeParams, creators) {
  $scope.status = $routeParams.status;
  
  var filter = null;
  var orderBy = {field: 'added', order: 'desc'};
  if ($routeParams.sort && !$routeParams.name) {
    if ($routeParams.sort == 'older') {
      orderBy = {field: 'added', order: 'asc'};
    } else if ($routeParams.sort == 'clicks') {
      orderBy = {field: 'clicks', order: 'desc'};
    } else {
      filter = {field: 'medium', value: $routeParams.sort};
    }
  } else if ($routeParams.name) {
    filter = {field: 'name', value: creators.getFullName($routeParams.name)};
  }
  
  creators.getCreators($scope.status, filter, orderBy).then((data) => {
    $scope.creators = data.creators;
    $scope.media = data.media
    $scope.random = data.random;
    console.log($scope.random.name);
  });
}]);
