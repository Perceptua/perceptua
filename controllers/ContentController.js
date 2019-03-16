app.controller('ContentController', ['$scope', '$routeParams', function($scope, $routeParams) {
  firebase.firestore().collection('creators').doc($routeParams.id).get().then(function(doc) {
    if (doc.exists) {
      $scope.creator = doc.data();
    }
  }).catch(function(error) {
    console.log(error);
  });
});
