app.controller('MainController', ['$scope', 'creators', function($scope, creators) { 
  $scope.title = 'perceptua';
  
  $scope.all = [
      {
        name: 'Maxfield Parrish',
        medium: 'Art',
      },
    ];
  
  creators.then(function(data) {
    $scope.all = [
      {
        name: 'Maxfield Parrish',
        medium: 'Art',
      },
    ];
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
