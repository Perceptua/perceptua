app.controller('MainController', ['$scope', 'creators', function($scope, creators) { 
  $scope.title = 'perceptua';
  
  $scope.all = {
    'maxfield_parrish': {
      name: 'Maxfield Parrish',
      medium: 'Art',
    },
    'stanley_kubrick': {
      name: 'Stanley Kubrick',
      medium: 'Film',
    },
  };
  
  creators.then(function(docs) {
    $scope.all = {}
    docs.forEach(function(doc) {
      $scope.all[doc.id] = doc.data();
    });
    console.log($scope.all);
    return $scope.all;
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
}]);
