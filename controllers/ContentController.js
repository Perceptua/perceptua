app.controller('ContentController', ['$scope', 'creators', '$routeParams', function($scope, creators, $routeParams) {
  creators.then(function(data) {
    if ($routeParams.name) {
      $scope.creator = data[$routeParams.name];
    }
  });
}]);
