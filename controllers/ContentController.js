app.controller('ContentController', ['$scope', 'creators', '$routeParams', function($scope, creators, $routeParams) {
  firebase.firestore().collection('creators').where('status', '==', 'public').get().then(function(docs) {
    $scope.all = {};
    docs.forEach(function(doc) {
      $scope.all[doc.id] = doc.data();
    });
    return $scope.all;
  });
}]);
