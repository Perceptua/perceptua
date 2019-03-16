app.controller('MainController', ['$scope', '$routeParams', function($scope, $routeParams) { 
  $scope.title = 'perceptua';
  
  $scope.all = [
    {
      id: 0,
      name: 'Maxfield Parrish',
      medium: 'Art',
    },
    {
      id: 1,
      name: 'Stanley Kubrick',
      medium: 'Film',
    }
  ];
  
  $scope.featured = {
    id: 2,
    name: 'Aldous Huxley',
    medium: 'Literature',
  };  
  
  $scope.upcoming = [
    {
      id: 3,
      name: 'Johannes Brahms',
      medium: 'Music',
    }
  ];
  
  if ($routeParams.id) {
    $scope.creator = $scope.all[$routeParams.id];
  }
}]);
