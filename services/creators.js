app.factory('creators', [function() {
  return firebase.firestore().collection('creators');
}]);
