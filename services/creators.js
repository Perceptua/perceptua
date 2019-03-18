app.factory('creators', [function() {
  return firebase.firestore().collection('creators').get().then(function(docs) {
    return docs;
  });
}]);
