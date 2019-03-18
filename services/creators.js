app.factory('creators', [function() {
  var fire =  firebase.firestore().collection('creators').get().then(function(docs) {
    var creators = {};
    docs.forEach(function(doc) {
      creators[doc.id] = doc.data();
    });
    console.log(creators);
    return creators;
  }).then(function(data) {
    console.log(data);
    return data;
  });
  console.log(fire);
  return fire;
}]);
