app.factory('creators', ['$rootScope', '$q', function($rootScope, $q) {
  return {
    getCreators: function(status='public', query=null) {
      console.log('generating promise...');
      var docs = firebase.firestore().collection('creators').where('status', '==', status);
      
      if (query) {
        docs = docs.where(query.field, '==', query.value);
      }
      
      console.log('executing query...');
      return docs.get();
    }
  };
}]);
