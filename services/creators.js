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
          var media = [];
          docs.forEach((doc) => {
            creators[doc.id] = doc.data();
            if (!media.includes(doc.data().medium)) {
              media.push(doc.data().medium);
            }
          });
          resolve({
            creators: creators,
            media: media,
          });
        });
      });
    },
  };
}]);
