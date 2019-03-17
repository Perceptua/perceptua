app.factory('creators', [function() {
  return firebase.firestore().collection('creators').get().then(function(docs) {
    var creators = {};
    docs.forEach(function(doc) {
      creators[doc.id] = doc.data();
    });
    return creators;
  }).then((value) => value);
}]);
