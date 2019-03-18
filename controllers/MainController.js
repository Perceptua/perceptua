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
