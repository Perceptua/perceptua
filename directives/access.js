app.directive('access', function() { 
  return { 
    restrict: 'E', 
    scope: {}, 
    templateUrl: 'directives/access.html',
    link: function(scope, element, attrs) {
      
      scope.accessCode = 'premier1X';
      scope.accessText = "Check Access Code";
      scope.hasAccess = false;
              
      scope.checkAccess = function() {
        var code = $('#access-input').val();
        if (!scope.hasAccess && code == scope.accessCode) {
          scope.accessText = "Welcome";
          scope.hasAccess = true;
          $('#access-input').css('border', '0.25em solid #var(--dark)');
        } else {
          $('#access-input').css('border', '0.25em solid #990033');
        }
      }
    } 
  }; 
});
