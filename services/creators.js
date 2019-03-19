app.factory('creators', ['$rootScope', '$q', function($rootScope, $q) {
  return {
    getCreators: function(status='public', query=null) {
      console.log('generating query...');
      var docs = firebase.firestore().collection('creators').where('status', '==', status);

      if (query) {
        docs = docs.where(query.field, '==', query.value);
      }

      console.log('executing query...');
      var creators = {};
      docs.get().then((docs) => {
        console.log('looping over docs...');
        docs.forEach((doc) => {
          creators[doc.id] = doc.data();
        });
      });
      
      console.log(creators);
      return creators;
    }
  };
}]);
