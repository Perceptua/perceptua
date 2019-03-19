app.factory('creators', ['$rootScope', '$q', function($rootScope, $q) {
  return {
    getCreators: function(status, query=null) {
      return $q((resolve, reject) => {
        console.log(status);
        var docs = firebase.firestore().collection('creators').where('status', '==', status);
        if (query) {
          docs = docs.where(query.field, '==', query.value);
        }
        resolve(docs.get());
      });
    },
  };
}]);
