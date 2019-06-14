app.controller('MainController', ['$scope', '$routeParams', 'content', function($scope, $routeParams, content) {
  // can be 'featured', 'upcoming', or 'published'
  $scope.status = $routeParams.status;
  
  // initialize filter & ordering for databse query
  var filter = null;
  var orderBy = {field: 'added', order: 'desc'};
  
  // update query from $routeParams of requested resource
  if ($routeParams.sort && !$routeParams.title) {
    if ($routeParams.sort == 'older') {
      orderBy = {field: 'added', order: 'asc'};
    } else {
      filter = {field: 'medium', value: $routeParams.sort};
    }
  } else if ($routeParams.title) {
    filter = {field: 'title', value: content.getTitle($routeParams.title)};
  }
  
  // send query to service, include results in scope
  content.getContent($scope.status, filter, orderBy).then((data) => {
    $scope.content = data.content;
    $scope.media = data.media
    $scope.surprise = data.random;
  });
  
  console.log($scope.content);
}]);
