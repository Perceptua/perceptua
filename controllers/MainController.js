app.controller('MainController', ['$scope', '$routeParams', 'content', function($scope, $routeParams, content) {
  $scope.filter = $routeParams.filter
  var filter = null;
  var orderBy = {field: 'added', order: 'desc'};

  if ($routeParams.filter) {
    filter = {field: 'medium', value: content.makeString($routeParams.filter)};
  }

  if ($routeParams.select == 'older') {
    orderBy.order = 'asc';
  } else if ($routeParams.select) {
    filter = {field: 'title', value: content.makeString($routeParams.select)};
  }

  // send query to service, include results in scope
  content.getContent(filter, orderBy).then((data) => {
    $scope.content = data.content;
    $scope.media = data.media
    $scope.surprise = data.random;
  });

}]);
