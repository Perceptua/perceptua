app.factory('content', ['$http', function($http) {
  
  // Use Firebase Storage (included in index.html) to get content data url
  var url = firebase.storage().ref('public/content.json').getDownloadURL();
  
  return $http.get(url)
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);
