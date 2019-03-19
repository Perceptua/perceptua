app.controller('MainController', ['$scope', '$routeParams', 'creators', function($scope, $routeParams, creators) { 
  $scope.title = 'perceptua';
  
  if ($routeParams.status) {
    console.log($routeParams.status);
    creators.getCreators($routeParams.status).then((docs) => {
      $scope[$routeParams.status] = {};
      docs.forEach((doc) => {
        $scope[$routeParams.status[doc.id]] = doc.data();
      });
    });
  } 
  
}]);
