app.factory('creators', ['$rootScope', '$q', function($rootScope, $q) {
  return {
    getCreators: function(status, filter) {
      return $q((resolve, reject) => {
        var docs = firebase.firestore().collection('creators').where('status', '==', status);
        
        if (filter) {
          docs = docs.where(filter.field, '==', filter.value);
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
