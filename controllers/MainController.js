app.controller('MainController', ['$scope', '$routeParams', 'creators', function($scope, $routeParams, creators) { 
  $scope.title = 'perceptua';
  
  creators.getCreators('published').then((data) => {
    $scope.published = data;
    console.log($scope.published);
  });
}]);
