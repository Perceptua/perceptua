app.directive('upcoming', function() { 
  return { 
    restrict: 'E', 
    scope: {
      creator: '=',
    }, 
    templateUrl: 'directives/upcoming.html',
    link: function(scope, element, attrs) {
      $('#upcoming').click(function() {
        $('#upcoming-container').fadeIn('slow');
      });
      scope.hideOlder = function() {
        $('#upcoming-container').fadeOut('slow');
      }
    }
  };
});
