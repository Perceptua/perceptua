app.controller('ContentController', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.creator = $scope.all[$routeParams.id];
}]);
