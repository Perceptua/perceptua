app.controller('MainController', ['$scope', '$routeParams', function($scope, $routeParams) { 
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
  
  if ($routeParams.name) {
    $scope.creator = $scope.all[$routeParams.name];
  }
}]);
