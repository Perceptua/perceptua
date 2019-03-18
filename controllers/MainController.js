app.controller('MainController', ['$scope', 'creators', function($scope, creators) { 
  $scope.title = 'perceptua';
  
  $scope.all = creators.then(function(data) {
    console.log(data);
    return data;
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
