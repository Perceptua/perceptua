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
  
  var all =  getCreators().then(function(result) {
    return result;
  });
  
  console.log(all);
  return all;
}]);
