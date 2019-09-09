app.controller('SuggestController', ['$scope', '$routeParams', 'suggest', function($scope, $routeParams, suggest) {

  suggest.getSuggestions().then((data) => {
    $scope.content = data.content;
    $scope.creators = data.creators;
    $scope.media = data.media;
  });
  
}]);
