app.controller('MainController', ['$scope', '$routeParams', function($scope, $routeParams) { 
  $scope.title = 'perceptua';
  
  $scope.all = {
    'Maxfield_Parrish': {
      name: 'Maxfield Parrish',
      medium: 'Art',
    },
    'Stanley_Kubrick': {
      name: 'Stanley Kubrick',
      medium: 'Film',
    },
  };
  
  $scope.featured = {
    name: 'Aldous Huxley',
    medium: 'Literature',
  };  
  
  $scope.upcoming = {
    'Johannes_Brahms': {
      name: 'Johannes Brahms',
      medium: 'Music',
    }
  };
  
  if ($routeParams.name) {
    $scope.creator = $scope.all[$routeParams.name];
  }
}]);
