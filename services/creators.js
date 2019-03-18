app.factory('creators', [function() {
  var getCreators = function() { 
    return firebase.firestore().collection('creators').get().then(function(docs) {
      var creators = {};
      docs.forEach(function(doc) {
        creators[doc.id] = doc.data();
      });
      return creators;
    });
  }
  
  return getCreators().then(function(result) {
    console.log(result);
    return result;
  });
}]);
