app.directive('access', function() { 
  return { 
    restrict: 'E', 
    scope: {}, 
    templateUrl: 'directives/access.html',
    link: function(scope, element, attrs) {
      scope.accessCode = 'premier1X';
      scope.accessText = "Check Access Code";
      scope.hasAccess = false;
      
      var code = $('#access-input').val();
        
      scope.checkAccess = function() {
        if (!scope.hasAccess && code == scope.accessCode) {
          scope.accessText = "Welcome";
          scope.hasAccess = true;
        }
      }
      
    } 
  }; 
});
