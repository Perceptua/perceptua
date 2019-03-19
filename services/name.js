app.factory('name', ['$rootScope', '$q', function($rootScope, $q) {
  return {
    convertToName: function(string) {
      var name = '';
      var allNames = string.split('_');
      for (var a in allNames) {
        if (allNames[a].length == 1) {
          allNames[a] += '.'
        }
        name += allNames[a];
        if (a < allNames.length - 1) {
          name += ' ';
        }
      }
      return name;
    },
  };
}]);
