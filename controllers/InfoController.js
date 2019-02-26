app.controller('InfoController', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.info = $routeParams.id;
});
