app.directive('revealStudent', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      philosopher: '=' 
    }, 
    templateUrl: 'directives/revealStudent.html',
    link: function(scope, element, attrs) {
      scope.buttonText = "Show Student",
        scope.showStudent = "hidden",
        scope.revealed = false,
        
        scope.reveal = function() {
        if(scope.revealed) {
          scope.buttonText = "Show Student";
          scope.showStudent = "hidden";
          scope.revealed = false;
        } else {
          scope.buttonText = "Hide Student";
          scope.showStudent = "show"
          scope.revealed = true;
        }
      }
    }
  }; 
});
