app.controller('ContentController', ['$scope', 'creators', '$routeParams', function($scope, creators, $routeParams) {
  creators.success(function(data) {
    if ($routeParams.name) {
      $scope.creator = data[$routeParams.name];
    }
  });
}]);
