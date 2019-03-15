app.controller('ContentController', ['$scope', 'content', '$routeParams', function($scope, content, $routeParams) {
  content.success(function(data) {
    $scope.detail = data[$routeParams.id];
  });
}]);
