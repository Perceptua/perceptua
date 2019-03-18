app.controller('ContentController', ['$scope', 'creators', '$routeParams', function($scope, creators, $routeParams) {
  creators.then(function(data) {
    if ($routeParams.name) {
      console.log(data[$routeParams.name]);
      $scope.creator = data[$routeParams.name];
    }
  });
}]);
