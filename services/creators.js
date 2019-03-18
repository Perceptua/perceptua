app.factory('creators', ['$rootScope', '$q', function($rootScope, $q) {
  return {
    getCreators: function(status='public', query=null) {
      var deferred = $q.defer();
      firebase.firestore().collection('creators').where('status', '==', 'public').get().then((docs) => {
        var creators = {};
        docs.forEach((doc) => {
          creators[doc.id] = doc.data();
        });
        deferred.resolve(creators);
      }).catch((error) => {
        deferred.reject(error);
      });
    }
  };
}]);
