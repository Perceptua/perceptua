app.controller('MainController', ['$scope', '$routeParams', function($scope, $routeParams) { 
  $scope.title = 'perceptua';
  
  $scope.all = {};
  
  var creators = new Promise(function(resolve, reject) {
    firebase.firestore().collection('creators').get().then(function(docs) {
      docs.forEach(function(doc) {
        $scope.all[doc.id] = doc.data();
      });
    });
    resolve('complete');
  });
  
  $scope.featured = {
    name: 'Aldous Huxley',
    medium: 'Literature',
  };  
  
  $scope.upcoming = {
    'johannes_brahms': {
      name: 'Johannes Brahms',
      medium: 'Music',
    }
  };
  
  if ($routeParams.name) {
    $scope.creator = $scope.all[$routeParams.name];
  }
}]);
