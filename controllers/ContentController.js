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
    var media = {};
    for (var a in $scope.all) {
      if ($scope.all[a].medium.toLowerCase() == $routeParams.medium) {
        media[a] = $scope.all[a];
      }
    }
    $scope.all = media;
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
