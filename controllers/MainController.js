app.controller('MainController', ['$scope', '$routeParams', function($scope, $routeParams) { 
  $scope.title = 'perceptua';
  
  $scope.all = new Promise(function(resolve, reject) {
    var creators = {};
    firebase.firestore().collection('creators').get().then(function(docs) {
      docs.forEach(function(doc) {
        creators[doc.id] = doc.data();
      });
    });
    resolve(creators);
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
