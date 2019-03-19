app.controller('MainController', ['$scope', '$routeParams', 'creators', function($scope, $routeParams, creators) { 
  $scope.title = 'perceptua';
  
  console.log($routeParams);
  
  var statusArray = ['featured', 'upcoming', 'published'];
  
  for (var s in statusArray) {
    var status = statusArray[s];
    creators.getCreators(status).then((docs) => {
      $scope[status] = {};
      docs.forEach((doc) => {
        $scope[status][doc.id] = doc.data();
      });
      console.log(status + ': ');
      console.log($scope[status]);
    });
  }
  
}]);
