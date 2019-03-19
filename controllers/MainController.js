app.controller(
  'MainController', 
  ['$scope', '$routeParams', 'creators', function($scope, $routeParams, creators) { 
    $scope.title = 'perceptua';

    /*
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
      } else {
        $scope.media.push($scope.all[a].medium);
        $scope.published[a] = $scope.all[a];
      }
    }

    if ($routeParams.medium && !$routeParams.name) {
      for (var p in $scope.published) {
        if ($scope.published[p].medium.toLowerCase() != $routeParams.medium) {
          delete $scope.published[p];
        }
      }
    } else if ($routeParams.name) {
      $scope.creator = $scope.all[$routeParams.name];
    }
    */
    console.log('starting...')
    creators.getCreators('public').then((docs) => {
      $scope.all = {};
      console.log('retrieved data...');
      docs.forEach((doc) => {
        $scope.all[doc.id] = doc.data();
      });
    });
    
    console.log($scope.all);
  },
]);
