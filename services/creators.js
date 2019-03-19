app.factory('creators', ['$rootScope', '$q', function($rootScope, $q) {
  return {
    getCreators: function(status='public', query=null) {
      console.log('generating query...');
      var creators = {};
      var deferred = $q.defer();
      var docs = firebase.firestore().collection('creators').where('status', '==', status);
      
      if (query) {
        docs = docs.where(query.field, '==', query.value);
      }
      
      console.log('executing query...');
      docs.get().then((docs) => {
        console.log('retrived docs...');
        docs.forEach((doc) => {
          console.log('looping through docs...');
          creators[doc.id] = doc.data();
        });
        console.log('resolving promise...');
        deferred.resolve(creators);
      }).catch((error) => {
        console.log('rejecting promise...');
        deferred.reject(error);
      });
      
      console.log('returning promise...');
      return deferred.promise;
    }
  };
}]);
