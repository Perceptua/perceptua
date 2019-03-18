app.controller('ContentController', ['$scope', 'creators', '$routeParams', function($scope, creators, $routeParams) {
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
    
  if ($routeParams.medium && !$routeParams.name) {
    $scope.creators = {};
    for (var a in $scope.all) {
      if ($scope.all[a].medium == $routeParams.medium) {
        $scope.creators[a] = $scope.all[a];
      }
    }
  } else if ($routeParams.name) {
    $scope.creator = $scope.all[$routeParams.name];
  } else {
    creators.then(function(data) {
      for (var d in data) {
        if (data[d].clicks) {
          $('#' + d + '_clicks').append('<i class="fas fa-eye"></i> ' + data[d].clicks);
        }
      }
    });
  }
}]);
