app.controller('MainController', ['$scope', 'creators', function($scope, creators) { 
  $scope.title = 'perceptua';
  
  creators.then(function(data) {
    $scope.all = {
      'maxfield_parrish': {
        name: 'Maxfield Parrish',
        medium: 'Art',
      },
    };
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
