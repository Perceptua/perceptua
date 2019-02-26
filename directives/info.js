app.directive('info', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      philosopher: '=' 
    }, 
    templateUrl: 'directives/info.html',
    link: function(scope, element, attrs) {
        scope.displayInfo = "hidden",
        scope.displayed = false,
        
        scope.display = function() {
        if(scope.displayed) {
          scope.displayInfo = "hidden";
          scope.displayed = false;
        } else {
          scope.displayInfo = "showInfo"
          scope.displayed = true;
        }
      }
    }
  }; 
});
