app.controller('ContentController', ['$scope', 'creators', function($scope, creators) {
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
  
  creators.then(function(data) {
    for (var a in $scope.all) {
      $('#' + a + '_clicks').append('<i class="fas fa-eye"></i> ' + data[a].clicks);
    }
  });
}]);
