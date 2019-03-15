app.factory('content', ['$http', function($http) {
  return $http.get('url')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);
