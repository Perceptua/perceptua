app.factory('creators', ['$rootScope', '$q', function($rootScope, $q) {
  return {
    getCreators: function(status='public', query=null) {
      var deferred = $q.defer();
      var docs = firebase.firestore().collection('creators').where('status', '==', status);
      
      if (query) {
        docs = docs.where(query.field, '==', query.value);
      }
      
      docs.get().then((docs) => {
        var creators = {};
        docs.forEach((doc) => {
          creators[doc.id] = doc.data();
        });
        deferred.resolve(creators);
      }).catch((error) => {
        deferred.reject(error);
      });
      
      return deferred.promise;
    }
  };
}]);
