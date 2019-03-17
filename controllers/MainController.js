app.controller('MainController', ['$scope', '$routeParams', function($scope, $routeParams) { 
  $scope.title = 'perceptua';
  
  $scope.all = {};
  
  firebase.firestore().collection('creators').get().then(function(docs) {
    docs.forEach(function(doc) {
      $scope.all[doc.id] = doc.data();
    });
  });
  
  $scope.featured = {
    name: 'Aldous Huxley',
    medium: 'Literature',
    'added': new Date(2019, 03, 17, 17, 39, 00, 00);
  };  
  
  $scope.upcoming = {
    'johannes_brahms': {
      name: 'Johannes Brahms',
      medium: 'Music',
      'added': new Date(2019, 03, 17, 17, 39, 00, 00);
    }
  };
  
  if ($routeParams.name) {
    $scope.creator = $scope.all[$routeParams.name];
  }
}]);
