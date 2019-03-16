app.controller('MainController', ['$scope', '$routeParams', function($scope, $routeParams) { 
  $scope.title = 'perceptua';
  
  $scope.featured = {
    id: 2,
    name: 'Ludwig van Beethoven',
    medium: 'Music',
  };
  
  $scope.upcoming = [
    {
      id: 3,
      name: 'Johannes Brahms',
      medium: 'Music',
    }
  ];
  
  $scope.all = [
    {
      id: 0,
      name: 'Maxfield Parrish',
      medium: 'Art',
      content: 'https://firebasestorage.googleapis.com/v0/b/perceptua-b6ea3.appspot.com/o/public%2Ffeatured.html' + 
               '?alt=media&token=0ff1e240-349d-4dd0-a188-8c47619be97a',
    },
    {
      id: 1,
      name: 'Stanley Kubrick',
      medium: 'Film',
    }
  ];
  
  if ($routeParams.id) {
    $scope.creator = $scope.all[$routeParams.id];
  }
}]);
