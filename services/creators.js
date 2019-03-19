app.factory('creators', ['$rootScope', '$q', function($rootScope, $q) {
  return {
    getCreators: function(status='public', query=null) {
      console.log('generating query...');
      var creators = {};
      var docs = firebase.firestore().collection('creators').where('status', '==', status);
      
      if (query) {
        docs = docs.where(query.field, '==', query.value);
      }
      
      return docs.get().then((docs) => {
        console.log('retrived docs...');
        return $q((resolve, reject) => {
          docs.forEach((doc) => {
            creators[doc.id] = doc.data();
          });
          console.log('resolving promise...');
          resolve(creators);
        });
      });
    }
  };
}]);
