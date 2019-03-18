app.controller('MainController', ['$scope', '$routeParams', function($scope, $routeParams) { 
  $scope.title = 'perceptua';
  
  $scope.all = {
    'aldous_huxley': {
      status: 'featured',
      name: 'Aldous Huxley',
      medium: 'Literature',
  },
    'johannes_brahms': {
      status: 'upcoming',
      name: 'Johannes Brahms',
      medium: 'Music',
    },
    'maxfield_parrish': {
      status: 'published',
      name: 'Maxfield Parrish',
      medium: 'Art',
    },
    'stanley_kubrick': {
      status: 'published',
      name: 'Stanley Kubrick',
      medium: 'Film',
    },
  };
  
  /* declare $scope variables */
  $scope.media = [];
  $scope.featured = {};
  $scope.upcoming = {};
  $scope.published = {};
  
  for (var a in $scope.all) {
    var status = $scope.all[a].status;
    if (status == 'featured') {
      $scope.featured[a] = $scope.all[a];
    } else if (status == 'upcoming') {
      $scope.upcoming[a] = $scope.all[a];
    /* if url matches /:medium, filter creators by medium param */
    } else if ($routeParams.medium && !$routeParams.name && $scope.all[a].medium.toLowerCase() == $routeParams.medium) {
      $scope.published[a] = $scope.all[a];
    } else if ($routeParams.name && a == $routeParams.name) {
      $scope.creator = $scope.all[a];
    } else {
      $scope.media.push($scope.all[a].medium);
      $scope.published[a] = $scope.all[a];
    }
  }
}]);
