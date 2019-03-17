app.controller('MainController', ['$scope', 'creators', '$routeParams', function($scope, creators, $routeParams) { 
  $scope.title = 'perceptua';
  
  creators.success(function(data) {
    $scope.all = data;
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
