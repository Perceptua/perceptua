app.factory('creators', [function() {
  return firebase.firestore().collection('creators').get().then(function(docs) {
    var creators = {};
    docs.forEach(function(doc) {
      console.log(doc.data());
      creators[doc.id] = doc.data();
    });
    return creators;
  });
}]);
