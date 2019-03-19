app.factory('creators', ['$rootScope', '$q', function($rootScope, $q) {
  return {
    getCreators: function(status='public', query=null) {
      return $q((resolve, reject) => {
        resolve('resolved!');
      });
      /*console.log('generating query...');
      var docs = firebase.firestore().collection('creators').where('status', '==', status);

      if (query) {
        docs = docs.where(query.field, '==', query.value);
      }

      console.log('executing query...');
      return docs.get();*/
    },
  };
}]);
