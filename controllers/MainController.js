import {featured, upcoming, all} from '/static/creators.js'

app.controller('MainController', ['$scope', '$routeParams', function($scope, $routeParams) { 
  $scope.title = 'perceptua';
  $scope.featured = featured;
  $scope.upcoming = upcoming;
  $scope.all = all;
  
  if ($routeParams) {
    $scope.creator = $scope.all[$routeParams.id];
  }
}]);
  
