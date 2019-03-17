app.controller('MainController', ['$scope', '$routeParams', function($scope, $routeParams) { 
  $scope.title = 'perceptua';
  
  function getCreators() {
    return new Promise(function(resolve, reject) {
      var all = {};
      firebase.firestore().collection('creators').get().then(function(docs) {
        docs.forEach(function(doc) {
          all[doc.id] = doc.data();
        });
      }).then(function() {
        resolve(all);
      });
    });
  }
  
  async function main() {
    $scope.all = await getCreators();
    console.log($scope.all);
  }
  
  main();
  
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
  
  if ($routeParams.name) {
    $scope.creator = $scope.all[$routeParams.name];
  }
}]);
