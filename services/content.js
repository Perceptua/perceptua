app.factory('content', ['$http', function($http) {
  
  // Use Firebase Storage (included in index.html) to get content data url
  var contentData = null;
  firebase.storage().ref('public/content.json').getDownloadURL().then(function(url) {
    contentData = url;
  });
  
  console.log(contentData);
  
  if (contentData) {
    return $http.get(contentData)
      .success(function(data) {
        return data;
      })
      .error(function(data) {
        return data;
      });
  }
  
  return false;
}]);
