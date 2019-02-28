app.directive('access', function() { 
  return { 
    restrict: 'E', 
    scope: {}, 
    templateUrl: 'directives/access.html',
    link: function(scope, element, attrs) {
      
      scope.accessText = "Check Access Code";
      scope.access = false;
        
      scope.access = function() {
        if (!scope.access) {
          scope.accessText = "Welcome";
          scope.access = true;
          element.text(scope.accessText);
        }
      }
      
    } 
  }; 
});
