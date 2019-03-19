app.controller('MainController', ['$scope', '$routeParams', 'creators', function($scope, $routeParams, creators) {
  var filter = $routeParams.medium || null;
  
  creators.getCreators('published', filter).then((data) => {
    $scope.published = data;
  });
}]);
