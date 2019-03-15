app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'perceptua';
  $scope.featured = {
    id: 3,
    name: 'Ludwig van Beethoven',
    medium: 'Music',
  };
  $scope.upcoming = [
    {
      id: 4,
      name: 'Johannes Brahms',
      medium: 'Music',
    }
  ];
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
}]);
  
