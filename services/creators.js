app.factory('creators', [function(subset=null, query=null) {
  var docs;
  if (subset && !query) {
    docs = firebase.firestore().collection('creators').where('status', '==', subset);
  } else if (subset && query) {
    docs = firebase.firestore().collection('creators').where('staus', '==', subset).where(query.field, '==', query.value);
  } else if (!subset && query) {
    docs = firebase.firestore().collection('creators').where(query.field, '==', query.value);
  } else {
    docs = firebase.firestore().collection('creators');
  }
  
  return docs.get().then(function(docs) {
    var creators = {};
    docs.forEach(function(doc) {
      creators[doc.id] = doc.data();
    });
    return creators;
  });
}]);
