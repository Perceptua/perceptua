app.controller('MainController', ['$scope', '$routeParams', 'creators', function($scope, $routeParams, creators) {
  // can be 'featured', 'upcoming', or 'published'
  $scope.status = $routeParams.status;
  
  // initialize filter & ordering for databse query
  var filter = null;
  var orderBy = {field: 'added', order: 'desc'};
  
  // update query from $routeParams of requested resource
  if ($routeParams.sort && !$routeParams.name) {
    if ($routeParams.sort == 'older') {
      orderBy = {field: 'added', order: 'asc'};
    } else {
      filter = {field: 'medium', value: $routeParams.sort};
    }
  } else if ($routeParams.name) {
    filter = {field: 'name', value: creators.getFullName($routeParams.name)};
  }
  
  // send query to service, include results in scope
  creators.getCreators($scope.status, filter, orderBy).then((data) => {
    $scope.creators = data.creators;
    $scope.media = data.media
    $scope.surprise = data.random;
  });
}]);
