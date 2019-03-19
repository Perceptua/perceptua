app.factory('creators', ['$rootScope', '$q', function($rootScope, $q) {
  return {
    getCreators: function(status, query=null) {
      return $q((resolve, reject) => {
        var docs = firebase.firestore().collection('creators').where('status', '==', status);
        if (query) {
          docs = docs.where(query.field, '==', query.value);
        }
        docs.get().then((docs) => {
          var creators = {};
          docs.forEach((doc) => {
            creators[doc.id] = doc.data();
          });
          resolve(creators);
        });
      });
    },
  };
}]);
