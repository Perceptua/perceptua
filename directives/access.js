app.directive('access', function() { 
  return { 
    restrict: 'E', 
    scope: {}, 
    templateUrl: 'directives/access.html',
    link: function(scope, element, attrs) {
      
      scope.accessText = "Check Access Code";
      scope.hasAccess = false;
        
      scope.checkAccess = function() {
        if (!scope.hasAccess) {
          scope.accessText = "Welcome";
          scope.hasAccess = true;
        }
      }
      
    } 
  }; 
});
