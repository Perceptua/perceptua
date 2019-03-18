app.factory('creators', [function() {
  return new Promise((resolve, reject) => {
    firebase.firestore().collection('creators').where('status', '==', 'public').get().then((docs) => {
      var creators = {};
      docs.forEach((doc) => {
        creators[doc.id] = doc.data();
      });
      resolve(creators);
    }).catch((error) => {
      reject(error);
    });
  });
}]);
