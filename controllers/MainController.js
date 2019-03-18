app.controller('MainController', ['$scope', '$q', 'creators', function($scope, $q, creators) { 
  $scope.title = 'perceptua';
  
  function getAll() {
    var deferred = $q.defer();
    
    creators.then(function(data) {
      $scope.all = data;
      console.log($scope.all);
      deferred.resolve(data);
    });
    
    return deferred.promise;
  }

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
