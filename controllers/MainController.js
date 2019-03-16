app.controller('MainController', ['$scope', '$routeParams', function($scope, $routeParams) { 
  $scope.title = 'perceptua';
  
  $scope.all = [
    {
      id: 1,
      name: 'Maxfield Parrish',
      medium: 'Art',
    },
    {
      id: 2,
      name: 'Stanley Kubrick',
      medium: 'Film',
    }
  ];
  
  $scope.featured = {
    id: 3,
    name: 'Aldous Huxley',
    medium: 'Literature',
  };  
  
  $scope.upcoming = [
    {
      id: 4,
      name: 'Johannes Brahms',
      medium: 'Music',
    }
  ];
  
  if ($routeParams.id) {
    $scope.creator = $scope.all[$routeParams.id];
  }
}]);
