app.controller('MainController', ['$scope', '$q', 'creators', function($scope, $q, creators) { 
  $scope.title = 'perceptua';
  
  var deferred = $q.defer();
    
  creators.then(function(data) {
    $scope.all = data;
    console.log($scope.all);
    deferred.resolve(data);
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
