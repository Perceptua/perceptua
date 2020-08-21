app.controller('MainController', ['$scope', '$routeParams', 'content', function($scope, $routeParams, content) {
  $scope.status = $routeParams.status;  
  
  $scope.filter = $routeParams.filter
  var filter = null;
  if ($routeParams.filter != 'all') {
    filter = {field: 'medium', value: $routeParams.filter};
  }
  
  var orderBy = {field: 'added', order: 'desc'};
  if ($routeParams.status == 'upcoming') {
    orderBy.order = 'asc';
  }
  
  if ($routeParams.select == 'older') {
    orderBy.order = 'asc';
  } else if ($routeParams.select) {
    filter = {field: 'title', value: content.getTitle($routeParams.select)};
  }
  
  // send query to service, include results in scope
  content.getContent($scope.status, filter, orderBy).then((data) => {
    $scope.content = data.content;
    $scope.media = data.media
    $scope.surprise = data.random;
  });
  
}]);
