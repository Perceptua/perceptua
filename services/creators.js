app.factory('creators', ['$rootScope', '$q', function($rootScope, $q) {
  return {
    getCreators: function(status='public', query=null) {
      console.log('generating query...');
      var creators = {};
      var docs = firebase.firestore().collection('creators').where('status', '==', status);
      
      if (query) {
        docs = docs.where(query.field, '==', query.value);
      }
      
      console.log('executing query...');
      return $q((resolve, reject) => {
        docs.get().then((docs) => {
          console.log('retrived docs...');
          docs.forEach((doc) => {
            console.log('looping through docs...');
            creators[doc.id] = doc.data();
          });
          console.log('resolving promise...');
          resolve(creators);
        }).catch((error) => {
          console.log('rejecting promise...');
          reject(error);
        });
      });
    }
  };
}]);
