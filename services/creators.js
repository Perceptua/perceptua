app.factory('creators', ['$rootScope', '$q', function($rootScope, $q) {
  return {
    
    // converts name slug to string with spaces & '.' after middle initial
    getFullName: function(string) {
      var name = '';
      var allNames = string.split('_');
      for (var a in allNames) {
        if (allNames[a].length == 1) {
          allNames[a] += '.'
        }
        name += allNames[a].charAt(0).toUpperCase() + allNames[a].slice(1);
        if (a < allNames.length - 1) {
          name += ' ';
        }
      }
      return name;
    },
    
    // query firestore collection for requested creators
    getCreators: function(status, filter, orderBy) {
      return $q((resolve, reject) => {
        var docs = firebase.firestore().collection('creators').where('status', '==', status);
        
        if (filter) {
          docs = docs.where(filter.field, '==', filter.value);
        }
        if (orderBy) {
          docs = docs.orderBy(orderBy.field, orderBy.order);
        }
        
        docs.get().then((docs) => {
          var creators = [];
          var media = [];
          docs.forEach((doc) => {
            creators.push(doc.data());
            if (!media.includes(doc.data().medium)) {
              media.push(doc.data().medium);
            }
          });
          var index = Math.floor(Math.random() * creators.length);
          resolve({
            creators: creators,
            media: media,
            random: creators[index],
          });
        });
      });
    },
  };
}]);
