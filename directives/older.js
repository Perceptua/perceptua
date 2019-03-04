app.directive('older', function() { 
  return { 
    restrict: 'E', 
    scope: {
      creator: '=',
    }, 
    templateUrl: 'directives/older.html',
    link: function(scope, element, attrs) {
      $('#older').click(function() {
        $('older').first().fadeIn('slow');
      });
      scope.hideOlder = function() {
        $('older').first().fadeOut('slow');
      }
    }
  };
});
