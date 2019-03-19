app.factory('creators', ['$rootScope', '$q', function($rootScope, $q) {
  return {
    getCreators: $q((resolve, reject) => {
      console.log('generating query...');
      var docs = firebase.firestore().collection('creators'); //.where('status', '==', status);

      /*if (query) {
        docs = docs.where(query.field, '==', query.value);
      }*/

      console.log('executing query...');
      resolve(docs.get());
    }
  };
}]);
