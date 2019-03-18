app.factory('creators', [function($q) {
  var deferred = $q.defer();
  firebase.firestore().collection('creators').get().then(function(docs) {
    var creators = {};
    docs.forEach(function(doc) {
      creators[doc.id] = doc.data();
    });
    deferred.resolve(creators);
    return deferred.promise;
  });
}]);
