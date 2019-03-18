app.controller('MainController', ['$scope', 'creators', function($scope, creators) { 
  $scope.title = 'perceptua';
  
  function getCreators() {
    creators.then(function(docs) {
      $scope.all = {};
      docs.forEach(function(doc) {
        $scope.all[doc.id] = doc.data();
      });
      console.log($scope.all);
      return $scope.all;
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
  }
  
  async function main() {
    var creators = await getCreators();
    console.log(creators);
    return creators;
  }
  
  main();
}]);
