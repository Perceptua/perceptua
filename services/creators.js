app.factory('creators', ['$rootScope', '$q', function($rootScope, $q) {
  return $q((resolve, reject) => {
    console.log('generating query...');
    var docs = firebase.firestore().collection('creators'); //.where('status', '==', status);

    /*if (query) {
      docs = docs.where(query.field, '==', query.value);
    }*/

    console.log('executing query...');
    docs.get().then((docs) => {
      var creators = {};
      console.log('looping...');
      docs.forEach((doc) => {
        creators[doc.id] = doc.data();
      });
      resolve(creators);
    });
  });
}]);
