app.factory('content', ['$http', function($http) {
  
  // Use Firebase Storage (included in index.html) to get content data url
  firebase.storage().ref('public/content.json').getDownloadURL().then(function(url) {
    return $http.get(url)
      .success(function(data) {
        return data;
      })
      .error(function(data) {
        return data;
      });
  });
}]);
