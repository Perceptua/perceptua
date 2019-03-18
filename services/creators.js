app.factory('creators', [function() {
  var creators = {};
  
  var getCreators = function() { 
    return firebase.firestore().collection('creators').get().then(function(docs) {
      var data = {};
      docs.forEach(function(doc) {
        data[doc.id] = doc.data();
      });
      return data;
    });
  }
  
  getCreators().then(function(result) {
    creators = result;
    return creators;
  });
  
  console.log(creators);
  return creators;
}]);
