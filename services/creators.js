app.factory('creators', [function() {
  function getCreators() {
    var promise = new Promise(function(resolve, reject) {
      firebase.firestore().collection('creators').get().then(function(docs) {
        var creators = {};
        docs.forEach(function(doc) {
          creators[doc.id] = doc.data();
        });
        resolve(creators);
      });
    });
  }
  
  async function main() {
    var creators = await getCreators();
    console.log(creators);
  }
  
  main();
}]);
