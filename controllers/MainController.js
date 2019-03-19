app.controller('MainController', ['$scope', '$routeParams', 'creators', function($scope, $routeParams, creators) { 
  $scope.title = 'perceptua';
  
  console.log($routeParams);
  
  var statusArray = ['featured', 'upcoming', 'published'];
  
  for (var status in statusArray) {
    creators.getCreators(status).then((docs) => {
      $scope.staus = {};
      docs.forEach((doc) => {
        $scope.status[doc.id] = doc.data();
        console.log($scope.status);
      });
    });
  }
  
}]);
