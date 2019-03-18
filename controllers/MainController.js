app.controller('MainController', ['$scope', '$routeParams', function($scope, $routeParams) { 
  $scope.title = 'perceptua';
  
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
  
  if ($routeParams.medium && !$routeParams.name) {
    var creators = {};
    for (var a in $scope.all) {
      if ($scope.all[a].medium.toLowerCase() == $routeParams.medium) {
        creators[a] = $scope.all[a];
      }
    }
    $scope.all = creators;
  } else if ($routeParams.name) {
    $scope.creator = $scope.all[$routeParams.name];
  }
}]);
