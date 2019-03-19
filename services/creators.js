app.factory('creators', ['$rootScope', '$q', function($rootScope, $q) {
  return {
    getCreators: function(status='public', query=null) {
      console.log('generating promise...');
      var deferred = $q.defer();
      var docs = firebase.firestore().collection('creators').where('status', '==', status);
      
      if (query) {
        docs = docs.where(query.field, '==', query.value);
      }
      
      console.log('executing query...');
      docs.get().then((docs) => {
        console.log('retrieved docs...');
        var creators = {};
        docs.forEach((doc) => {
          console.log('looping through docs...');
          creators[doc.id] = doc.data();
        });
        deferred.resolve(creators);
        console.log('resolved promise...');
        return deferred.promise;
      }).catch((error) => {
        deferred.reject(error);
        return deferred.promise;
      });
    }
  };
}]);
